import { palette } from '@/theme/constants';
import { Button, CircularProgress } from '@mui/material';
import { styles } from './styles';

interface iButtonProps {
  method?: () => void;
  height?: string;
  disabled?: any;
  padding?: string;
  loading?: boolean;
  children: any;
  variant?: any;
  borderRadius?: string;
  backgroundColor?: string;
  loaderColor?: string;
  type?: any;
  margin?: string;
  boxShadow?: string;
  minWidth?: string | number;
}

export const MuiButton = ({
  height = '2.375rem',
  disabled,
  padding,
  loading,
  children,
  variant = 'contained',
  borderRadius,
  method,
  backgroundColor = variant == 'contained' ? palette.primary : 'transparent',
  loaderColor = palette.white,
  type = 'button',
  margin,
  boxShadow,
  minWidth,
}: iButtonProps) => {
  const buttonStyles = {
    height,
    padding,
    borderRadius,
    backgroundColor,
    margin,
    boxShadow,
    minWidth,
  };
  return (
    <Button sx={styles(buttonStyles)} fullWidth onClick={method} disabled={disabled} type={type} variant={variant}>
      {!loading ? <>{children}</> : <CircularProgress size={32} sx={{ color: loaderColor }} />}
    </Button>
  );
};
