import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import './Topbar.css';

export default function Topbar() {
  return (
    <Box classes="topbar" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography align="center" variant="h6" component="div">
            Classifica Coppa delle Case
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
