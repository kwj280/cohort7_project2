import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import AdapterDateFns from "@mui/lab/AdapterMoment";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";



// Validation Schema with Yup
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title Required"),
  description: Yup.string().min(10, "Too short minimum of 10 characters required").required("Required"),
  skills: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  availability: Yup.date().required("Required"),
  expiryDate: Yup.date().required("Required"),
  link: Yup.string().url().required("Url Required"),
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

const JobForm = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      company: '',
      skills: '',
      availability: new Date(),
      expiryDate: null,
      link: ''
    },
    validationSchema: validationSchema,
     onSubmit: (values) => {
      console.log("Form data", values)
      axios({
        method: 'post',
        url: '/job/post_jobs',
        data: values
      })
      .then(function (response) {
        console.log(response.data);
      });
      formik.resetForm()
    },
  });


  return (
    <>
          <form className={classes.root} onSubmit={formik.handleSubmit}>
          <TextField
              id ="title"
              name="title"
              label="Title"
              variant="outlined"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
              id ="description"
              name="description"
              label="Description"
              variant="outlined"
              multiline
              rows={5}
              maxrows={10}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
          />
            <TextField
              id ="skills"
              name="skills"
              label="Skills"
              variant="outlined"
              value={formik.values.skills}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.skills && Boolean(formik.errors.skills)}
              helperText={formik.touched.skills && formik.errors.skills}
          />
          <TextField
              id ="company"
              name="company"
              label="Company"
              variant="outlined"
              value={formik.values.company}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.company && Boolean(formik.errors.company)}
              helperText={formik.touched.company && formik.errors.company}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                id="availability"
                name="availability"
                label="Availability"
                variant="outlined"
                value= {formik.values.availability}
                onChange = { value => formik.setFieldValue("availability", value)}
                renderInput={(params) => <TextField {...params} />}
                error={formik.touched.availability && Boolean(formik.errors.availability)}
                helperText={formik.touched.availability && formik.errors.availability}
              />
              <DatePicker
                id="expiryDate"
                name="expiryDate"
                label="Expiry Date"
                inputVariant="outlined"
                value={formik.values.expiryDate}
                onChange= {value => formik.setFieldValue("expiryDate", value)}
                onBlur= {value => formik.setFieldTouched("expiryDate",value )}
                renderInput={(params) => <TextField {...params} />}
                error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
                helperText={formik.touched.expiryDate && formik.errors.expiryDate}
              />
            </LocalizationProvider>
         
            <TextField
              id ="link"
              name="link"
              label="Link"
              variant="outlined"
              value={formik.values.link}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.link && Boolean(formik.errors.link)}
              helperText={formik.touched.link && formik.errors.link}
          />
             <div>
              <Button onClick={formik.resetForm} variant="contained" color="primary">
                Cancel
              </Button>
              <Button
                type="Submit"
                variant="contained"
                color="secondary"
                disabled={!formik.isValid} //|| formik.isSubmitting}
              >
                Submit
              </Button>
            </div>
           
          </form>
    </>
  );
};

export default JobForm;