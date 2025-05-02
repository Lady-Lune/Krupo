import {AppBar,Toolbar,Typography} from '@mui/material';
function Footer() {
  return (
      <AppBar 
       position="static" 
       color="primary" 
       sx={{ 
        height: 55,
        position: 'fixed',
        bottom: "0",
        width: "100",
      }}>
        <Toolbar
        sx={{
         alignContent: 'center',
         justifyContent: 'center',
        }}>
          <Typography
            align='center'
            variant='caption'
          >
          Krupo© 2025. All Rights Reserved
          </Typography>
        </Toolbar>
      </AppBar>
  );
};
export default Footer;
