export const palette = {
  //new design colors
  primary: '#0072CE',
  background: '#131544',
  gray: '#5C6372',
  cardBorder: 'rgba(228, 222, 255, 0.2)',
  cardBackground: 'linear-gradient(180deg, rgba(34,42,103,0.5) 0%, rgba(19,21,68,0.5) 100%)',
  lightCardBackground: '#D8E8F6',
  lightText: '#0072ce',
  codGray: '#1d1d1d',
  //new design colors
  

  secondary: '#EB8334',
  black: '#000000',
  white: '#FFFFFF',
  error: '#D32F2F',
  focus: '#2196F3',
  inputLight: 'rgba(0, 0, 0, 0.23)',
  inputLabelLight: 'rgba(0, 0, 0, 0.6)',
  lightGray: '#F5F5F5',
  faintGray: '#4C535F',
  dirtyWhite: '#FAFAFA',
  iron: '#CCCED1',
  gallery: '#EAEAEA',
  backgroundOpacity: 'rgba(32, 34, 38, 0.5)',
  opacityWhie: 'rgba(255, 255, 255, 0.25)',
  opacityBlack: 'rgba(0, 0, 0, 0.50)',
  opacityGray: 'rgba(0, 0, 0, 0.5)',
  opacityBlackInputFile: 'rgba(0, 0, 0, 0.87)',
  silverChalice: '#9E9E9E',
  //Story Page colors
  storyBackgroundColor:'#04071E',
  buttonColor:'#2B3672',
  
};
export const extendedPalette = {
  storyBackground: palette.storyBackgroundColor,
  backButton: {
    color: '#A9B4CC',
    fontSize: '14px',
    textTransform: 'none',
  },
   editButton: {
    color: palette.white, // Text color
    backgroundColor: palette.buttonColor, // Background color
    fontSize: '14px',
    textTransform: 'none',
    borderRadius: '20px',
    padding: '11px 16px',
    marginRight: { xs: '0', md: '50px' },
  },
  storyTitle: palette.white, //Story Title
    // Date Style
   dateStyle: {
    color: '#B3BED4',
    fontSize: '16px',
    textAlign: 'center',
  },
  description:{
    color: palette.white, maxWidth: '650px' 
  },

  searchField:{
    width: '150px',
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#1A205A',
      color: palette.white,
      marginLeft: '20px',
      borderRadius: '30px',
      '& fieldset': { borderColor: '#1A205A' },
      '&:hover fieldset': { borderColor: '#1A205A' },
      '&.Mui-focused fieldset': { borderColor: '#1A205A' },
    },
    '& input': {
      color: palette.white,
      padding: '10px 15px',
      fontSize: '0.9rem',
    },
    '& .MuiInputAdornment-root': { backgroundColor: '#1A205A', marginRight: '4px' },
  },
 filterButton: (filter: any, label: any) => ({
  textTransform: 'none',
  backgroundColor: filter === label ? palette.white : palette.buttonColor,
  color: filter === label ? palette.black : palette.white,
  borderRadius: '20px',
  margin: '8px',
  '&:hover': {
    backgroundColor: filter === label ? palette.white : palette.buttonColor,
    color: filter === label ? palette.black : palette.white,
  },
}),

  viewButton: {
    textTransform: 'none',
    color: palette.dirtyWhite, // This corresponds to palette.dirtyWhite
    '&:hover': {
      color: palette.secondary, // This corresponds to palette.secondary
    },
  },
  buttonColorGrid: palette.buttonColor,
  buttonHoverColor: palette.secondary, 
  //Card Media Colors
  cardMediaBackground:palette.buttonColor,
  cardMediaColor: palette.white,

  //Card Header Color
  cardHeaderBackground: palette.buttonColor,
  cardHeaderText:palette.white,
};