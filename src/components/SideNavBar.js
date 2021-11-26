import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import GroupIcon from '@mui/icons-material/Group';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useNavigate } from "react-router-dom";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function SideNavBar({ open, handleDrawerClose }) {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();
  const userMenuItems = [
    { text: 'Job Board', icon: <WorkIcon />, link: '/jobs' },
    { text: 'Profile', icon: <AccountBoxIcon />, link: '/profile' },
    { text: 'My Applications', icon: <ContactPageIcon />, link: '/my_applications' },
    { text: 'Setting', icon: <SettingsIcon />, link: '/setting' },

  ]
  const recruiterMenuItems = [
    { text: 'Post Job', icon: <PostAddIcon />, link: '/post_jobs' },
    { text: 'Applications', icon: <GroupIcon />, link: '/applications' },
  ]

  const handleNav = (link) => {
    navigate(link);
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {userMenuItems.map((item, index) => (
            <ListItem button key={item.text} onClick={() => handleNav(item.link)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button >
            {open && <Typography variant="overline" display="block" gutterBottom>Recruiter</Typography>}
          </ListItem>
          {recruiterMenuItems.map((item, index) => (
            <ListItem button key={item.text} onClick={() => handleNav(item.link)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}