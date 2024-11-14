// import React, { useEffect, useRef } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   IconButton,
//   Avatar,
//   Typography
// } from '@mui/material';
// import { styled } from '@mui/system';
// import { cdn_url } from '@/utils';
// // import CloseIcon from '@mui/icons-material/Close';

// type MediaType = 'image' | 'audio' | 'video' | 'text';

// interface MediaContentItem { // Renamed from MediaItem to MediaContentItem
//   type: MediaType;
//   src?: string;
//   asset?: string;
//   alt?: string;
//   content?: string;
//   username: string;
//   userImage: string;
// }

// interface MediaModalProps {
//   open: boolean;
//   onClose: () => void;
//   mediaContent: MediaContentItem; // Changed prop name from mediaItem to mediaContent
// }

// const StyledDialogContent = styled(DialogContent)({
//   backgroundColor: '#2B3672',
//   color: 'white',
//   padding: '20px',
//   overflow: 'hidden',
// });

// const StyledDialogTitle = styled(DialogTitle)({
//   backgroundColor: '#2B3672',
//   color: 'white',
//   position: 'relative',
//   padding: '16px',
//   overflow: 'hidden',
//   display: 'flex',
//   alignItems: 'center',
// });

// const MediaModal: React.FC<MediaModalProps> = ({ open, onClose, mediaContent }) => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   useEffect(() => {
//     if (open && mediaContent) {
//       if (mediaContent.type === 'video' && videoRef.current) {
//         videoRef.current.muted = true;
//         videoRef.current.play().catch((error) => {
//           console.error("Autoplay prevented (video):", error);
//         });
//       } else if (mediaContent.type === 'audio' && audioRef.current) {
//         audioRef.current.muted = true;
//         audioRef.current.play().catch((error) => {
//           console.error("Autoplay prevented (audio):", error);
//         });
//       }
//     }
//   }, [open, mediaContent]);

//   if (!mediaContent) return null;

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="md" sx={{ overflow: 'hidden' }}>
//       <StyledDialogTitle>
//         <Avatar src={mediaContent.userImage} alt={mediaContent.username} sx={{ marginRight: 2 }} />
//         {mediaContent.title}
//         <IconButton
//           edge="end"
//           color="inherit"
//           onClick={onClose}
//           sx={{
//             position: 'absolute',
//             top: 0,
//             right: 8,
//             padding: '6px',
//           }}
//         >
//           {/* <CloseIcon /> */}
//         </IconButton>
//       </StyledDialogTitle>

//       <StyledDialogContent>
//         {mediaContent.type === 'image' && (
//           <img src={`${cdn_url}${mediaContent.asset}`} alt={mediaContent.alt} style={{ width: '100%' }} />
//         )}
//         {mediaContent.type === 'audio' && (
//           <audio
//             ref={audioRef}
//             autoPlay
//             muted
//             controls
//             src={`${cdn_url}${mediaContent.asset}`}
//           />
//         )}
//         {mediaContent.type === 'video' && (
//           <video
//             ref={videoRef}
//             autoPlay
//             muted
//             controls
//             src={`${cdn_url}${mediaContent.asset}`}
//             style={{ width: '100%' }}
//           />
//         )}
//         {mediaContent.type === 'text' && <Typography>{mediaContent.asset}</Typography>}
//       </StyledDialogContent>
//     </Dialog>
//   );
// };

// export default MediaModal;

import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Avatar,
  Typography
} from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image'; // Ensure you import the Image component if using Next.js
import { cdn_url } from '@/utils';
// import CloseIcon from '@mui/icons-material/Close';

type MediaType = 'image' | 'audio' | 'video' | 'text';

interface MediaContentItem {
  type: MediaType;
  src?: string;
  asset?: string;
  alt?: string;
  content?: string;
  username: string;
  userImage: string;
  title: string;
  memory_details?: {
    complementaryImage?: string[];
  };
}

interface MediaModalProps {
  open: boolean;
  onClose: () => void;
  mediaContent: MediaContentItem;
}

const StyledDialogContent = styled(DialogContent)(() => ({
  backgroundColor: '#2B3672',
  color: 'white',
  padding: '20px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledDialogTitle = styled(DialogTitle)(() => ({
  backgroundColor: '#2B3672',
  color: 'white',
  position: 'relative',
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const MediaModal: React.FC<MediaModalProps> = ({ open, onClose, mediaContent }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  // Adjust the dialog size based on the content type
  const dialogMaxWidth = mediaContent.type === 'video' || showAdditionalContent ? 'md' : 'sm';
  const dialogHeight = mediaContent.type === 'video' || showAdditionalContent ? 'auto' : '400px';

  useEffect(() => {
    if (open && mediaContent) {
      if (mediaContent.type === 'video' && videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.play().catch((error) => {
          console.error("Autoplay prevented (video):", error);
        });
      } else if (mediaContent.type === 'audio' && audioRef.current) {
        audioRef.current.muted = true;
        audioRef.current.play().catch((error) => {
          console.error("Autoplay prevented (audio):", error);
        });
      }
    }
  }, [open, mediaContent]);

  if (!mediaContent) return null;

  const handleToggleContent = () => {
    setShowAdditionalContent(!showAdditionalContent);
  };

  // Check if additional data exists (complementary images)
  const hasAdditionalContent = mediaContent.memory_details?.complementaryImage?.length > 0;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={dialogMaxWidth}
      sx={{ overflow: 'hidden', height: dialogHeight }}
    >
      <StyledDialogTitle>
        <Avatar src={mediaContent.userImage} alt={mediaContent.username} sx={{ marginRight: 2 }} />
        {mediaContent.title}
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 0,
            right: 8,
            padding: '6px',
          }}
        >
          {/* <CloseIcon /> */}
        </IconButton>
      </StyledDialogTitle>

      <StyledDialogContent>
        {/* Show video when not showing additional content */}
        {mediaContent.type === 'video' && !showAdditionalContent && (
          <video
            ref={videoRef}
            autoPlay
            muted
            controls
            src={`${cdn_url}${mediaContent.asset}`}
            style={{ width: '500px', height: 'auto' }}
          />
        )}

        {/* Show audio when not showing additional content */}
        {mediaContent.type === 'audio' && !showAdditionalContent && (
          <audio
            ref={audioRef}
            autoPlay
            muted
            controls
            src={`${cdn_url}${mediaContent.asset}`}
          />
        )}

        {/* Show image when not showing additional content */}
        {mediaContent.type === 'image' && !showAdditionalContent && (
          <img src={`${cdn_url}${mediaContent.asset}`} alt={mediaContent.alt} style={{ width: '100%' }} />
        )}

        {/* Show text when not showing additional content */}
        {mediaContent.type === 'text' && !showAdditionalContent && (
          <Typography>{mediaContent.asset}</Typography>
        )}

        {/* Show additional image when content is toggled */}
        {showAdditionalContent && mediaContent.memory_details?.complementaryImage && (
          <img
            src={`${cdn_url}${mediaContent.memory_details.complementaryImage[0]}`}
            alt="Complementary"
            style={{ width: '100%' }}
          />
        )}

        {/* Show SVG icon instead of button to toggle content */}
        {hasAdditionalContent && (
          <div
            onClick={handleToggleContent}
            style={{ marginTop: 16, cursor: 'pointer' }}
          >
            <Image
              src={'/icons/image1.svg'}
              alt={'Image icon'}
              width={24}
              height={24}
            />
          </div>
        )}
      </StyledDialogContent>
    </Dialog>
  );
};

export default MediaModal;

