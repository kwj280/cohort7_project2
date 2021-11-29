import { makeStyles} from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import {useState} from 'react'
//import {useForm, Controller} from "react-hook-form"

// Style Function

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '500px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));


const JobForm2 = ({handleClose}) => {
  const classes = useStyles();

//  Declaring use state variables for Title textbox
  const [Title, setTitle] = useState("");
  const [TitleTouched, setTitleTouched] = useState(false);
  const TitleisValid = Title.trim() !== "";
  const TitleInputisInvalid = !TitleisValid && TitleTouched;

// Declaring use state variables for Description textbox
  const [Description, setDescription] = useState("");
  const [DescriptionTouched, setDescriptionTouched] = useState(false);
  const DescriptionisValid = Description.trim() !=="";
  const DescriptionInputisInvalid = !DescriptionisValid && DescriptionTouched;

// Declaring use state variables Skills textbox
  const [Skills, setSkills] = useState("");
  const [SkillsTouched, setSkillsTouched] = useState(false);
  const SkillsisValid = Skills.trim() !=="";
  const SkillsInputisInvalid = !SkillsisValid && SkillsTouched;

// Declaring use state variable for Company textbox
  const [Company, setCompany] = useState("");
  const [CompanyTouched, setCompanyTouched] = useState(false);
  const CompanyisValid = Company.trim() !=="";
  const CompanyInputisInvalid = !CompanyisValid && CompanyTouched;

// Declaring use state variable for Availability textbox
  const [Availability, setAvailability] = useState("")
  const [AvailabilityTouched, setAvailabilityTouched] = useState(false)
  const AvailabilityisValid = Availability.trim() !=="";
  const AvailabilityisInvalid = !AvailabilityisValid && AvailabilityTouched;

// Declaring use state variable for ExpiryDate Textbox
  const [ExpiryDate, setExpiryDate] = useState("")
  const [ExpiryDateTouched, setExpiryDateTouched] = useState(false)
  const ExpiryDateisValid = ExpiryDate.trim() !=="";
  const ExpiryDateisInvalid = !ExpiryDateisValid && ExpiryDateTouched;

// Declaring use state variables for Link Textbox
  const [Link, setlink] = useState("");
  const [LinkisTouched, setlinkTouched] = useState(false);
  const LinkisValid = Link.trim() !=="";
  const LinkisInvalid = !LinkisValid && LinkisTouched;



   // Function to perform when text box is selected
   const onBlur = (event, setter) => {
    setter(true);
    }
    
  // Function to perform when text box is used
  const onInputUpdate = (event, setter)=> {
    let updatedValue = event.target.value
    setter(updatedValue)
  }
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
      setAvailability("");
      setAvailabilityTouched(false);
      //Reset Expiry Date
      setExpiryDate("");
      setExpiryDateTouched(false);
      //Reset Link
      setlink("");
      setlinkTouched(false);
 }

 // Check to see the form has all the required fields before submitting
  let formIsValid = false
  if (TitleisValid && DescriptionisValid && SkillsisValid && CompanyisValid && AvailabilityisValid && ExpiryDateisValid && LinkisValid ) {
    formIsValid = true
 }

  console.log(formIsValid)

  // Post data to the following endpoint '/job/submit' using axios instead of fetch
    const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(Title, Description, Link, Company, Availability, ExpiryDate)
  
    // axios.post('/job/submit', {
    // Description, Title, ExpiryDate, Link, Company, Availability, Skills
    // }).then(function(response) {
    // console.log(response.data);
    //  });
      reset()
    };

  return (
  <>
    <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          value={Title}
          onBlur = {(event) => onBlur(event, setTitleTouched)}
          onChange={(event) => onInputUpdate(event,setTitle)}
          helperText={TitleInputisInvalid ? "Enter Title": null}
        />
        <TextField
          label="Description"
          variant="outlined"
          value={Description}
          multiline
          rows = {5}
          Maxrows = {10}
          onBlur = {(event) => onBlur(event, setDescriptionTouched)}
          onChange ={(event) => onInputUpdate(event,setDescription)}
          helperText={DescriptionInputisInvalid ? "Enter Description" : null}
        />
        <TextField
          label="Skills"
          variant="outlined"
          value={Skills}
          onBlur = {(event) => onBlur(event, setSkillsTouched)}
          onChange={(event) => onInputUpdate(event,setSkills)}         
          helperText={SkillsInputisInvalid ? "Enter Skills" : null}
        />
        <TextField
          label="Company"
          variant="outlined"
          value={Company}
          onBlur = {(event) => onBlur(event, setCompanyTouched)}
          onChange={(event) => onInputUpdate(event,setCompany)}
          helperText={CompanyInputisInvalid ? "Enter Company" : null}
        />
        <TextField
          label="Availability"
          variant="outlined"
          value={Availability}
          onBlur = {(event) => onBlur(event, setAvailabilityTouched)}
          onChange={(event) => onInputUpdate(event, setAvailability)}
          helperText={AvailabilityisInvalid ? "Enter Availability" : null}
        />
        <TextField
          label="Expiry Date"
          variant="outlined"
          value={ExpiryDate}
          onBlur = {(event) => onBlur(event, setExpiryDateTouched)}
          onChange={(event) => onInputUpdate(event,setExpiryDate)}
          helperText={ExpiryDateisInvalid ? "Enter Expiry Date" : null}
        />
        <TextField
          label="Link"
          variant="outlined"
          value={Link}
          onBlur = {(event) => onBlur(event, setlinkTouched)}
          onChange={(event) => onInputUpdate(event,setlink)}
          helperText={LinkisInvalid ? "Enter Link" : null}
        />
        <div>
    <Button variant="contained" color='secondary' onClick={reset}>
      Cancel
    </Button>
    <Button onClick={handleSubmit} type="Submit" variant="contained" color="primary" disabled={!formIsValid}>
      Submit
    </Button>
    </div>
    </form>
 </>

  );
      };
 
    
     
export default JobForm2