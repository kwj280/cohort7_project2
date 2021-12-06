import '../App.css'
import TextField from '@mui/material/TextField'
const LandingPage = () => {
  return (
    <>
      <div className="App-header">
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
      </div>
    </>
  )
}

export default LandingPage
