import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, Button, TextField, Divider, Link, InputAdornment, Avatar } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { format } from 'date-fns';
import Image from 'next/image';
import MediaModal from './MediaModal';
import { palette } from '@/theme/constants';
import { styles } from '../../../../components/AppBar/CancelModal/styles';
import VideoThumbnail from './VideoThumbnail';
import { getMemories } from '@/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { memorySelector } from '@/store/selectors';
import { cdn_url } from '@/utils';

interface MediaItem {
  type: 'image' | 'audio' | 'video' | 'text';
  src?: string;
  alt?: string;
  content?: string;
  username: React.ReactNode;
  date: string;
  userImage: string;
}

interface MediaGridProps {
  story: any;
}

const MediaGrid: React.FC<MediaGridProps> = ({ story }) => {
  const dispatch = useDispatch();
  const { memoriesLoaded } = useSelector(memorySelector);
   const [avatarError, setAvatarError] = useState(false);
 const [openModal, setOpenModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  // Define state for filter and selected media item
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    dispatch(getMemories(story?.id));
  }, [story, dispatch]);
  console.log("i am the memory loded", memoriesLoaded)

  const handleClick = (filterType: string) => {
    setFilter(filterType);
  };

  const handleOpenModal = (item: MediaItem) => {
    setSelectedMedia(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedMedia(null);
  };


  const filteredMediaItems = memoriesLoaded?.filter(
    (item:any) => filter === 'All' || item.type === filter.toLowerCase()
  );

  const getIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image src={'/icons/image1.svg'} alt={'Image icon'} width={24} height={24} />;
      case 'video':
        return <Image src={'/icons/video1.svg'} alt={'Video icon'} width={24} height={24} />;
      case 'audio':
        return <Image src={'/icons/audio1.svg'} alt={'Audio icon'} width={19.71} height={24} />;
      case 'text':
        return <Image src={'/icons/text1.svg'} alt={'Text icon'} width={32} height={24} />;
      default:
        return null;
    }
  };

  return (
    
    // <Box sx={{ maxWidth: '100%', margin: '0 auto', padding: 2 }}>
    <Box sx={{ maxWidth: '100%', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px', paddingTop: 2, paddingBottom: 2 }}>
      {/* Search and Filter Controls */}
     <Box sx={{ margin:'0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        {/* Search Field */}
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          sx={{
            width: '150px',
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#1A205A',
              color: 'white',
              marginLeft:'20px',
              borderRadius: '30px',
              '& fieldset': { borderColor: '#1A205A' },
              '&:hover fieldset': { borderColor: '#1A205A' },
              '&.Mui-focused fieldset': { borderColor: '#1A205A' },
            },
            '& input': {
              color: 'white',
              padding: '10px 15px',
              fontSize: '0.9rem',
            },
            '& .MuiInputAdornment-root': { backgroundColor: '#1A205A', marginRight: '4px' },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                 <Image src={'/icons/search.svg'} alt={'icon'} width={22} height={22} />
              </InputAdornment>
            ),
          }}
        />

        {/* Filter Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
          {['All', 'Image', 'Video', 'Audio', 'Text'].map((label) => (
            <Button
              key={label}
              variant="contained"
              onClick={() => handleClick(label)}
              sx={{
                textTransform: 'none',
                backgroundColor: filter === label ? 'white' : '#2B3672',
                color: filter === label ? 'black' : 'white',
                borderRadius: '20px',
                margin: '8px',
                '&:hover': { backgroundColor: filter === label ? 'white' : '#2B3672', color: filter === label ? 'black' : 'white' },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Other Buttons */}
        <Box 
  sx={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: 0, 
    marginTop: { xs: 2, sm: 0 }, 
    justifyContent: { xs: 'center', sm: 'initial' } 
  }}
>
  <Button 
    size="small" 
    sx={{ 
      textTransform: 'none', 
      color: palette.dirtyWhite, 
      '&:hover': { color: palette.secondary } 
    }}
  >
    View
  </Button>
  <Button startIcon={<Image src={'/icons/wait.svg'} alt={'icon'} width={22} height={22} />} sx={{ color: palette.secondary }}/>
  <Button startIcon={<Image src={'/icons/grid.svg'} alt={'icon'} width={22} height={22} />} sx={{ color: palette.secondary }}/>
  <Button startIcon={<Image src={'/icons/editing.svg'} alt={'icon'} width={22} height={22} />} sx={{ color: palette.secondary }}/>
</Box>

      </Box>

      <Divider   sx={styles.divider} />

      {/* Media Grid */}
<Masonry  columns={{ xs: 2, sm: 3, md: 4 }} spacing={2} sx={{ margin: 0 }}>
      {filteredMediaItems.map((item:any, index:any) => (
        <Paper
          key={index}
          sx={{
            borderRadius: 2,
            overflow: 'hidden',
            backgroundColor: '#2B3672',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            cursor: 'pointer', // Add cursor style to indicate clickability
          }}
        >
          {/* Card Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 16px',
              backgroundColor: '#2B3672',
              color: 'white',
            }}
          >
            {/* Media Icon and Text */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ mr: 1 }}>{getIcon(item.type)}</Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'PolySans Trial, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '19.2px',
                    textAlign: 'left',
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: 'PolySans Trial, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '14.4px',
                    textAlign: 'left',
                  }}
                >
                  {format(new Date(item.created_at), 'MMM dd, yyyy')}
                </Typography>
              </Box>
            </Box>

            {/* User Avatar */}
            {/* <Link href={`/user/${encodeURIComponent(item.username)}`} underline="none">
              <Avatar src={item.userImage} alt={item.username} sx={{ width: 32, height: 32 }} />
            </Link> */}
            <Link href={`/user/${encodeURIComponent(item.username)}`} underline="none">
      <Avatar
        src={avatarError ? '/icons/image1.svg' : item.userImage} // Use dummy avatar if image fails
        alt={item.username}
        sx={{ width: 32, height: 32 }}
        onError={() => setAvatarError(true)} // Set error state if image fails to load
      />
    </Link>
          </Box>

          {/* Media Content */}
          <Box sx={{ padding: '16px' }}
           onClick={() => handleOpenModal(item)}
           >
            {/* {item.type === 'image' && <Image src={`${cdn_url}${item.asset}`} alt={item.title} width={100} height={100} />} */}
            {item.type === 'image' && (
  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <Image src={`${cdn_url}${item.asset}`} alt={item.title} layout="responsive" width={100} height={100} />
  </Box>
)}
            {item.type === 'video' && (
              <VideoThumbnail videoSrc={`${cdn_url}${item.asset}`}/>
            )}
           {item.type === 'audio' && (
  <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '8px' }}>
    {/* Left image with responsive size */}
    <div
      style={{
        position: 'relative',
        cursor: 'pointer',
        width: '50px',  // Default size for larger screens
        maxWidth: '15%',  // Responsive width for smaller screens
      }}
      onClick={() => handleOpenModal(item)}
    >
      <Image src={'/icons/playbut.svg'} alt={'icon'} layout="responsive" width={50} height={50} />
    </div>
    
    {/* Right image with responsive size */}
    <div
      style={{
        position: 'relative',
        cursor: 'pointer',
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '70%',  // Limits width for smaller screens
      }}
      onClick={() => handleOpenModal(item)}
    >
      <Image src={'/icons/audiolay.svg'} alt={'icon'} layout="responsive" width={199} height={55} />
    </div>
  </div>
)}

            {item.type === 'text' && (
              <Box
                sx={{
                  maxHeight: { xs: '200px', sm: '220px', md: '264px' },  // Responsive maxHeight
                  width: { xs: '100%', sm: '220px', md: '250px' },        // Responsive width
                  overflow: 'hidden',
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '20px',
                    padding: '16px',
                    background: 'linear-gradient(to bottom, rgba(43, 54, 114, 0), #2B3672)',
                  },
                }}
              >
                <Typography
                  variant="body2"
                  color="white"
                  sx={{
                    fontFamily: 'PolySans Trial, sans-serif',
                    fontSize: { xs: '10px', sm: '11px', md: '12px' }, // Responsive font size
                    fontWeight: 400,
                    lineHeight: { xs: '12px', sm: '13.2px', md: '14.4px' }, // Responsive line height
                    textAlign: 'left',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {item.asset}
                </Typography>
              </Box>
            )}
          </Box>
        </Paper>
      ))}
    </Masonry>
    {selectedMedia && (
        <MediaModal open={openModal} onClose={handleCloseModal} mediaContent={selectedMedia} />
      )}
    </Box>
    
  );
};

export default MediaGrid;
