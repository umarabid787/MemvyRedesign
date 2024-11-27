import React, {useState} from "react";
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
  
  } from '@mui/material';
// import LoginForm from "./LoginForm";
import { theme } from "@/theme";



  interface PopupModalProps {
    open: boolean;
    onClose: () => void;
  }

  const CreateAccount: React.FC<PopupModalProps> = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    // const [showLogin , setShowLogin]=useState(false);

//   function OpenLogin (){
// setShowLogin(true);
//   }
// if(showLogin)
// {
//   return <LoginForm open={false} onClose={function (): void {
//     throw new Error("Function not implemented.");
//   } }/>;
// }
    return(

<Card
  sx={{
    padding: '12px',
    bgcolor: 'rgba(102, 102, 102, 1)',
    boxShadow: 'none',
    height:"50vh",
    [theme.breakpoints.down('sm')]:{
    padding:0,
    height:"46vh"
    }
  }}>
  <CardContent
     sx={{
      padding: { xs: 0, sm: '16px' },  '&:last-child': {
        paddingBottom: 0, 
      },
    }}
  >

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
    height:"50px",
    borderRadius: '8px',
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
    height:"50px",
    backgroundColor: 'white',
    borderRadius: '8px',
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

    {/* Confirm Password Input */}
    <TextField
      label='Confirm Password'
      variant='outlined'
      margin='normal'
      type='password'
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      fullWidth
      InputLabelProps={{
        shrink: false, // Disable the default shrink behavior
      }}
      sx={{
        paddingTop: '2px',
        marginTop: '5px',
        backgroundColor: 'white',
        height:"50px",
        borderRadius: '8px',
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
      top: confirmPassword ? '1px' : '50%', // Position based on whether there's input
      transform: confirmPassword ? 'translateY(0)' : 'translateY(-50%)', // Adjust vertical alignment
      fontSize: confirmPassword ? '12px' : '16px', // Adjust size for shrunken state
        },
    
        '& .MuiOutlinedInput-root.Mui-focused': {
          '& fieldset': {
            border: 'none', // Ensure no border on focus
          },
        },
      }}
    />
  
  <Typography style={{ display: 'flex', justifyContent: 'center', color: 'rgba(238, 238, 238, 1)', marginTop:"5px",fontWeight:"bold"}}>
     or
    </Typography>
    

  
    <Button
      
      fullWidth
      startIcon={ <img src='/icons/devicon_google.svg'/>}
      sx={{
        marginTop: '12px',
        mb: 1,
        color:"white",
        height: '70px', 
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
        height: '70px', 
        backgroundColor: 'rgba(34, 34, 34, 0.8)',
        '&:hover': {
          backgroundColor: 'rgba(34, 34, 34, 1)', 
        },
        borderRadius: '10px', 
        padding: '25px',
      }}>
      Continue with Facebook
    </Button>
    {/* <Typography style={{ display: 'flex', justifyContent: 'center', color: 'rgba(238, 238, 238, 1)', marginTop:"1px",fontWeight:"bold"}}>
      Already have an Account? 
     <Link onClick={OpenLogin}>Log In</Link>
    </Typography> */}
  </CardContent>
</Card>

    )
};
export default CreateAccount;