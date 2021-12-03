import { makeStyles } from '@material-ui/core';
import MuiTextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { styled } from '@mui/system';
import { useState } from 'react'
import { Grid, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import { useRef } from 'react';
//import {useForm, Controller} from "react-hook-form"

const TextField = styled(MuiTextField)({
  width: '100%'
});




const ProfileForm = ({ handleClose }) => {

  const [image, _setImage] = useState(null);
  const inputFile = useRef(null)

  const cleanup = () => {
    URL.revokeObjectURL(image);
    inputFile.current.value = null;
  };

  const setImage = (newImage) => {
    if (image) {
      cleanup();
    }
    _setImage(newImage);
  };

  const handleOnChange = (event) => {
    const newImage = event.target?.files?.[0];
    console.log(newImage)

    if (newImage) {
      setImage(URL.createObjectURL(newImage));
      //fetch new image
    }
  };
  const onButtonClick = () => {
    inputFile.current.click();
  };
  return (
    <>
      <Box sx={{ maxWidth: '70%' }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}
          columnSpacing={2}
        >
          <Grid item xs={12} container justifyContent="center">
            <IconButton onClick={onButtonClick}>
              <input type='file' id='file' ref={inputFile} onChange={handleOnChange} style={{ display: 'none' }} />
              <Avatar
                sx={{ width: 120, height: 120 }}
                alt="Name"
                src={image ||"/broken-image.jpg"}
              >
                User
              </Avatar>
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth

            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Title"
              variant="outlined"

            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Title"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Title"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth

            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Title"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Title"
              variant="outlined"
            />

          </Grid>
        </Grid>
      </Box>
    </>

  );
};



export default ProfileForm