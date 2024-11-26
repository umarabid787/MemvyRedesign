import React, {useState} from "react";
import CreateAccount from "./CreateAccount";
import {
    Modal,
    Box,
    Paper,
    Grid,
    Card,
    CardContent,
    Typography,
    TextField,
    Avatar,
    List,
    ListItem,
    ListItemText,
    Divider,
    Button,
    ListItemIcon,
    Link,
  } from '@mui/material';



  interface PopupModalProps {
    open: boolean;
    onClose: () => void;
  }

  const LoginForm: React.FC<PopupModalProps> = ({ open, onClose }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showLogin , setShowLogin]=useState(false);

    function OpenLogin (){
  setShowLogin(true);
    }
  if(showLogin)
  {
    return <CreateAccount open={true} onClose={function (): void {
      throw new Error("Function not implemented.");
    } }/>;
  }

    return(

<Card
  sx={{
    padding: '12px',
    bgcolor: 'rgba(102, 102, 102, 1)',
    boxShadow: 'none',
    height:"54vh"
  }}>
  <CardContent>

    {/* Email Input */}
    <TextField
  label="Email" // Show label only if email is empty
  variant='outlined'
  margin='normal'
  value={email} // Controlled value
  onChange={(e) => setEmail(e.target.value)} // Update email state
  fullWidth
  InputLabelProps={{
    shrink: false, // Disable the default shrink behavior
  }}
  sx={{
    paddingTop: '2px',
    marginTop: '5px',
    backgroundColor: 'white',
    borderRadius: '10px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none', // Remove border
      },
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(0, 0, 0, 0.5)', // Default label color
      position: 'absolute',
      left: '14px',
      transition: 'all 0.2s ease-in-out',
      top: email ? '1px' : '50%', // Position based on whether there's input
      transform: email ? 'translateY(0)' : 'translateY(-50%)', // Adjust vertical alignment
      fontSize: email ? '12px' : '16px', // Adjust size for shrunken state
    },

    '& .MuiOutlinedInput-root.Mui-focused': {
      '& fieldset': {
        border: 'none', // Ensure no border on focus
      },
    },
  }}
/>

    {/* Password Input */}
    <TextField
  label="Password"
  variant="outlined"
  margin="normal"
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  fullWidth
  InputLabelProps={{
    shrink: false, // Disable the default shrink behavior
  }}
  sx={{
    paddingTop: '2px',
    marginTop: '5px',
    backgroundColor: 'white',
    borderRadius: '10px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none', // Remove border
      },
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(0, 0, 0, 0.5)', // Default label color
      position: 'absolute',
      left: '14px',
      transition: 'all 0.2s ease-in-out',
      top: password ? '1px' : '50%', // Position based on whether there's input
      transform: password ? 'translateY(0)' : 'translateY(-50%)', // Adjust vertical alignment
      fontSize: password ? '12px' : '16px', // Adjust size for shrunken state
    },
    '& .MuiOutlinedInput-root.Mui-focused': {
      '& fieldset': {
        border: 'none', // Ensure no border on focus
      },
    },
  }}
/>


  


    <Box mt={1.2} sx={{ display: 'flex', justifyContent: 'center', color: 'rgba(238, 238, 238, 1)' }}>
    {/* <button>Sign Up</button> */}
    <Button
      
      fullWidth
      sx={{
        marginTop: '25px',
        mb: 1,
        color:"white",
        height: '50px', 
        backgroundColor: '#BA0C2F', 
        '&:hover': {
          backgroundColor: 'rgba(34, 34, 34, 1)', 
        },
        borderRadius: '10px', 
        padding: '25px', 
        textTransform:"none",
      }}> Sign In
    </Button>
    </Box>

    {/* <Box mt={1.2} sx={{ display: 'flex', justifyContent: 'center', color: 'rgba(238, 238, 238, 1)' }}>
      <Typography>or</Typography>
    </Box> */}
    <Button
      
      fullWidth
      startIcon={ <img src='/icons/devicon_google.svg'/>}
      sx={{
        marginTop: '32px',
        mb: 1,
        color:"white",
        height: '50px', 
        backgroundColor: 'rgba(34, 34, 34, 0.8)', 
        '&:hover': {
          backgroundColor: 'rgba(34, 34, 34, 1)', 
        },
        borderRadius: '10px', 
        padding: '25px', 
      }}>
      Continue with Google
    </Button>
    <Button
      fullWidth
      startIcon={ <img src='/icons/Vector.svg'/>}
      sx={{
        marginTop: '5px',
        mb: 1,
        color:"white",
        height: '50px', 
        backgroundColor: 'rgba(34, 34, 34, 0.8)',
        '&:hover': {
          backgroundColor: 'rgba(34, 34, 34, 1)', 
        },
        borderRadius: '10px', 
        padding: '25px',
      }}>
      Continue with Facebook
    </Button>

    <Box mt={1.2} sx={{ display: 'flex', justifyContent: 'center', color: 'rgba(238, 238, 238, 1)', marginTop:"15px"}}>
    <Typography>Not Registered Yet?
    <Link style={{color:"red", cursor:"pointer" , fontWeight:"bold"}} onClick={OpenLogin}> {""}Sign Up</Link>
    </Typography>
    </Box>
  </CardContent>
</Card>

    )
};
export default LoginForm;