import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs 
        value={value} 
        onChange={handleChange} 
        centered
        variant='fullWidth' 
        sx={{
          width: 'max'
          }}>
        <Tab label="Gift Exchange" value={1}/>
        <Tab label="Message Board" value={0}/>
        <Tab label="Helpers" value={2}/>
      </Tabs>
    </Box>
  );
}