import MuiTextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { styled } from '@mui/system';
import { useState } from 'react'
import { Grid, IconButton, Paper, Typography } from '@mui/material';
import { useRef, useEffect } from 'react';
import AutoCompleteInput from './AutoCompleteInput'
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

const skillOptions = ['HTML', 'CSS', 'Javascript', 'Node', 'React', 'MongoDB'];
const TextField = styled(MuiTextField)({
  width: '100%'
});
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
  float: 'left',
}));


const SkillsForm = ({ profile, setProfile }) => {

  const [editButtonVisible, setEditButtonVisible] = useState(false)
  const [editSkills, setEditSkills] = useState(false)
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState(profile ? profile.skills : [])
  const addSkillBtnRef = useRef()
  
  useEffect(() => {
    if (profile)
      setSkills(profile.skills)
  }, [profile])

  const clickAddButton = (value, setValue, setValues) => {
    setValues(values => {
      if (values && value && !values.includes(value))
        return values.concat(value)
      return values
    })
    setValue('')
  }
  const handleDelete = (chipToDelete, setter) => () => {
    setter((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  const saveSkills = () => {
    axios.put('/profile/update', { _id: profile._id, skills: skills }).then(res => {
      setProfile(res.data)
    })
    setEditSkills(false)
  }

  return (
    <>
      <Paper elevation={3} sx={{ paddingX: "1.5rem", marginBottom:"1.5rem"}}
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
          <Grid item xs={10}>
            <Typography variant="h6">Skills </Typography>
          </Grid>

          <Grid item container justifyContent="right" xs={2}>
            <Button sx={{ paddingY: '0px' }} onClick={() => setEditSkills((prev) => !prev)}>
              {!editSkills ? editButtonVisible && <EditIcon /> : editButtonVisible && <CloseIcon />}
            </Button>
          </Grid>

          <Grid item xs={12} sx={{ listStyle: 'none' }}>
            {skills.length == 0 && !editSkills ? <Typography variant="body1"> No Skills </Typography> : <></>}
            {skills.length != 0 && !editSkills ?
              skills.map(skill => {
                return (
                  <ListItem key={skill}>
                    <Chip
                      label={skill}
                    />
                  </ListItem>
                )
              })
              : <></>}

          </Grid>



          <Grid item xs={12}>
            <Collapse in={editSkills}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                rowSpacing={2}
                columnSpacing={2}
              >
                <Grid item xs={10}>
                  <AutoCompleteInput
                    selectLabel={"Skills"}
                    optionList={skillOptions}
                    value={skill}
                    setValue={setSkill}
                    buttonRef={addSkillBtnRef} />
                </Grid>
                <Grid item xs={2}>
                  <Button variant="text" ref={addSkillBtnRef} onClick={() => clickAddButton(skill, setSkill, setSkills)}>ADD</Button>
                </Grid>

                <Grid item xs={12} container sx={{ listStyle: 'none' }}>
                  {skills.map(skill => {
                    return (
                      <ListItem key={skill}>
                        <Chip
                          label={skill}
                          onDelete={handleDelete(skill, setSkills)}
                        />
                      </ListItem>
                    )
                  })}


                </Grid>
                <Grid item xs={12} container sx={{ marginBottom: "1rem" }} justifyContent="right">
                  <Button variant="text" onClick={() => { saveSkills() }}>Save</Button>
                </Grid>
              </Grid>
            </Collapse>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}


export default SkillsForm
