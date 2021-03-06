import { makeStyles } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import AdapterDateFns from "@mui/lab/AdapterMoment";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import moment from "moment";
import { Formik, Form } from "formik";
import * as Yup from "yup";

//Initial values for each input in job form using Formik
const INITIAL_FORM_STATE = {
  Title: "",
  Description: "",
  skills: "",
  Company: "",
  Availability: null,
  Expiry: null,
  Link: "",
};

// Validation Schema with Yup
const FORM_VALIDATION = Yup.object().shape({
  Title: Yup.string().required("Required"),
  Description: Yup.string().min(10, "Too Short").required("Required"),
  skills: Yup.string().required("Required"),
  Company: Yup.string().required("Required"),
  Availability: Yup.string().required("Required"),
  ExpiryDate: Yup.string().required("Required"),
  Link: Yup.string().required("Required"),
});

// Style Function

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "500px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const OldJobForm = () => {
  const classes = useStyles();


  //  Declaring use state variables for Title textbox
  const [Title, setTitle] = useState("");
  const [TitleTouched, setTitleTouched] = useState(false);
  const TitleisValid = Title.trim() !== "";
  const TitleInputisInvalid = !TitleisValid && TitleTouched;

  // Declaring use state variables for Description textbox
  const [Description, setDescription] = useState("");
  const [DescriptionTouched, setDescriptionTouched] = useState(false);
  const DescriptionisValid = Description.trim() !== "";
  const DescriptionInputisInvalid = !DescriptionisValid && DescriptionTouched;

  // Declaring use state variables Skills textbox
  const [skills, setSkills] = useState("");
  const [SkillsTouched, setSkillsTouched] = useState(false);
  const SkillsisValid = skills.trim() !== "";
  const SkillsInputisInvalid = !SkillsisValid && SkillsTouched;

  // Declaring use state variable for Company textbox
  const [Company, setCompany] = useState("");
  const [CompanyTouched, setCompanyTouched] = useState(false);
  const CompanyisValid = Company.trim() !== "";
  const CompanyInputisInvalid = !CompanyisValid && CompanyTouched;

  // Declaring use state variable for Availability textbox
  const [Availability, setAvailability] = useState("");
  //const [AvailabilityTouched, setAvailabilityTouched] = useState(false)
  const AvailabilityisValid = Availability !== null;
  const AvailabilityisInvalid = !AvailabilityisValid; //AvailabilityTouched;

  // Declaring use state variable for ExpiryDate Textbox
  const [ExpiryDate, setExpiryDate] = useState(null);
  //const [ExpiryDateTouched, setExpiryDateTouched] = useState(false)
  const ExpiryDateisValid = ExpiryDate !== null;
  const ExpiryDateisInvalid = !ExpiryDateisValid; //ExpiryDateTouched;

  // Declaring use state variables for Link Textbox
  const [Link, setlink] = useState("");
  const [LinkisTouched, setlinkTouched] = useState(false);
  const LinkisValid = Link.trim() !== "";
  const LinkisInvalid = !LinkisValid && LinkisTouched;

  // Function to perform when text box is selected
  const onBlur = (event, setter) => {
    setter(true);
  };

  // Function to perform when text box is used
  const onInputUpdate = (event, setter) => {
    let updatedValue = event.target.value;
    setter(updatedValue);
  };
  // Function to reset form after clicking submit
  const reset = () => {
    // Reset Title
    setTitle("");
    setTitleTouched(false);
    // Reset Description
    setDescription("");
    setDescriptionTouched(false);
    //Reset Skills
    setSkills("");
    setSkillsTouched(false);
    //Reset Company
    setCompany("");
    setCompanyTouched(false);
    //Reset Availability
    setAvailability(null);
    //setAvailabilityTouched(false);
    //Reset Expiry Date
    setExpiryDate(null);
    //setExpiryDateTouched(false);
    //Reset Link
    setlink("");
    setlinkTouched(false);
  };

  // Check to see the form has all the required fields before submitting
  let formIsValid = false;
  if (
    TitleisValid &&
    DescriptionisValid &&
    SkillsisValid &&
    CompanyisValid &&
    AvailabilityisValid &&
    ExpiryDateisValid &&
    LinkisValid
  ) {
    formIsValid = true;
  }

  // Post data to the following endpoint '/job/submit' using axios instead of fetch
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Title)
    axios
      .post("/job/post_jobs", {
        title: Title,
        description: Description,
        skills,
        company: Company,
        availability: Availability,
        expiryDate: ExpiryDate,
        link: Link,
      })
      .then(function (response) {
        console.log(response.data);
      });
      reset()
  };

  return (
    <>
      <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => {
            console.log("Hello");
          }}
        >
          <Form className={classes.root}>
            <TextField
              name="Title"
              label="Title"
              variant="outlined"
              value={Title}
              onBlur={(event) => onBlur(event, setTitleTouched)}
              onChange={(event) => onInputUpdate(event, setTitle)}
              helperText={TitleInputisInvalid ? "Enter Title" : null}
            />
            <TextField
              name="Description"
              label="Description"
              variant="outlined"
              value={Description}
              multiline
              rows={5}
              maxrows={10}
              onBlur={(event) => onBlur(event, setDescriptionTouched)}
              onChange={(event) => onInputUpdate(event, setDescription)}
              helperText={
                DescriptionInputisInvalid ? "Enter Description" : null
              }
            />
            <TextField
              name="skills"
              label="Skills"
              variant="outlined"
              value={skills}
              onBlur={(event) => onBlur(event, setSkillsTouched)}
              onChange={(event) => onInputUpdate(event, setSkills)}
              helperText={SkillsInputisInvalid ? "Enter Skills" : null}
            />
            <TextField
              name="Company"
              label="Company"
              variant="outlined"
              value={Company}
              onBlur={(event) => onBlur(event, setCompanyTouched)}
              onChange={(event) => onInputUpdate(event, setCompany)}
              helperText={CompanyInputisInvalid ? "Enter Company" : null}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                name="Availability"
                label="Availability"
                value={Availability}
                onChange={(newValue) => setAvailability(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
              <DatePicker
                name="Expiry"
                label="Expiry Date"
                value={ExpiryDate}
                onChange={(newValue) => {
                  setExpiryDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
              name="Link"
              label="Link"
              variant="outlined"
              value={Link}
              onBlur={(event) => onBlur(event, setlinkTouched)}
              onChange={(event) => onInputUpdate(event, setlink)}
              helperText={LinkisInvalid ? "Enter Link" : null}
            />
            <div>
              <Button variant="contained" color="secondary" onClick={reset}>
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                type="Submit"
                variant="contained"
                color="primary"
                disabled={!formIsValid}
              >
                Submit
              </Button>
            </div>
            </Form>
        </Formik>
    </>
  );
};

export default OldJobForm;