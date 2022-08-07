import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CropDinIcon from '@mui/icons-material/CropDin';
import './navbar.css'


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={15} position="static" style={{backgroundColor:'#edede9'}}>
        <Toolbar >
        <CropDinIcon className="icon" style={{marginRight:10}} />
          <Typography className="topology" variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Just Preview  
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
