
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SignIn from '../components/SignIn';
import ProfileForm from '../components/ProfileForm'
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(3),
  },

}));

export default function ProfilePage({setUser, user}) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Container maxWidth={'xl'} >
        <Paper elevation={3} className={classes.content}
         sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }} >

          <h1>Profile Component here</h1>
          {/* {!user&&<SignIn setUser={setUser}/>} */}
          {!user && <ProfileForm user={user}/>}

          </Paper>
      </Container>
    </>
  )
}

