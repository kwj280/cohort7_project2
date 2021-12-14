import MuiTextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import { styled } from '@mui/system';
import { useEffect, useState } from 'react'
import { Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRef } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterMoment';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';

//import {useForm, Controller} from "react-hook-form"

const TextField = styled(MuiTextField)({
  width: '100%'
});

const WorkExperienceForm = ({ profile, setProfile }) => {

  const [dateFrom, setDateFrom] = useState(new Date())
  const [dateTo, setDateTo] = useState(new Date())
  const [present, setPresent] = useState(false)
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [description, setDescription] = useState('')
  const [addButtonVisible, setAddButtonVisible] = useState(false)
  const [showWorkExperienceForm, setShowWorkExperienceForm] = useState(false);
  const [workExperiences, setWorkExperiences] = useState([])
  const [deleteButtonVisible, setDeleteButtonVisible] = useState(-1)
  const [toggleWorkExperinceChanged,setToggleWorkExperinceChanged ] = useState(false)

  useEffect(() => {
    if (profile) {
      axios.get('/profile/workExperience/' + profile._id).then(res => {
        if (res.data)
          setWorkExperiences(res.data)
      })
    }
  }, [profile, toggleWorkExperinceChanged])

  const handleInputChange = (value, setter) => {
    setter(value)
  }
  const handleSave = () => {
    let workExperience = {
      dateFrom,
      dateTo,
      present,
      title,
      company,
      description
    }
    axios.post('/profile/workExperience', { profile, workExperience }).then(res => {
      setDateFrom(new Date())
      setDateTo(new Date())
      setTitle('')
      setCompany('')
      setDescription('')
      setToggleWorkExperinceChanged((prev)=>!prev)
    })
  }


  const deleteWorkExperience = (id)=>{
    axios.delete('/profile/workExperience/'+id).then(res=>{
      setToggleWorkExperinceChanged((prev)=>!prev)

    })
  }
  return (
    <>
      <Paper elevation={3} sx={{ paddingX: "1.5rem", marginBottom: "1.5rem" }}
        onMouseEnter={() => { setAddButtonVisible(true) }}
        onMouseLeave={() => { setAddButtonVisible(false) }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}
          columnSpacing={2}
        >
          <Grid item xs={10}>
            <Typography variant="h6">Project/Work Experience</Typography>
          </Grid>
          <Grid item xs={2} container justifyContent="right">
            <Button sx={{ paddingY: '0px' }} onClick={() => setShowWorkExperienceForm((prev) => !prev)}>
              {!showWorkExperienceForm ? addButtonVisible && <AddIcon /> : addButtonVisible && <CloseIcon />}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Collapse in={showWorkExperienceForm}>

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
                      onChange={(newValue) => handleInputChange(newValue, setDateFrom)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Grid>
                  <Grid item xs={5}>

                    {!present ?
                      <DesktopDatePicker
                        label="To"
                        value={dateTo}
                        onChange={(newValue) => handleInputChange(newValue, setDateTo)}
                        renderInput={(params) => <TextField {...params} />}
                      />
                      :
                      <Typography sx={{ textAlign: 'center' }}>Present</Typography>}
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel control={<Checkbox checked={present} onChange={(e) => setPresent(e.target.checked)} />} label="Present" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Title"
                      variant="outlined"
                      value={title}
                      onChange={(e) => handleInputChange(e.target.value, setTitle)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Company"
                      variant="outlined"
                      value={company}
                      onChange={(e) => handleInputChange(e.target.value, setCompany)}
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
                      onChange={(e) => handleInputChange(e.target.value, setDescription)}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginBottom: "1rem" }} container justifyContent="right">
                    <Button variant="text" onClick={() => handleSave()}>Save</Button>
                    <Button variant="text" color="warning" onClick={() => { setShowWorkExperienceForm(false) }}>Cancel</Button>
                  </Grid>
                </Grid>
              </LocalizationProvider>
            </Collapse>
          </Grid>
          <Grid container xs={12} item>
            {workExperiences?.map((work, index) => {
              return (
                <Grid item xs={12} key={work._id}
                  onMouseEnter={() => { setDeleteButtonVisible(index) }}
                  onMouseLeave={() => { setDeleteButtonVisible(-1) }}
                >
                  <Divider component="div" />
                  
                  <Typography variant='subtitle1' display="inline" > <b>{work.title}</b></Typography>
                  <Button sx={{ paddingY: '0px' }} sx={{float: 'right'}} onClick={()=>{deleteWorkExperience(work._id)}} >
                    {deleteButtonVisible === index && <CloseIcon />}
                  </Button>
                  <br/>
                  <Typography variant='body'>{work.company}</Typography>
                  &nbsp;&nbsp;&nbsp;
                  <Typography variant='overline' gutterBottom>{new Date(work.dateFrom).toISOString().split('T')[0]} - {work.present ? 'Present' : new Date(work.dateTo).toISOString().split('T')[0]}</Typography>
                  <Typography mb={2} variant='body' component="div">{work.description}</Typography>


                </Grid>
              )
            })
            }
          </Grid>
        </Grid>
      </Paper>

    </>

  );
};



export default WorkExperienceForm