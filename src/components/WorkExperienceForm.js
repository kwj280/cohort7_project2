import MuiTextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { styled } from '@mui/system';
import { useState } from 'react'
import { Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRef } from 'react';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterMoment';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import {useForm, Controller} from "react-hook-form"

const TextField = styled(MuiTextField)({
  width: '100%'
});

const WorkExperienceForm = ({ setShowWorkExperienceForm }) => {

  const [dateFrom, setDateFrom] = useState(new Date())
  const [dateTo, setDateTo] = useState(new Date())
  const [present, setPresent] = useState(false)
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [description, setDescription] = useState('')

  function handleInputChange(value, setter){
    setter(value)
    console.log(value)
  }

  return (
    <>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}
          columnSpacing={2}
        >
          <Grid item xs={5}>

            <DesktopDatePicker
              label="From"
              value={dateFrom}
              onChange={(newValue)=>handleInputChange(newValue, setDateFrom)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={5}>

            {!present?
            <DesktopDatePicker
              label="To"
              value={dateTo}
              onChange={(newValue)=>handleInputChange(newValue, setDateTo)}
              renderInput={(params) => <TextField {...params} />}
            />
            :
            <Typography sx={{textAlign:'center'}}>Present</Typography>}
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel control={<Checkbox checked={present} onChange={(e)=>setPresent(e.target.checked)}/>} label="Present" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e)=>handleInputChange(e.target.value, setTitle)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Company"
              variant="outlined"
              value={company}
              onChange={(e)=>handleInputChange(e.target.value, setCompany)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Description"
              variant="outlined"
              value={description}
              multiline
              rows={5}
              maxrows={10}
              onChange={(e)=>handleInputChange(e.target.value, setDescription)}
            />
          </Grid>
          <Grid item xs={12} container justifyContent="right">
            <Button variant="text">Save</Button>
            <Button variant="text" color="warning" onClick={()=>{setShowWorkExperienceForm(false)}}>Cancel</Button>
          </Grid>
        </Grid>

      </LocalizationProvider>
    </>

  );
};



export default WorkExperienceForm