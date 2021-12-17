import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const theme = useTheme();
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
          <h1>Setting Components here</h1>
          <ul>
            <li>
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
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
          </button>
        </Paper>
      </Container>
    </>
  );
}
