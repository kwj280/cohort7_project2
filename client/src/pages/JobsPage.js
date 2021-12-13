import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import JobCard from '../components/JobsCard'
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const JobGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <JobCard />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <JobCard />
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default JobGrid
