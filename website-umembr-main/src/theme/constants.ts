export type DividerType = {
  isDivider: boolean;
};
export type EllipseType={
  isEllipseLeft: boolean;
  isEllipseRight: boolean;}
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
export const adminPalette={
  storyBackgroundColor: "#333",
  textColor:"#fff",
  accentColor:"#BA0C2F"

}
export const extendedPalette = {
  storyBackground: adminPalette.storyBackgroundColor,
  backButton: {
    color: adminPalette.textColor,
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
  storyTitle: adminPalette.textColor, //Story Title
    // Date Style
   dateStyle: {
    color: adminPalette.textColor,
    fontSize: '16px',
    textAlign: 'center',
    opacity:0.6,
  },
  description:{
    color: adminPalette.textColor, maxWidth: '650px' 
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
      color: 'white',
      padding: '10px 15px',
      fontSize: '0.9rem',
    },
    '& .MuiInputAdornment-root': { backgroundColor: '#1A205A', marginRight: '4px' },
  },
 filterButton: (filter: any, label: any) => ({
  textTransform: 'none',
  backgroundColor: filter === label ? adminPalette.textColor : palette.buttonColor,
  color: filter === label ? adminPalette.textColor : palette.black,
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
  buttonColorGrid:'#2B3672',
  buttonHoverColor: '#2B3672', 
  //Card Media Colors
  cardMediaBackground:'#2B3672',
  cardMediaColor:adminPalette.textColor,
  otherButton:'#2B3672',

  //Card Header Color
  cardHeaderBackground:'#2B3672',
  toolBarBackground:'',
  cardHeaderText:adminPalette.textColor,
  isDividerCheck: { isDivider: true } as DividerType,
  isEllipseCheck:{ isEllipseLeft:false} as EllipseType,
  isEllipseRightCheck:{ isEllipseRight: true} as EllipseType,
  // ellipseRightImage: "url('../../../../images/EllipseRight.svg')",
  ellipseLeftGradientColor: '#166BE1',
  ellipseLeftGradientOpacity: 0.2,
  ellipseRightGradientColor: '#F1E0FF',
  ellipseRightGradientOpacity: 0.15,
  // ellipseBackground2: {
  //   backgroundImage: "url('../../../../images/Ellipse33.png')",
  //   backgroundRepeat: 'no-repeat, no-repeat',
  //   backgroundSize: 'contain, contain',
  //   // backgroundPosition: 'right -60px',
  //   // minHeight: '100vh',
  //   // Responsive adjustments
  //   '@media (max-width: 600px)': {
  //     backgroundPosition: 'center',
  //     backgroundSize: 'cover',
  //     minHeight: '100vh',
  //   },
  // },
  // ellipseImageLeft: "url('../../../../images/EllipseImage.tsx')",
  // ellipseBackground1: {
  //   backgroundImage: "url('../../../../images/Ellipse7.png')",
  //   backgroundRepeat: 'no-repeat, no-repeat',
  //   backgroundSize: 'contain, contain',
  //   backgroundPosition: 'left 20px',
  //   minHeight: '100vh',
  //   // Responsive adjustments
  //   '@media (max-width: 600px)': {
  //     backgroundPosition: 'center',
  //     backgroundSize: 'cover',
  //     minHeight: '50vh',
  //   },
  // },
  audioGradientColor1:adminPalette.accentColor,
  audioGradientColor2:'#77BCE580',
  filterIconsColor:'#2B3672',
  cardIconColor:'#B3BED4',
};


// export const extendedPalette = {
//   storyBackground: palette.storyBackgroundColor,
//   backButton: {
//     color: '#A9B4CC',
//     fontSize: '14px',
//     textTransform: 'none',
//   },
//    editButton: {
//     color: palette.white, // Text color
//     backgroundColor: palette.buttonColor, // Background color
//     fontSize: '14px',
//     textTransform: 'none',
//     borderRadius: '20px',
//     padding: '11px 16px',
//     marginRight: { xs: '0', md: '50px' },
//   },
//   storyTitle: palette.white, //Story Title
//     // Date Style
//    dateStyle: {
//     color: '#B3BED4',
//     fontSize: '16px',
//     textAlign: 'center',
//   },
//   description:{
//     color: palette.white, maxWidth: '650px' 
//   },

//   searchField:{
//     width: '150px',
//     '& .MuiOutlinedInput-root': {
//       backgroundColor: '#1A205A',
//       color: palette.white,
//       marginLeft: '20px',
//       borderRadius: '30px',
//       '& fieldset': { borderColor: '#1A205A' },
//       '&:hover fieldset': { borderColor: '#1A205A' },
//       '&.Mui-focused fieldset': { borderColor: '#1A205A' },
//     },
//     '& input': {
//       color: 'white',
//       padding: '10px 15px',
//       fontSize: '0.9rem',
//     },
//     '& .MuiInputAdornment-root': { backgroundColor: '#1A205A', marginRight: '4px' },
//   },
//  filterButton: (filter: any, label: any) => ({
//   textTransform: 'none',
//   backgroundColor: filter === label ? palette.white : palette.buttonColor,
//   color: filter === label ? palette.black : palette.white,
//   borderRadius: '20px',
//   margin: '8px',
//   '&:hover': {
//     backgroundColor: filter === label ? palette.white : palette.buttonColor,
//     color: filter === label ? palette.black : palette.white,
//   },
// }),

//   viewButton: {
//     textTransform: 'none',
//     color: palette.dirtyWhite, // This corresponds to palette.dirtyWhite
//     '&:hover': {
//       color: palette.secondary, // This corresponds to palette.secondary
//     },
//   },
//   buttonColorGrid:'#2B3672',
//   buttonHoverColor: '#2B3672', 
//   //Card Media Colors
//   cardMediaBackground:'#2B3672',
//   cardMediaColor:palette.white,
//   otherButton:'#2B3672',

//   //Card Header Color
//   cardHeaderBackground:'#2B3672',
//   toolBarBackground:'',
//   cardHeaderText:palette.white,
//   isDividerCheck: { isDivider: true } as DividerType,
//   isEllipseCheck:{ isEllipseLeft:false} as EllipseType,
//   isEllipseRightCheck:{ isEllipseRight: true} as EllipseType,
//   // ellipseRightImage: "url('../../../../images/EllipseRight.svg')",
//   ellipseLeftGradientColor: '#166BE1',
//   ellipseLeftGradientOpacity: 0.2,
//   ellipseRightGradientColor: '#F1E0FF',
//   ellipseRightGradientOpacity: 0.15,
//   // ellipseBackground2: {
//   //   backgroundImage: "url('../../../../images/Ellipse33.png')",
//   //   backgroundRepeat: 'no-repeat, no-repeat',
//   //   backgroundSize: 'contain, contain',
//   //   // backgroundPosition: 'right -60px',
//   //   // minHeight: '100vh',
//   //   // Responsive adjustments
//   //   '@media (max-width: 600px)': {
//   //     backgroundPosition: 'center',
//   //     backgroundSize: 'cover',
//   //     minHeight: '100vh',
//   //   },
//   // },
//   // ellipseImageLeft: "url('../../../../images/EllipseImage.tsx')",
//   // ellipseBackground1: {
//   //   backgroundImage: "url('../../../../images/Ellipse7.png')",
//   //   backgroundRepeat: 'no-repeat, no-repeat',
//   //   backgroundSize: 'contain, contain',
//   //   backgroundPosition: 'left 20px',
//   //   minHeight: '100vh',
//   //   // Responsive adjustments
//   //   '@media (max-width: 600px)': {
//   //     backgroundPosition: 'center',
//   //     backgroundSize: 'cover',
//   //     minHeight: '50vh',
//   //   },
//   // },
//   audioGradientColor1:'#D8E8F680',
//   audioGradientColor2:'#77BCE580',
//   filterIconsColor:'#2B3672',
//   cardIconColor:'#B3BED4',
// };
// export const extendedPalette = {
//   storyBackground: '#1B1B1B',
//   backButton: {
//     color: '#A9B4CC',
//     fontSize: '14px',
//   },
//    editButton: {
//     color: palette.white, // Text color
//     backgroundColor: '#333333', // Background color
//     fontSize: '14px',
//     textTransform: 'none',
//     borderRadius: '20px',
//      backdropFilter: 'blur(14px)',
//     padding: '11px 16px',
//     marginRight: { xs: '0', md: '50px' },
//      boxShadow: '0px 4px 14px 0px #00000026',
//   },
//   storyTitle: palette.white, //Story Title
//     // Date Style
//    dateStyle: {
//     color: '#666666',
//     fontSize: '16px',
//     textAlign: 'center',
//   },
//   description:{
//     color: '#CCCCCC', maxWidth: '650px' 
//   },

//   searchField:{
//     width: '150px',
//     '& .MuiOutlinedInput-root': {
//       backgroundColor: '#333333',
//       color: palette.white,
//       marginLeft: '20px',
//       borderRadius: '30px',
//       '& fieldset': { borderColor: '#333333' },
//       '&:hover fieldset': { borderColor: '#333333' },
//       '&.Mui-focused fieldset': { borderColor: '#333333' },
//     },
//     '& input': {
//       color: 'white',
//       padding: '10px 15px',
//       fontSize: '0.9rem',
//     },
//     '& .MuiInputAdornment-root': { backgroundColor: '#333333', marginRight: '4px' },
//   },
//  filterButton: (filter: any, label: any) => ({
//   textTransform: 'none',
//   backgroundColor: filter === label ? palette.white : '#333333',
//   color: filter === label ? palette.black : palette.white,
//   borderRadius: '20px',
//   margin: '8px',
//   '&:hover': {
//     backgroundColor: filter === label ? palette.white : '#333333',
//     color: filter === label ? palette.black : palette.white,
//   },
// }),

//   viewButton: {
//     textTransform: 'none',
//     color: palette.dirtyWhite, // This corresponds to palette.dirtyWhite
//     '&:hover': {
//       color: palette.secondary, // This corresponds to palette.secondary
//     },
//   },
//   buttonColorGrid:'#333333',
//   buttonHoverColor: '#BA0C2F', 
//   //Card Media Colors
//   cardMediaBackground:'#333333',
//   cardMediaColor:palette.white,

//   //Card Header Color
//   cardHeaderBackground:'#333333',
//   cardHeaderText:palette.white,


//     isDividerCheck: { isDivider: false } as DividerType,
//   ellipseBackground2: {
//     backgroundImage: "url('../../../../images/blackelips.png')",
//     backgroundRepeat: 'no-repeat, no-repeat',
//     backgroundSize: 'contain, contain',
//     backgroundPosition: 'right 0px',
//     minHeight: '100vh',
//     // Responsive adjustments
//     '@media (max-width: 600px)': {
//       backgroundPosition: 'center',
//       backgroundSize: 'cover',
//       minHeight: '50vh',
//     },
//   },
//   ellipseBackground1: {
//     backgroundImage: "url('../../../../images/elipsered.png')",
//     backgroundRepeat: 'no-repeat, no-repeat',
//     backgroundSize: 'contain, contain',
//     backgroundPosition: 'left 20px',
//     minHeight: '100vh',
//     // Responsive adjustments
//     '@media (max-width: 600px)': {
//       backgroundPosition: 'center',
//       backgroundSize: 'cover',
//       minHeight: '50vh',
//     },
//   },
//   cardIconColor:'#BA0C2F',
//filterIconsColor:'#2B3672',
// };

// Example API response
// const apiResponse = {
//   result: {
//     template: {
//       colors: [
//         { PKey: "primary", PValue: "#FF0000" }, // Red
//         { PKey: "background", PValue: "#000000" }, // Black
//         { PKey: "gray", PValue: "#808080" } // Gray
//       ],
//     },
//   },
// };

// // Extract colors from API
// const colors = apiResponse.result.template.colors;

// // Utility function to validate hex color
// const isValidHex = (color: string) => /^#[0-9A-F]{6}$/i.test(color);

// // Map API colors into a key-value pair object
// const dynamicColors = colors.reduce((acc, color) => {
//   if (isValidHex(color.PValue)) {
//     acc[color.PKey] = color.PValue;
//   } else {
//     console.warn(`Invalid color value for ${color.PKey}: ${color.PValue}`);
//   }
//   return acc;
// }, {} as Record<string, string>);

// // Define the extendedPalette and map dynamic colors
// const extendedPalette = {
//   storyBackground: dynamicColors["background"] || "#1A1A1A",
//   backButton: {
//     color: dynamicColors["gray"] || "#A9B4CC",
//     fontSize: "14px",
//     textTransform: "none",
//   },
//   editButton: {
//     color: dynamicColors["primary"] || "#FFFFFF", // Text color
//     backgroundColor: dynamicColors["background"] || "#1A1A1A", // Background color
//     fontSize: "14px",
//     textTransform: "none",
//     borderRadius: "20px",
//     padding: "11px 16px",
//     marginRight: { xs: "0", md: "50px" },
//   },
//   cardHeaderBackground: dynamicColors["background"] || "#2B3672",
//   cardMediaColor: dynamicColors["primary"] || "#FFFFFF",
//   buttonHoverColor: dynamicColors["gray"] || "#5C6372",
// };

// // Log the dynamically updated palette
// console.log(extendedPalette);
