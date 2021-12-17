import MuiTextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { styled } from "@mui/system";
import { useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { useRef, useEffect } from "react";
import Collapse from "@mui/material/Collapse";
import WorkExperienceForm from "./WorkExperienceForm";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import SkillsForm from "./SkillsForm";
import InterestsForm from "./InterestsForm";
import LinksForm from "./LinksForm";

//import {useForm, Controller} from "react-hook-form"

const TextField = styled(MuiTextField)({
  width: "100%",
});
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
  float: "left",
}));

const ProfileForm = ({ user }) => {
  const [profile, setProfile] = useState(null);
  const [image, _setImage] = useState(null);
  const profileImg = useRef(null);

  useEffect(() => {
    axios.get("/profile/getByUserId/" + user._id).then((res) => {
      setProfile(res.data);
    });
  }, []);

  useEffect(() => {
    if (profile?.profile_picture) {
      let img = profile.profile_picture;
      const buf = Buffer.from(img.data);
      let imgSrc = buf.toString("utf8");
      setImage(imgSrc);
    }
    // _setImage(profile.profile_picture)
  }, [profile]);
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
      var reader = new FileReader();
      reader.onloadend = function () {
        console.log(reader.result);
        axios
          .put("/profile/updateProfilePicture", {
            _id: profile._id,
            profile_picture: reader.result,
          })
          .then((res) => {
            console.log(res);
          });
      };
      reader.readAsDataURL(newImage);

      // newImage.text().then(img => {
      //   console.log(img)

      // })
      setImage(URL.createObjectURL(newImage));
    }
  };
  const onProfilePictureClick = () => {
    profileImg.current.click();
  };

  //add value to list
  const clickAddButton = (value, setValue, setValues) => {
    setValues((values) => {
      if (values && value && !values.includes(value))
        return values.concat(value);
      return values;
    });
    setValue("");
  };

  const handleDelete = (chipToDelete, setter) => () => {
    setter((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <>
      <Box sx={{ maxWidth: "55%" }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}
          columnSpacing={2}
        >
          <Grid item xs={12} container justifyContent="center">
            <IconButton onClick={onProfilePictureClick}>
              <input
                type="file"
                id="file"
                ref={profileImg}
                onChange={handleOnChange}
                style={{ display: "none" }}
              />
              <Avatar
                sx={{ width: 150, height: 150 }}
                alt="Name"
                src={image || "/broken-image.jpg"}
              >
                User
              </Avatar>
            </IconButton>
          </Grid>
          <Grid item xs={12} container justifyContent="center">
            <Typography variant="h6"> {user?.email} </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            sx={{ marginBottom: "2em" }}
          >
            <Typography variant="h6">
              {" "}
              {user?.firstName} {user?.lastName}{" "}
            </Typography>
          </Grid>

          {/************************************SKILLS************************************/}
          <Grid item xs={12}>
            <SkillsForm profile={profile} setProfile={setProfile} />
          </Grid>
          {/**********************************Interests***********************************/}
          <Grid item xs={12}>
            <InterestsForm profile={profile} setProfile={setProfile} />
          </Grid>

          {/**********************************Projects***********************************/}

          <Grid item xs={12}>
            <WorkExperienceForm profile={profile} setProfile={setProfile} />
          </Grid>

          {/**********************************Links***********************************/}

          <Grid item xs={12}>
            <LinksForm profile={profile} setProfile={setProfile} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProfileForm;
