import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import MuiTextField from "@mui/material/TextField";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(3),
  },
}));

export default function SettingPage({ user }) {
  const classes = useStyles();
  const [profile, setProfile] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [editInfo, setEditInfo] = useState(false);
  const theme = useTheme();

  const TextField = styled(MuiTextField)({
    width: "100%",
  });
  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
    float: "left",
  }));

  useEffect(() => {
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
    setPassword(user?.password);
    setEmail(user?.email);
  }, [user]);

  const updateUser = async () => {
    const response = await axios.post("/user/update", {
      newUser: {
        firstName,
        lastName,
        email,
        password,
      },
      id: user._id,
    });
  };

  console.log(user);
  return (
    <>
      <Container maxWidth={"xl"}>
        <Paper
          elevation={3}
          className={classes.content}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            rowSpacing={2}
            columnSpacing={2}
          >
            <Grid item xs={12} container justifyContent="center">
              <Typography variant="h3" sx={{ paddingBottom: "0px" }}>
                Account Settings
              </Typography>{" "}
              {!editInfo && (
                <Button
                  sx={{ paddingX: "16px" }}
                  onClick={() => {
                    setEditInfo(true);
                  }}
                >
                  <EditIcon />
                </Button>
              )}
            </Grid>
            {!editInfo ? (
              <>
                <Grid item xs={12} container justifyContent="center">
                  <Typography variant="p" sx={{ paddingX: "12px" }}>
                    <strong>First Name:</strong> {firstName}
                  </Typography>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                  <Typography variant="p" sx={{ paddingY: "0px" }}>
                    <strong>Last Name:</strong> {lastName}
                  </Typography>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                  <Typography variant="p" sx={{ paddingX: "12px" }}>
                    <strong>Password:</strong> {password.length} characters long
                  </Typography>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                  <Typography variant="p" sx={{ paddingX: "12px" }}>
                    <strong>Email:</strong> {email}
                  </Typography>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12} container justifyContent="center">
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    value={firstName}
                    size="small"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    value={lastName}
                    size="small"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={email}
                    size="small"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Grid>
                <Button
                  onClick={() => {
                    setEditInfo(false);
                    updateUser();
                  }}
                >
                  Save
                </Button>
              </>
            )}
          </Grid>

          {/* <ul>
            <li>
              <p>{firstName}</p>
              {editInfo === true && (
                <input
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              )}
              <button>Edit</button>
            </li>
            <li>
              <input
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </li>
            <li>
              <input
                value={password}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </li>
            <li>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </li>
          </ul>
          <button
            onClick={() => {
              updateUser();
            }}
          >
            Save
          </button> */}
        </Paper>
      </Container>
    </>
  );
}
