import '../App.css'
import SearchIcon from '@material-ui/icons/Search'
import Header from './Header'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
const JobsPage = () => {
  return (
    <>
      <header className="App-header">
        <h1 className="App-title">Tech Connect YYC</h1>
        <div className="App">
          <TextField
            color="secondary"
            margin="normal"
            id="searchJob"
            label="Search Job "
            name="searchJob"
            autoComplete="searchJob"
            autoFocus
          />

          <TextField
            color="secondary"
            margin="normal"
            id="jobLocation"
            label="Search Location"
            name="jobLocation"
            autoComplete="jobLocation"
            autoFocus
          />
        </div>
      </header>
    </>
  )
}

export default JobsPage
