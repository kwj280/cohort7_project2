import React, { useState, useEffect, useRef } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import JobCard from '../components/JobsCard'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const JobGrid = () => {
  const [jobs, setJobs] = useState('')
  const inputQuery = useRef()
  const [query, setQuery] = useState(useParams().q)
  console.log(inputQuery.current)
  console.log(query)
  const navigate = useNavigate()
  useEffect(()=>{
    if(query)
    navigate(`/jobs/${query}`)
  },[query])
  
  return (
    <Box sx={{ flexGrow: 1, maxWidth: '55%'}}>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
        <TextField
            color="secondary"
            margin="normal"
            id="searchJob"
            label="Search Job "
            name="searchJob"
            autoComplete="searchJob"
            autoFocus
            inputRef={inputQuery}
          />

          <Button
            type="submit"
            variant="default"
            sx={{ mt: 3, mb: 2, ml: 3}}
            onClick={()=>{setQuery(inputQuery.current.value)}}
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={12} sx={{paddingTop: "2em", paddingLeft: "2em"}} container justifyContent="center">
            <JobCard query={query} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default JobGrid
