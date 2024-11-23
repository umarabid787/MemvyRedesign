// import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import GridLayoutCheck from './MediaGrid';
import StoryHeader from './StoryHeader';
import { UseFirstRender, UseIntermitence } from '@/hooks';
import {
  actualStory,
  changeBackground,
  closePublishModal,
  deleteStory,
  hideGradient,
  removeMemory,
  setCode,
  setMediaType,
  showActualSection,
  viewStoryG,
} from '@/store/actions';
import { authSelector, currentStorySelector, intermitenceSelector } from '@/store/selectors';
import { cdn_url } from '@/utils';
import { Box, BoxProps, Button, Theme, useMediaQuery } from '@mui/material';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Ref, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Console } from 'console';
import { format } from 'date-fns';
import MediaGrid from './MediaGrid';
import { extendedPalette } from '@/theme/constants';
import Image from 'next/image';
import EllipseImage from '../../../../../public/images/EllipseLeft';
import EllipseLeftImage from '../../../../../public/images/EllipseLeft';
import EllipseRightImage from '../../../../../public/images/EllipseRight';
import PopupModal from './PayWallModal';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#2B3672',
    },
  },
});

const Main: React.FC = () => {
  const handleBackClick = () => {
    console.log("Back button clicked");
     router.push('/app/home'); 
    // Implement back navigation logic here
  };
  const [selectedMemorie, setSelectedMemorie] = useState<any>(null);
  const { status, switchStatus } = UseIntermitence();
  const { status: storyStatus, switchStatus: switchStory } = UseIntermitence();
  const { status: deleteStatusMemory, switchStatus: switchDeleteMemory } = UseIntermitence();
  const { status: deleteStatusStory, switchStatus: switchDeleteStory } = UseIntermitence();
  const { status: privateStatus, switchStatus: switchPublication } = UseIntermitence();
  const { user, isAuth } = useSelector(authSelector);
  const dispatch = useDispatch();
  const story = useSelector(currentStorySelector);
  const { showPublishModal } = useSelector(intermitenceSelector);
  const [viewStory, setViewStory] = useState(false);

  const router = useRouter();
  const [tryCode, setTryCode] = useState(true);
  const [foundRole, setFoundRole] = useState(false);
  const { isEllipseLeft } = extendedPalette.isEllipseCheck;
   const { isEllipseRight } = extendedPalette.isEllipseRightCheck;
    const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = (): void => setModalOpen(true);
  const handleClose = (): void => setModalOpen(false);

   UseFirstRender(() => {
    if (router.query?.id && !router.query.code) {
      dispatch(
        actualStory({
          id: router.query?.id as string,
          router,
          confirmPassword: story?.url === router.query?.id ? story?.confirmPassword : undefined,
        }),
      );
    }
  }, [router.query?.id, story?.confirmPassword]);

  UseFirstRender(() => {
    if (router.query?.id && router.query.code) {
      dispatch(setCode({ password: router?.query?.code, storyId: router.query.id }));
    }
  }, [router.query?.code]);

  UseFirstRender(() => {
    if (story && (!story?.private || story?.confirmPassword || foundRole)) {
      const DraftSpan = () => {
        return <span style={{ color: 'white', fontWeight: 'normal' }}>· Draft</span>
      }
      const PublishedSpan = () => {
        return <span style={{ color: 'white', fontWeight: 'normal' }}>· Published</span>
      }
      dispatch(setMediaType(''));
      dispatch(showActualSection({ title: story?.title, publish: story?.status === 'draft' ? DraftSpan : story?.status == 'published' ? PublishedSpan : '' }));
    }
  }, [story, foundRole]);

  useEffect(() => {
    if (story?.url === router.query?.id)
      router.push(
        router?.query?.memoryId
          ? `/app/story/${story?.url}?memoryId=${router?.query?.memoryId}`
          : `/app/story/${story?.url}`,
      );
  }, [router.query?.id, story?.url]);

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  // const deleteMemory = async () => {
  //   setSelectedMemorie(null);
  //   switchDeleteMemory();
  //   router.push(`/app/story/${story?.url}`);
  //   const { callback, promise } = promisifiedCallback<ExtractCallbackType<typeof removeMemory>>();
  //   dispatch(removeMemory({ id: selectedMemorie?.id, story_id: story?.id }, callback));
  //   const { ok } = await promise;
  //   if (ok && floatingMemoriesRef.current) {
  //     floatingMemoriesRef.current.removeBubble(selectedMemorie?.id);
  //   }
  // };

  const deleteStoryAction = () => {
    switchDeleteStory();
    dispatch(deleteStory(story?.id));
    router.push(`/app/home`);
  };

  // UseFirstRender(() => {
  //   if (router?.query?.memoryId && floatingMemoriesRef.current) {
  //     const memory = floatingMemoriesRef.current
  //       .getMemories()
  //       .find((memory) => Number(memory?.id) === Number(router?.query?.memoryId));
  //     setSelectedMemorie(memory);
  //     switchStatus();
  //   }
  // }, [router?.query]);

  const closeMemory = () => {
    setSelectedMemorie(null);
    router.push(`/app/story/${story?.url}`);
    switchStatus();
  };

  UseFirstRender(() => {
    if (user && isAuth) {
      const validRoles = ['Story_Collaborator', 'Story_Viewer', 'Story_Owner'];
      const hasRole = user?.roles?.find(
        (role: any) => role.story_id === story?.id && validRoles.includes(role.role.name) && role?.validated,
      );
      const userCreate = user?.id === story?.user_id;
      const foundRole = hasRole || userCreate ? true : false;
      setFoundRole(foundRole);
    }
  }, [user, story, isAuth]);

  useEffect(() => {
    if (story?.id && !viewStory) {
      dispatch(viewStoryG(story));
      setViewStory(true);
    }
  }, [dispatch, story, viewStory]);
//  console.log('I am story',story)
  UseFirstRender(() => {
    const validRoles = ['Story_Collaborator', 'Story_Viewer', 'Story_Owner'];
    const hasRole = user?.roles?.find(
      (role: any) => role.story_id === story?.id && role?.validated && validRoles.includes(role.role.name),
    );
    const userCreate = user?.id === story?.user_id;
    const foundRole = hasRole || userCreate ? true : false;
    if (story?.private && tryCode && !story?.newCode && !foundRole) {
      switchPublication();
      setTryCode(false);
    }
  }, [story?.private]);

  const handlePublication = () => {
    if (story?.private && !tryCode && !story?.confirmPassword) {
      switchPublication();
      router.push(`/app/home`);
    }
    if (story?.private && !tryCode && story?.confirmPassword && !story?.newCode) {
      switchPublication();
    }
  };

  const boxRef = useRef<HTMLElement | null>(null);

  const [mobileHeight, setMobileHeight] = useState('35vh');

  useEffect(() => {
    const resize = () => {
      if ((boxRef?.current?.scrollTop || 0) > 100) {
        setMobileHeight((prev: any) => {
          return `${(boxRef?.current?.scrollTop || 0) > 500 ? 0 : Math.round(35 / ((boxRef?.current?.scrollTop || 0) / 100))
            }vh`;
        });
        return;
      }
      setMobileHeight('35vh');
    };
    if (boxRef.current) {
      boxRef.current?.addEventListener('scroll', resize);
    }
    dispatch(changeBackground(true));

    return () => {
      if (boxRef.current) {
        boxRef.current?.removeEventListener('scroll', resize);
      }
    };
  }, [story]);
console.log("i am story", story)
  const closeCollaboratorsModal = () => {
    dispatch(closePublishModal());
  };
  useEffect(() => {
    if (Number(mobileHeight.replace('vh', '')) <= 10) dispatch(hideGradient(true));
    if (Number(mobileHeight.replace('vh', '')) > 10) dispatch(hideGradient(false));
  }, [mobileHeight]);

  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback<Required<BoxProps>['onWheel']>((e) => {
    if (boxRef.current) {
      boxRef.current.scrollTo({ top: boxRef.current.scrollTop + e.deltaY, behavior: 'instant' });
    }
  }, []);

  return (
    // <ThemeProvider theme={theme}>
    <div style={{ backgroundColor: extendedPalette.storyBackground, minHeight:'200vh' }}>

              
{isEllipseLeft && (
        <Box
          sx={{
            position: 'absolute',
            left: '0%', // Adjust the right position as needed
            top: '10%',  // Center vertically
            zIndex: 0,   // Behind the content
            width: '200px', // Adjust width for the desired size
            height: '150px',
            pointerEvents: 'none', // Make it non-interactive
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundSize: 'contain, contain',
          }}
        >
          <EllipseLeftImage color={extendedPalette.ellipseLeftGradientColor} opacity={extendedPalette.ellipseLeftGradientOpacity} />
        </Box>)}


          {/* Ellipse 2 (Right Center) */}
          {isEllipseRight && (<Box
            sx={{
              position: 'absolute',
              right: '-9%', // Adjust the right position as needed
              top: '45%',  // Center vertically
              // transform: 'translateY(-50%)',
              zIndex: 0, // Behind the content
              width: '60%', // Ellipse size
              height: '73rem',
              // borderRadius: '50%',
              // Blue with transparency, adjust color
              backgroundRepeat: 'no-repeat, no-repeat',
              pointerEvents: 'none', 
            }}
          >
          <EllipseRightImage color={extendedPalette.ellipseRightGradientColor} opacity={extendedPalette.ellipseRightGradientOpacity} />
          </Box>)}
      {/* <div style={extendedPalette.ellipseBackground1}> */}
        {/* StoryHeader Component */}
        <StoryHeader
          imgSrc={`${cdn_url}${story?.cover_image}`}  // Replace with the correct path to your image
          title={story?.title}
          createdDate={story?.created_at}
          description={story?.description}
          collaborators={[
            { src: "/assets/Ellipse 51.png", alt: "Collaborator 1" },
            { src: "/assets/Ellipse 52.png", alt: "Collaborator 2" },
            { src: "/assets/Ellipse 56.png", alt: "Collaborator 3" },
            { src: "/assets/Ellipse 54.png", alt: "Collaborator 4" },
          ]}
          onBackClick={handleBackClick}
        />

        {/* Grid Layout */}
        {/* <GridLayoutCheck /> */}
        <MediaGrid story={story && story} />
        <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>

      <PopupModal open={modalOpen} onClose={handleClose} />
      </div>
      // </div>

      


  );
};

export default Main;
