import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import SideNavBar from '../components/SideNavBar';
import MainContentBody from './MainContentBody';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



export default function MainLayout() {

  //state for side navigation bar opened/closed
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Header open={open} setOpen={setOpen} />
        <SideNavBar open={open} setOpen={setOpen} DrawerHeader={DrawerHeader} /> 

        {/* Main Content area */}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <MainContentBody />
        </Box>

        <Footer />
      </Box>
    </>
  );
}