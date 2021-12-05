import { makeStyles } from '@material-ui/core';
import MuiTextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { styled } from '@mui/system';
import { useState } from 'react'
import { Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import { useRef } from 'react';
import AutoCompleteInput from './AutoCompleteInput'
import Chip from '@mui/material/Chip';

//import {useForm, Controller} from "react-hook-form"

const TextField = styled(MuiTextField)({
  width: '100%'
});
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
  float: 'left',
}));


const skillOptions = ['HTML', 'CSS', 'Javascript', 'Node', 'React', 'MongoDB'];
const interestOptions = ['Machine Learning', 'Big Data', 'System Design', 'Load Balancing', 'UI design']


const ProfileForm = ({ user }) => {

  const [image, _setImage] = useState(null);
  const profileImg = useRef(null)
  const [firstName, setFirstName] = useState(user?.firstName??'')
  const [lastName, setLastName] = useState(user?.lastName??'')

  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState([])
  const addSkillBtnRef = useRef()

  const [interest, setInterest] = useState('');
  const [interests, setInterests] = useState([])
  const addInterestBtnRef = useRef()


  const cleanup = () => {
    URL.revokeObjectURL(image);
    profileImg.current.value = null;
  };

  const setImage = (newImage) => {
    if (image) {
      cleanup();
    }
    _setImage(newImage);
  };

  const handleOnChange = (event) => {
    const newImage = event.target?.files?.[0];
    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
  };
  const onProfilePictureClick = () => {
    profileImg.current.click();
  };

  //add value to list
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
  return (
    <>
      <Box sx={{ maxWidth: '50%' }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}
          columnSpacing={2}
        >
          <Grid item xs={12} container justifyContent="center">
            <IconButton onClick={onProfilePictureClick}>
              <input type='file' id='file' ref={profileImg} onChange={handleOnChange} style={{ display: 'none' }} />
              <Avatar
                sx={{ width: 150, height: 150 }}
                alt="Name"
                src={image || "/broken-image.jpg"}
              >
                User
              </Avatar>
            </IconButton>
          </Grid>
          <Grid item xs={12} container justifyContent="center" sx={{marginBottom: "2em"}}>
            <Typography variant="h6"> {user?.email} </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              variant="outlined"
              value={firstName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              value={lastName}
            />
          </Grid>
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

          <Grid item xs={10}>
            <AutoCompleteInput selectLabel={"Interests"}
              optionList={interestOptions}
              value={interest}
              setValue={setInterest}
              buttonRef={addInterestBtnRef}
            />
          </Grid>
          <Grid item xs={2}>
            <Button variant="text" ref={addInterestBtnRef} onClick={() => clickAddButton(interest, setInterest, setInterests)}>ADD</Button>
          </Grid>
          <Grid item xs={12} container sx={{ listStyle: 'none' }}>
            {interests.map(interest => {
              return (
                <ListItem key={interest}>
                  <Chip
                    label={interest}
                    onDelete={handleDelete(interest, setInterests)}
                  />
                </ListItem>
              )
            })}
          </Grid>

            
        </Grid>
      </Box>
    </>

  );
};



export default ProfileForm