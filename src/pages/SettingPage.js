import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@mui/material/CssBaseline';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(3),
  },

}));

export default function SettingPage() {
  const classes = useStyles();

  const theme = useTheme();
  return (
    <>
    <CssBaseline/>
      <Container maxWidth={'xl'} >
        <Paper elevation={3} className={classes.content}
         sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }} >

          <h1>Setting Components here</h1>
          </Paper>
      </Container>
    </>
  )
}

