import React, { useEffect, useState } from 'react'
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

export default function BasicGrid() {
  return (
    <>
      <h1 className="App">Job Postings</h1>
      <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <JobCard />
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

// const JobsPage = () => {
//   return (
//     <>
//       <JobCard />
//     </>
//   )
// }

// export default JobsPage
