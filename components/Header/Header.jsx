import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function appBarLabel(label) {
  return (
    <Toolbar>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

export default function EnableColorOnDarkAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 , marginBottom: '50px'}}>
        <AppBar position="fixed"  style={{ background: '#3C3C3C', color: 'white'}}>
          {appBarLabel('Disagro')}
          <span style={{ paddingLeft: "20px"}}>Feria de Promociones - 2023</span>
        </AppBar>
    </Stack>
  );
}
