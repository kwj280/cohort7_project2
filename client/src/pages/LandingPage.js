import '../App.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const handleOnclick = () => {
    navigate(`jobs/${searchQuery}`)
  }
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
            onChange = {(e)=>setSearchQuery(e.target.value)}
          />

          <Button
            type="submit"
            variant="default"
            sx={{ mt: 3, mb: 2, ml: 3}}
            onClick = {()=>handleOnclick()}
          >
            Search
          </Button>
        </div>
      </div>
    </>
  )
}

export default LandingPage
