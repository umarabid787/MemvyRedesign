// import React, { useState } from 'react';
// import { Box, Paper, Typography, Avatar, Button, TextField, Divider, IconButton, Link, InputAdornment } from '@mui/material';
// import Masonry from '@mui/lab/Masonry';
// import { format } from 'date-fns';
// // import SearchIcon from '@mui/icons-material/Search';
// // import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import MediaModal from './MediaModal';
// import VideoThumbnail from './VideoThumbnail';
// import img1 from '../../../../../public/images/95ed528db41e7c00e1ed7fcb7f31e1cc.png';
// import Image from 'next/image';

// // Define types for media items
// interface MediaItem {
//   type: 'image' | 'audio' | 'video' | 'text';
//   src?: string;
//   alt?: string;
//   content?: string;
//   username: React.ReactNode;
//   date: string;
//   userImage: string;
// }

// const mediaItems: MediaItem[] = [
//    { 
//     type: 'image', 
//     src: '/assets/1.jpeg', 
//     alt: 'Random Image 1', 
//     username:  (
//       <Link href={`/user/${encodeURIComponent('Marek Novak')}`} color="white" underline="hover">
//       Marek Novak
//       </Link>
//     ), 
//     date: '2024-11-01',
//     userImage: '/assets/Ellipse 63.png' // User image for user1
//   },
  
//   { 
//     type: 'audio', 
//     src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 
//     alt: 'Sample Audio', 
//     username: 
//     (
//       <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
//      Johansson Daniela 
//       </Link>
//     ), 
//     date: '2024-11-05',
//     userImage: '/assets/Ellipse 51.png' // User image for user5
//   },
//   { 
//     type: 'video', 
//     src: '/assets/hello.mp4', 
//     alt: 'Sample Video', 
//     username: (
//       <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
//     Daniela 
//       </Link>
//     ), 
//     date: '2024-11-02',
//     userImage: '../../../../../public/images/95ed528db41e7c00e1ed7fcb7f31e1cc.png' // User image for user2
//   },
//   { 
//     type: 'text', 
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a pellentesque massa. Nam eu tincidunt ipsum. Vivamus malesuada risus nec odio bibendum finibus. Etiam a metus nec ligula lobortis facilisis. Cras dui arcu, porta eget finibus vitae, laoreet id sem. Vivamus lectus orci, tincidunt id magna in, elementum mollis ipsum. Integer eu euismod leo. Aenean elementum quis ligula non consequat. Duis eu justo eget dolor hendrerit vulputate sed eget mauris. Proin congue, magna quis sodales venenatis, orci leo scelerisque velit, in ullamcorper nulla sapien non augue. Morbi dapibus eget mi sit amet consectetur. Phasellus consectetur faucibus quam in ullamcorper. Nullam in risus non lectus convallis eleifend. Donec ac sapien mauris. Nunc sagittis porta urna, vel pretium metus dignissim vel. Fusce eu '
// , 
//     username: (
//       <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
//     Daniela Rossi
//       </Link>
//     ),  
//     date: '2024-11-12',
//     userImage: '/assets/Ellipse 54.png' // User image for user12
//   }, // New text item
//   { 
//     type: 'image', 
//     src: '/assets/1.jpeg', 
//     alt: 'Random Image 1', 
//     username: (
//       <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
//     Marek Novak
//       </Link>
//     ), 
//     date: '2024-11-03',
//     userImage: '/assets/Ellipse 61.png' // User image for user3
//   },
//   { 
//     type: 'image', 
//     src: '/assets/download (18).jpeg', 
//     alt: 'Random Image 3', 
//     username: (
//       <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
//      Johansson  Svensson
//       </Link>
//     ),  
//     date: '2024-11-04',
//     userImage: '/assets/Ellipse 62.png' // User image for user4
//   },
//   { 
//     type: 'audio', 
//     src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 
//     alt: 'Sample Audio', 
//     username: (
//       <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
//     Emma  Svensson
//       </Link>
//     ),  
//     date: '2024-11-05',
//     userImage: '/assets/Ellipse 63.png' // User image for user5
//   },
//   { 
//     type: 'video', 
//     src: '/assets/check.mp4', 
//     alt: 'Sample Video 2', 
//     username: (
//       <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
//      Svensson 
//       </Link>
//     ),  
//     date: '2024-11-06',
//     userImage: '/assets/Ellipse 70.png' // User image for user6
//   },
//   { 
//     type: 'image', 
//     src: '/assets/Rectangle6.png', 
//     alt: 'Random Image 2', 
//     username: (
//       <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
//     Johan Svensson
//       </Link>
//     ), 
//     date: '2024-11-07',
//     userImage: '/assets/Ellipse 52.png' // User image for user7
//   },
//   { 
//     type: 'image', 
//     src: '/assets/download (18).jpeg', 
//     alt: 'Random Image 3', 
//     username: (
//       <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
//    Elena Petrova
//       </Link>
//     ),  
//     date: '2024-11-08',
//     userImage: '/assets/Ellipse 54.png' // User image for user8
//   },
//   // Your media items array here, as provided earlier.
// ];

// const GridLayoutCheck: React.FC = () => {
//   const [filter, setFilter] = useState<string>('All');
//   const [openModal, setOpenModal] = useState<boolean>(false);
//   const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

//   const handleClick = (filterType: string) => {
//     setFilter(filterType);
//   };

//   const handleOpenModal = (item: MediaItem) => {
//     setSelectedMedia(item);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setSelectedMedia(null);
//   };

//   const filteredMediaItems = mediaItems.filter((item) => filter === 'All' || item.type === filter.toLowerCase());

//   const getIcon = (type: string) => {
//     switch (type) {
//       case 'image':
//         return <Image src={'/icons/image1.svg'} alt={' Image icon'} width={24} height={24} />;
//       case 'video':
//         return <Image src={'/icons/video1.svg'} alt={'icon'} width={24} height={24} />;
//       case 'audio':
//         return <Image src={'/icons/audio1.svg'} alt={'icon'} width={19.71} height={24} />;
//       case 'text':
//         return <Image src={'/icons/text1.svg'} alt={'icon'} width={32} height={24} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Box sx={{ maxWidth: 1200, margin: '0 auto', padding: 2 }}>
//       {/* <Box sx={{ maxWidth: 1200, margin: '0 auto', px: 2, textAlign: 'center' }}> */}
// {/* </Box></Box><Box sx={{ maxWidth: 1200, margin: '0 auto', px: 2, textAlign: 'center' }}> */}

//       {/* Search and Filter Controls */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
//         {/* Search Field */}
//         <TextField
//           variant="outlined"
//           placeholder="Search"
//           size="small"
//           sx={{
//             width: '150px',
//             '& .MuiOutlinedInput-root': {
//               backgroundColor: '#1A205A',
//               color: 'white',
//               borderRadius: '30px',
//               '& fieldset': { borderColor: '#1A205A' },
//               '&:hover fieldset': { borderColor: '#1A205A' },
//               '&.Mui-focused fieldset': { borderColor: '#1A205A' },
//             },
//             '& input': {
//               color: 'white',
//               padding: '10px 15px',
//               fontSize: '0.9rem',
//             },
//             '& .MuiInputAdornment-root': { backgroundColor: '#1A205A', marginRight: '4px' },
//           }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                  <Image src={'/icons/search.svg'} alt={'icon'} width={22} height={22} />
//               </InputAdornment>
//             ),
//           }}
//         />

//         {/* Filter Buttons */}
//         <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
//           {['All', 'Image', 'Video', 'Audio', 'Text'].map((label) => (
//             <Button
//               key={label}
//               variant="contained"
//               onClick={() => handleClick(label)}
//               sx={{
//                 textTransform: 'none',
//                 backgroundColor: filter === label ? 'white' : '#2B3672',
//                 color: filter === label ? 'black' : 'white',
//                 borderRadius: '20px',
//                 margin: '8px',
//                 '&:hover': { backgroundColor: filter === label ? 'white' : '#2B3672', color: filter === label ? 'black' : 'white' },
//               }}
//             >
//               {label}
//             </Button>
//           ))}
//         </Box>

//         {/* Other Buttons */}
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 0, marginTop: { xs: 2, sm: 0 }, justifyContent: { xs: 'center', sm: 'initial' } }}>
//           <Button size="small" sx={{ textTransform: 'none', color: 'white', '&:hover': { color: 'white' } }}>View</Button>
//           {/* <Button startIcon={<img src="/assets/waiting.png" alt="Waiting Icon" style={{ width: '13.5px', height: '18px' }} />} size="small" sx={{ textTransform: 'none', color: 'secondary', '&:hover': { color: 'white', '& img': { filter: 'brightness(0) saturate(100%) invert(100%)' } } }} /> */}
//           <Button  startIcon={<Image src={'/icons/wait.svg'} alt={'icon'} width={22} height={22} />}/>
//           <Button  startIcon={<Image src={'/icons/grid.svg'} alt={'icon'} width={22} height={22} />}/>
//           <Button  startIcon={<Image src={'/icons/editing.svg'} alt={'icon'} width={22} height={22} />}/>
//         </Box>
//       </Box>

//       <Box sx={{ maxWidth: 1200, margin: '0 auto' }}>
//   <Divider sx={{ backgroundColor: 'secondary.main', height: '1px', mt: 1, mb: 2 }} />
// </Box>


//       {/* Media Grid */}
//        <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
//       {filteredMediaItems.map((item, index) => (
//         <Paper
//           key={index}
//           sx={{
//             borderRadius: 2,
//             overflow: 'hidden',
//             backgroundColor: '#2B3672',
//             color: 'white',
//             display: 'flex',
//             flexDirection: 'column',
//             border: '1px solid rgba(255, 255, 255, 0.2)',
//             cursor: 'pointer', // Add cursor style to indicate clickability
//           }}
//         >
//           {/* Card Header */}
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               padding: '8px 16px',
//               backgroundColor: '#2B3672',
//               color: 'white',
//             }}
//           >
//             {/* Media Icon and Text */}
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <Box sx={{ mr: 1 }}>{getIcon(item.type)}</Box>
//               <Box>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     fontFamily: 'PolySans Trial, sans-serif',
//                     fontSize: '16px',
//                     fontWeight: 400,
//                     lineHeight: '19.2px',
//                     textAlign: 'left',
//                   }}
//                 >
//                   {item.username}
//                 </Typography>

//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontFamily: 'PolySans Trial, sans-serif',
//                     fontSize: '12px',
//                     fontWeight: 400,
//                     lineHeight: '14.4px',
//                     textAlign: 'left',
//                   }}
//                 >
//                   {format(new Date(item.date), 'MMM dd, yyyy')}
//                 </Typography>
//               </Box>
//             </Box>

//             {/* User Avatar */}
//             <Link href={`/user/${encodeURIComponent(item.username)}`} underline="none">
//               <Avatar src={item.userImage} alt={item.username} sx={{ width: 32, height: 32 }} />
//             </Link>
//           </Box>

//           {/* Media Content */}
//           <Box sx={{ padding: '16px' }} onClick={() => handleOpenModal(item)}>
//             {item.type === 'image' && <img src={item.src} alt={item.alt} style={{ width: '100%' }} />}
//             {item.type === 'video' && (
//               <VideoThumbnail videoSrc={item.src} />
//             )}
//            {item.type === 'audio' && (
//   <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '8px' }}>
//     {/* Left image with responsive size */}
//     <div
//       style={{
//         position: 'relative',
//         cursor: 'pointer',
//         width: '50px',  // Default size for larger screens
//         maxWidth: '15%',  // Responsive width for smaller screens
//       }}
//       onClick={handleOpenModal}
//     >
//       <Image src={'/icons/playbut.svg'} alt={'icon'} layout="responsive" width={50} height={50} />
//     </div>
    
//     {/* Right image with responsive size */}
//     <div
//       style={{
//         position: 'relative',
//         cursor: 'pointer',
//         flex: '1',
//         display: 'flex',
//         justifyContent: 'center',
//         maxWidth: '70%',  // Limits width for smaller screens
//       }}
//       onClick={handleOpenModal}
//     >
//       <Image src={'/icons/audiolay.svg'} alt={'icon'} layout="responsive" width={199} height={55} />
//     </div>
//   </div>
// )}

//             {item.type === 'text' && (
//               <Box
//                 sx={{
//                   maxHeight: { xs: '200px', sm: '220px', md: '264px' },  // Responsive maxHeight
//                   width: { xs: '100%', sm: '220px', md: '250px' },        // Responsive width
//                   overflow: 'hidden',
//                   position: 'relative',
//                   '&:after': {
//                     content: '""',
//                     position: 'absolute',
//                     bottom: 0,
//                     left: 0,
//                     right: 0,
//                     height: '20px',
//                     padding: '16px',
//                     background: 'linear-gradient(to bottom, rgba(43, 54, 114, 0), #2B3672)',
//                   },
//                 }}
//               >
//                 <Typography
//                   variant="body2"
//                   color="white"
//                   sx={{
//                     fontFamily: 'PolySans Trial, sans-serif',
//                     fontSize: { xs: '10px', sm: '11px', md: '12px' }, // Responsive font size
//                     fontWeight: 400,
//                     lineHeight: { xs: '12px', sm: '13.2px', md: '14.4px' }, // Responsive line height
//                     textAlign: 'left',
//                     whiteSpace: 'pre-line',
//                   }}
//                 >
//                   {item.content}
//                 </Typography>
//               </Box>
//             )}
//           </Box>
//         </Paper>
//       ))}
//     </Masonry>
//       {/* Media Modal */}
//     {selectedMedia && (
//   <MediaModal open={openModal} onClose={handleCloseModal} mediaContent={selectedMedia} />
// )}
//     </Box>
//   );
// };

// export default GridLayoutCheck;
import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, Button, TextField, Divider, Link, InputAdornment, Avatar } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { format } from 'date-fns';
import Image from 'next/image';
import MediaModal from './MediaModal';

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
    <Box sx={{ maxWidth: 1200, margin: '0 auto', padding: 2 }}>
      {/* Search and Filter Controls */}
     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0, marginTop: { xs: 2, sm: 0 }, justifyContent: { xs: 'center', sm: 'initial' } }}>
          <Button size="small" sx={{ textTransform: 'none', color: 'white', '&:hover': { color: 'white' } }}>View</Button>
          {/* <Button startIcon={<img src="/assets/waiting.png" alt="Waiting Icon" style={{ width: '13.5px', height: '18px' }} />} size="small" sx={{ textTransform: 'none', color: 'secondary', '&:hover': { color: 'white', '& img': { filter: 'brightness(0) saturate(100%) invert(100%)' } } }} /> */}
          <Button  startIcon={<Image src={'/icons/wait.svg'} alt={'icon'} width={22} height={22} />}/>
          <Button  startIcon={<Image src={'/icons/grid.svg'} alt={'icon'} width={22} height={22} />}/>
          <Button  startIcon={<Image src={'/icons/editing.svg'} alt={'icon'} width={22} height={22} />}/>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: 'secondary.main', height: '1px', mt: 1, mb: 2 }} />

      {/* Media Grid */}
<Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
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
                  {/* {format(new Date(item.date), 'MMM dd, yyyy')} */}
                </Typography>
              </Box>
            </Box>

            {/* User Avatar */}
            <Link href={`/user/${encodeURIComponent(item.username)}`} underline="none">
              <Avatar src={item.userImage} alt={item.username} sx={{ width: 32, height: 32 }} />
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
