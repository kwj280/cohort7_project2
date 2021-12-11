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

const interestOptions = ['Machine Learning', 'Big Data', 'System Design', 'Load Balancing', 'UI design']

const TextField = styled(MuiTextField)({
  width: '100%'
});
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
  float: 'left',
}));


const InterestsForm = ({ profile, setProfile }) => {

  const [editButtonVisible, setEditButtonVisible] = useState(false)
  const [editInterests, setEditInterests] = useState(false)
  const [interest, setInterest] = useState('');
  const [interests, setInterests] = useState([])
  const addInterestBtnRef = useRef()

  useEffect(() => {
    if (profile)
      setInterests(profile.interest)
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

  const saveInterests = () => {
    axios.put('/profile/update', { _id: profile._id, interest: interests }).then(res => {
      setProfile(res.data)
    })
    setEditInterests(false)
  }

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
          <Grid item xs={10}>
            <Typography variant="h6">Interests </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button sx={{ paddingY: '0px' }} onClick={() => setEditInterests((prev) => !prev)}>
              {!editInterests ? editButtonVisible&&<EditIcon /> : editButtonVisible&&<CloseIcon />}
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ listStyle: 'none' }}>
            {interests.length == 0 && !editInterests ? <Typography variant="body1"> No Interests </Typography> : <></>}
            {interests.length != 0 && !editInterests ?
              interests.map(interest => {
                return (
                  <ListItem key={interest}>
                    <Chip
                      label={interest}
                    />
                  </ListItem>
                )
              })
              : <></>}

          </Grid>

          <Grid item xs={12}>
            <Collapse in={editInterests}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                rowSpacing={2}
                columnSpacing={2}
              >
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
                <Grid item xs={12} container sx={{ marginBottom:"1rem" }} justifyContent="right">
                  <Button variant="text" onClick={()=>saveInterests()}>Save</Button>
                </Grid>
              </Grid>
            </Collapse>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}


export default InterestsForm
