// // import React from 'react';
// import { AppBar, Toolbar, Button, Box, Typography, Avatar, AvatarGroup, ThemeProvider } from '@mui/material';
// import Image from 'next/image';
// import { createTheme } from '@mui/material/styles';
// import { format } from 'date-fns';
// import { extendedPalette } from '@/theme/constants';

// interface StoryHeaderProps {
//   imgSrc: string; // First image source
//   secondImgSrc: string; // Second image source
//   title: string;
//   createdDate: string;
//   description: string;
//   collaborators: { src: string; alt: string }[];
//   onBackClick: () => void;
// }

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#2B3672',
//     },
//   },
//   shadows: Array(25).fill('none') as [
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none",
//     "none"
//   ], // Explicitly define 25 elements with 'none'
// });

// const StoryHeader: React.FC<StoryHeaderProps> = ({
//   imgSrc,
//   secondImgSrc,
//   title,
//   createdDate,
//   description,
//   collaborators = [],
//   onBackClick,
// }) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <>
//         <div>
//           <AppBar
//             position="relative"
//             style={{ backgroundColor: 'inherit', marginTop: '10rem' }}
//           >
//             <Toolbar
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 padding: { xs: '0 10px', md: '0 50px' },
//               }}
//             >
//               <Button
//                 style={{ ...extendedPalette.backButton, textTransform: 'none' }}
//                 startIcon={
//                   <Image
//                     src={'/icons/backbu.svg'}
//                     alt={'icon'}
//                     width={8}
//                     height={14}
//                   />
//                 }
//                 onClick={onBackClick}
//               >
//                 Back
//               </Button>

//               <Button
//                 variant="contained"
//                 sx={{
//                   ...extendedPalette.editButton,
//                 }}
//                 startIcon={
//                   <Image
//                     src={'/icons/editMem.svg'}
//                     alt={'icon'}
//                     width={13}
//                     height={13}
//                   />
//                 }
//               >
//                 Edit this Memvy
//               </Button>
//             </Toolbar>
//           </AppBar>

//           {/* Two images side by side */}
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               gap: '20px', // Space between the images
//               margin: '20px 40px',
//             }}
//           >
//             <Image
//               src={imgSrc}
//               alt="Image 1"
//               width={100}
//               height={100}
//               style={{ objectFit: 'contain' }}
//             />
//             <Image
//               src={secondImgSrc}
//               alt="Image 2"
//               width={100}
//               height={100}
//               style={{ objectFit: 'contain' }}
//             />
//           </Box>

//           <Typography
//             variant="h3"
//             sx={{
//               fontFamily: 'PolySans Trial',
//               fontSize: '55px',
//               color: extendedPalette.storyTitle,
//               textAlign: 'center',
//               marginBottom: '10px',
//             }}
//           >
//             {title}
//           </Typography>
//           <Typography variant="h6" sx={{ ...extendedPalette.dateStyle }}>
//             Created {format(new Date(), 'MMM dd, yyyy')}
//           </Typography>

//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               padding: '24px',
//             }}
//           >
//             <AvatarGroup max={4}>
//               {collaborators.map((collab, index) => (
//                 <Avatar
//                   key={index}
//                   alt={collab.alt}
//                   src={collab.src}
//                   sx={{ width: 36, height: 36 }}
//                 />
//               ))}
//             </AvatarGroup>
//           </Box>

//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               textAlign: 'center',
//               margin: '0 20px',
//               marginBottom: '10px',
//             }}
//           >
//             <Typography
//               variant="body1"
//               style={{ ...extendedPalette.description }}
//             >
//               {description}
//             </Typography>
//           </Box>
//         </div>
//       </>
//     </ThemeProvider>
//   );
// };

// export default StoryHeader;
import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  ThemeProvider,
  Divider,
} from '@mui/material';
import Image from 'next/image';
import { createTheme } from '@mui/material/styles';
import { format } from 'date-fns';
import { extendedPalette } from '@/theme/constants';
import EditMemIcon from '../../../../../public/icons/editMem';

interface StoryHeaderProps {
  imgSrc: string; // First image source (Extra Asset 1)
  secondImgSrc?: string; // Second image source (Extra Asset 2)
  coverImage: string; // Cover image
  title: string;
  createdDate: string;
  description: string;
  collaborators: { src: string; alt: string }[];
  onBackClick: () => void;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#2B3672',
    },
  },
 shadows: Array(25).fill('none') as [
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none"
  ], // Explicitly define 25 elements with 'none'
});

const StoryHeader: React.FC<StoryHeaderProps> = ({
  imgSrc,
  secondImgSrc,
  coverImage,
  title,
  createdDate,
  description,
  collaborators = [],
  onBackClick,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar
          position="relative"
          style={{ backgroundColor: 'inherit', marginTop: '10rem' }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: { xs: '0 10px', md: '0 50px' },
            }}
          >
            <Button
              style={{ ...extendedPalette.backButton, textTransform: 'none' }}
              startIcon={
                <Image
                  src={'/icons/backbu.svg'}
                  alt={'icon'}
                  width={8}
                  height={14}
                />
              }
              onClick={onBackClick}
            >
              Back
            </Button>

            <Button
              variant="contained"
              sx={{
                ...extendedPalette.editButton,
              }}
              startIcon={
                <EditMemIcon color={extendedPalette.buttonColorGrid} className='img'></EditMemIcon>
              }
            >
              Edit this Memvy
            </Button>
          </Toolbar>
        </AppBar>

        {/* Conditionally render images */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px', // Space between the images
            margin: '20px 40px',
          }}
        >
          {imgSrc !== "" && secondImgSrc !== "" ? (
            <>
              {imgSrc && (
                <Image
                  src={imgSrc}
                  alt="Extra Asset 1"
                  width={100}
                  height={100}
                  style={{ objectFit: 'contain' }}
                />
              )}
               <Divider
        orientation="vertical"
        flexItem
        sx={{ height: '100px', borderColor: 'rgba(51, 51, 51, 1)', margin: '0 20px' }} // Adjust height and color as needed
      />
              {secondImgSrc && (
                <Image
                  src={secondImgSrc}
                  alt="Extra Asset 2"
                  width={100}
                  height={100}
                  style={{ objectFit: 'contain' }}
                />
              )}
            </>
          ) : (
            <Image
              src={coverImage}
              alt="Cover Image"
              width={200}
              height={200}
              style={{ objectFit: 'contain' }}
            />
          )}
        </Box>

        <Typography
          variant="h3"
          sx={{
            fontFamily: 'PolySans Trial',
            fontSize: '55px',
            color: extendedPalette.storyTitle,
            textAlign: 'center',
            marginBottom: '10px',
          }}
        >
          {title}
        </Typography>
        <Typography variant="h6" sx={{ ...extendedPalette.dateStyle }}>
          Created {format(new Date(), 'MMM dd, yyyy')}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px',
          }}
        >
          <AvatarGroup max={4}>
            {collaborators.map((collab, index) => (
              <Avatar
                key={index}
                alt={collab.alt}
                src={collab.src}
                sx={{ width: 36, height: 36 }}
              />
            ))}
          </AvatarGroup>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            margin: '0 20px',
            marginBottom: '10px',
          }}
        >
          <Typography
            variant="body1"
            style={{ ...extendedPalette.description }}
          >
            {description}
          </Typography>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default StoryHeader;
