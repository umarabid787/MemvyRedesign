import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography, Avatar, AvatarGroup, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import {createTheme } from '@mui/material/styles';
// Replace with the correct path to your theme

interface StoryHeaderProps {
  imgSrc: string;
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
  title, 
  createdDate, 
  description, 
  collaborators, 
  onBackClick 
}) => {
  return (
    <ThemeProvider theme={theme}>
      {/* Fragment to wrap the entire content */}
      <>
        <div className="ellipse-background1">
          <AppBar position="relative" style={{ backgroundColor: 'inherit', marginTop: '10rem' }}>
            <Toolbar
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: { xs: '0 10px', md: '0 50px' },
              }}
            >
              <Button
                style={{
                  color: '#A9B4CC',
                  fontSize: '14px',
                  textTransform: 'none',
                }}
                startIcon={<Image src={'/icons/backbu.svg'} alt={'icon'} width={8} height={14} />}
                onClick={onBackClick}
              >
                Back
              </Button>

              <Button
                style={{ color: '#FFFFFF', fontSize: '14px', textTransform: 'none' }}
                variant="contained"
                color="secondary"
                sx={{
                  borderRadius: '20px',
                  padding: '11px 16px',
                  marginRight: { xs: '0', md: '50px' },
                }}
                startIcon={<Image src={'/icons/editMem.svg'} alt={'icon'} width={13} height={13} />}
              >
                Edit this Memvy
              </Button>
            </Toolbar>
          </AppBar>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '170px', margin: '20px 40px' }}>
            <Image src={imgSrc} alt="Centered" width={159} height={160} style={{ objectFit: 'contain' }} />
          </Box>

          <Typography variant="h3" sx={{ fontFamily: 'PolySans Trial', fontSize: '55px', color: 'white', textAlign: 'center', marginBottom: '10px' }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ color: '#B3BED4', fontSize: '16px', textAlign: 'center' }}>
            Created {createdDate}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px' }}>
            <AvatarGroup max={4}>
              {collaborators.map((collab, index) => (
                <Avatar key={index} alt={collab.alt} src={collab.src} sx={{ width: 36, height: 36 }} />
              ))}
            </AvatarGroup>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '0 20px', marginBottom: '10px' }}>
            <Typography variant="body1" style={{ color: 'white', maxWidth: '650px' }}>
              {description}
            </Typography>
          </Box>
        </div>
      </>
    </ThemeProvider>
  );
};

export default StoryHeader;
