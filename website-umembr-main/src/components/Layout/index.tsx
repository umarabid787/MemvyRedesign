// import Box from '@mui/material/Box';
// import { MuiAppBar, Drawer } from '@/components';
// import { Theme, useMediaQuery } from '@mui/material';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setSeparation } from '@/store/actions';

// export const Layout = ({ children }: any) => {
//   const router = useRouter();
//   const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
//   const dispatch = useDispatch();
//   const dispatchSeparation = () => {
//     if (!isMobile && router?.pathname == '/app/story/[id]') return dispatch(setSeparation('0rem'));
//     if ((router.pathname == '/app/home' || router?.asPath?.includes('story/')) && !isMobile)
//       return dispatch(setSeparation('7.875rem'));
//     if (router?.asPath?.includes('story/') && isMobile) return dispatch(setSeparation('3.875rem'));
//     if (router.pathname.includes('story/create')) return dispatch(setSeparation('3.875rem'));
//     if (router.pathname?.includes('memory/create')) return dispatch(setSeparation('5.875rem'));
//     dispatch(setSeparation('5.375rem'));
//   };

//   useEffect(() => {
//     dispatchSeparation();
//   }, [router.pathname, isMobile]);

//   return (
//     <>
//       <MuiAppBar />
//       <Box display={'flex'} id='component-main' position={'relative'}>
//         <Drawer />
//         <Box

//           component='main'
//           height={isMobile ? 'auto' : `100%`}
//           width={'100%'}
//           minHeight={isMobile ? 'auto' : `100%`}
//           overflow={'visible'}
//           >
            
//           {children}
//         </Box>
//       </Box>
//     </>
//   );
// };

import Box from '@mui/material/Box';
import { MuiAppBar, Drawer } from '@/components';
import { Theme, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSeparation } from '@/store/actions';
import { extendedPalette } from '@/theme/constants';

export const Layout = ({ children }: any) => {
  const router = useRouter();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const dispatch = useDispatch();

  const dispatchSeparation = () => {
    if (!isMobile && router?.pathname == '/app/story/[id]') return dispatch(setSeparation('0rem'));
    if ((router.pathname == '/app/home' || router?.asPath?.includes('story/')) && !isMobile)
      return dispatch(setSeparation('7.875rem'));
    if (router?.asPath?.includes('story/') && isMobile) return dispatch(setSeparation('3.875rem'));
    if (router.pathname.includes('story/create')) return dispatch(setSeparation('3.875rem'));
    if (router.pathname?.includes('memory/create')) return dispatch(setSeparation('5.875rem'));
    dispatch(setSeparation('5.375rem'));
  };

  useEffect(() => {
    dispatchSeparation();
  }, [router.pathname, isMobile]);

  return (
    <>
      <MuiAppBar />
      <Box display={'flex'} id="component-main" position={'relative'}>
        <Drawer />
        <Box

          component="main"
          height={isMobile ? 'auto' : `100vh`}
          width={'100%'}
          minHeight={isMobile ? 'auto' : `100vh`}
          overflow={'visible'}
          position="relative" // Make sure the ellipses are positioned relative to this containe
        >
          {/* Ellipse 1 (Left Center)
          <Box zIndex={0}
            sx={{

              position: 'absolute',
              left: '0', // Adjust the left position as needed
              top: '20%',  // Center vertically
              // transform: 'translateY(-50%)',
              width: '80rem', // Ellipse size
              height: '73rem',
              // borderRadius: '50%',
              // backgroundColor: 'rgba(255, 0, 0, 0.123)', // Red with transparency, adjust color
              backgroundImage: extendedPalette.ellipseImageLeft,
              backgroundRepeat: 'no-repeat, no-repeat',
    backgroundSize: 'contain, contain',
     pointerEvents: 'none', 
            }}
          />

       
          <Box
            sx={{
              position: 'absolute',
              right: '-9%', // Adjust the right position as needed
              top: '30%',  // Center vertically
              // transform: 'translateY(-50%)',
              zIndex: 0, // Behind the content
              width: '60%', // Ellipse size
              height: '70%',
              // borderRadius: '50%',
              backgroundImage: extendedPalette.ellipseRightImage, // Blue with transparency, adjust color
                            backgroundRepeat: 'no-repeat, no-repeat',
                             pointerEvents: 'none', 
            }}
          /> */}

          {/* Main content */}
          {children}
        </Box>
      </Box>
    </>
  );
};
