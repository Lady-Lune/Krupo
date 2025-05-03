import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import long_logo from "../../src/assets/logo_long_white_trans.svg"
function Header() {
  return (
      <AppBar 
        color='primary'
        position="static" 
        sx={{ height: 100 }}
        >
        <Toolbar

        sx={{
        //  border: 'solid 1px black', 
         alignContent: 'center',
         justifyContent: 'center',
         height: 100
        }}   
        >
            <Box
              component="img"
              src={long_logo}                    // Use the imported SVG
              alt="Logo"
              sx={{ 
                height: 70,
               }}                               // Adjust the logo size
            />
        </Toolbar>
      </AppBar>
  );
};

export default Header;
