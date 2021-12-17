import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import axios from 'axios'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function JobCard({ query }) {

  const [expanded, setExpanded] = useState(false)
  const [jobs, setJobs] = useState('')
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  useEffect(() => {
    async function fetchData() {
      if (query) {
        let fetchResult = await fetch('/job/search/'+query)
        let JobList = await fetchResult.json()
        console.log('JobList is:', JobList)
        setJobs(JobList)
      } else {
        console.log(query)
        console.log('Fetching Job data!')
        let fetchResult = await fetch('/job/api/jobs')
        let JobList = await fetchResult.json()
        console.log('JobList is:', JobList)
        setJobs(JobList)
      }
    }
    fetchData()
  }, [query])
  return (
    <>
      {jobs &&
        jobs.map((job) => {
          return (
            <Card key={job._id} elevation={3} sx={{marginBottom:"1em", marginRight:"1em", width:"45%"}}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="jobs">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    {/* <MoreVertIcon /> */}
                  </IconButton>
                }
                title={job.Title || job.title}
                subheader={job.Company || job.company}
              //  skills = {job.skills || job.Skills}
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {job.Description || job.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.timestamps?.toString() || job.Timestamps?.toString()}
                </Typography>
                <Typography>{job.skills || job.Skills} </Typography>
                <Typography color="text.primary">
                  <a href={job.link}>{job.link}</a>
                 
                </Typography>



              </CardContent>
              <CardActions disableSpacing>
                {/* <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton> */}
                {/* <Typography>Learn More</Typography> */}
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography></Typography>

                  <Typography></Typography>
                  <Typography></Typography>
                  <Typography></Typography>
                  <Typography></Typography>
                </CardContent>
              </Collapse>
            </Card>
          )
        })}
    </>
  )
}
