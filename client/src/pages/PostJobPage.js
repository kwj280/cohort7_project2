import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import JobForm from '../components/JobForm'
import OldJobForm from '../components/OldJobForm'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2),
  },

}));



export default function PostJobPage() {
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
          <h1>Job form</h1>
          <JobForm />
        </Paper>
      </Container>
    </>
  )
}

