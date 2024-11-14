import { palette } from '@/theme/constants';
import { color } from 'framer-motion';

export const styles = (isDarkTheme: boolean, disabledColor: string) => ({
  input: {
    '& input:-webkit-autofill': {
      WebkitTextFillColor: isDarkTheme ? palette.white : palette.white,
    },

    '& .MuiFormHelperText-root.Mui-error': {
      marginBottom: 0,
    },
    '& .MuiOutlinedInput-input': {
      color: isDarkTheme ? palette.white : palette.white,
      '::placeholder': {
        color: isDarkTheme ? palette.gray : palette.gray,
        opacity: 1,
      },
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: 2,
      border: `1px solid ${isDarkTheme ? palette.gray : palette.gray}`,
    },
    '& :not(.Mui-error):not(.Mui-focused):hover': {
      '& > fieldset': {
        borderColor: isDarkTheme ? palette.gray : palette.gray,
        borderWidth: 2,
      },
    },
    '& .Mui-disabled': {
      color: `${disabledColor ? disabledColor : palette?.gray} !important`,
      opacity: 1,

      WebkitTextFillColor: 'inherit !important',
      '::placeholder': {
        color: palette?.white,
        opacity: 1,
      },
    },

    '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: palette?.gray,
    },
    '& .MuiInputLabel-root': {
      fontSize: '1rem',
      color: isDarkTheme ? palette.white : palette.white,
      top: '-7px',

      '&.Mui-error': {
        color: palette.error,
      },

      '&.Mui-focused': {
        color: palette.focus,
      },
      '&.Mui-error.Mui-focused': {
        color: palette.error,
      },

      '&.MuiInputLabel-shrink': {
        top: '0px',
      },
    },

    inputStyle: {
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        display: 'none',
      },
    },
  },
});
