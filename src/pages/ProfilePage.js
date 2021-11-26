import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  container:{
    marginTop: theme.spacing(2),
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  containerShift:{
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  content: {
    padding: theme.spacing(3),
  },

}));



export default function ProfilePage() {
  const classes = useStyles();

  const theme = useTheme();
  return (
    <>
      {/* <Container maxWidth={'xl'} className={classes.conti} >
        <Paper elevation={3} className={classes.content}
         sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }} > */}

          <h1>Profile Component here</h1>
      {/* </Container> */}
    </>
  )
}

