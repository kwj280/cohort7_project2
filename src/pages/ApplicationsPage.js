import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@mui/material/CssBaseline';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(3),
  },

}));

export default function ApplicationsPage() {
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

          <h1>Applications page components here</h1>
          </Paper>
      </Container>
    </>
  )
}

