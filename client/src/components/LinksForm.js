import MuiTextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import { styled } from '@mui/system';
import { useState } from 'react'
import { Grid, IconButton, Typography } from '@mui/material';
import { useRef, useEffect } from 'react';
import AutoCompleteInput from './AutoCompleteInput'
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';


const TextField = styled(MuiTextField)({
  width: '100%'
});



const LinksForm = ({ profile, setProfile }) => {
  const [editButtonVisible, setEditButtonVisible] = useState(false)
  const [editLinks, setEditLinks] = useState(false)
  const [linkGit, setLinkGit] = useState('')
  const [linkLinkedIn, setLinkLinkedIn] = useState('')
  const saveLinks = () => {
    axios.put('/profile/update', { _id: profile._id, linkGit, linkLinkedIn }).then(res => {
      setProfile(res.data)
    })
    setEditLinks(false)
  }

  useEffect(() => {
    if (profile) {
      setLinkLinkedIn(profile.linkLinkedIn)
      setLinkGit(profile.linkGit)
    }
  }, [profile])


  return (
    <>
      <Paper elevation={3} sx={{ paddingX: "1.5rem", marginBottom: "1.5rem" }}
        onMouseEnter={() => { setEditButtonVisible(true) }}
        onMouseLeave={() => { setEditButtonVisible(false) }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}
          columnSpacing={2}
        >
          <Grid item xs={10} >
            <Typography variant="h6" sx={{ paddingBottom: "0px" }}>Link</Typography>
          </Grid>
          <Grid item xs={2}>
            <Button sx={{ paddingY: '0px' }} onClick={() => setEditLinks((prev) => !prev)}>
              {!editLinks ? editButtonVisible && <EditIcon /> : editButtonVisible && <CloseIcon />}
            </Button>
          </Grid>
          {!editLinks && linkLinkedIn &&
            <>
              <Grid item xs={1}>
                <LinkedInIcon color="primary" fontSize="large" />
              </Grid>
              <Grid item xs={11} sx={{ paddingBottom: "12px" }}>
                <Link href={linkLinkedIn} underline="none">
                  {linkLinkedIn}
                </Link>
              </Grid>
            </>}
          {!editLinks && linkGit &&
            <>
              <Grid item xs={1}>
                <GitHubIcon fontSize="large" />
              </Grid>
              <Grid item xs={11} sx={{ paddingBottom: "12px" }}>
                <Link href={linkGit} underline="none">
                  {linkGit}
                </Link>
              </Grid>
            </>
          }

          <Grid item xs={12}>
            <Collapse in={editLinks}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                rowSpacing={2}
                columnSpacing={2}
              >

                <Grid item xs={1}>
                  <LinkedInIcon color="primary" fontSize="large" />
                </Grid>
                <Grid item xs={11} sx={{ paddingBottom: "20px" }}>
                  <TextField
                    label="Linked In"
                    variant="standard"
                    value={linkLinkedIn}
                    onChange={(e) => { setLinkLinkedIn(e.target.value) }}

                  />
                </Grid>
                <Grid item xs={1}>
                  <GitHubIcon fontSize="large" />
                </Grid>
                <Grid item xs={11} sx={{ paddingBottom: "20px" }}>
                  <TextField
                    label="Git Hub"
                    variant="standard"
                    onChange={(e) => { setLinkGit(e.target.value) }}
                    value={linkGit}
                  />
                </Grid>
                <Grid item xs={12} sx={{ marginBottom: "1rem" }} container justifyContent="right">
                  <Button variant="text" onClick={() => { saveLinks() }}>Save</Button>
                </Grid>
              </Grid>
            </Collapse>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}


export default LinksForm
