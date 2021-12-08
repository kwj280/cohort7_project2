import React, { Component, useState, useEffect } from 'react'

import JobCard from '../components/JobsCard'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function BasicGrid(props) {
  const [jobs, setJobs] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [skills, setSkills] = useState([])
  const [company, setCompany] = useState('')
  const [url, setUrl] = useState('')
  useEffect(() => {
    fetch('/api/jobs')
      .then((response) => response.json())
      .then((json) => setJobs(json))
  }, [])
  return (
    <>
      <h1 className="App">Job Postings</h1>
      <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              
              {jobs &&
                jobs.map((job,i) => {
                  return <p key={i}>{job.title}</p>
                })}
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <JobCard title="Job Title" />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
