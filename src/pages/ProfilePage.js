import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SignUp from '../components/SignUp';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(3),
  },

}));

export default function ProfilePage() {
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
          <SignUp/>
          </Paper>
      </Container>
    </>
  )
}

