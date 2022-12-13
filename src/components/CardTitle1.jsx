import React from "react";
import {
  Container,
  Card,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import "../Styles/CardTitle1.css";
function CardTitle1() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      radio: "",
      age: Number,
      passOutYear: Number,
      Course: "",
      percentage: Number,
    },
    validationSchema: {
      firstName: yup
        .string()
        .max(20, "Maximum 20 Characters allowed")
        .min(3, "Minimum 4 characters")
        .required("FirstName is Must"),

      LastName: yup
        .string()
        .max(20, "Maximum 20 Characters allowed")
        .min(3, "Minimum 4 characters")
        .required("Last Name Is Must"),
      radio: yup.string().required("Select Gender"),
      age: yup
        .number()
        .max(100, "Maximum 100 allowed")

        .required("Must Enter Age"),
      passOutYear: yup.number().required("Must Enter Age"),
      Course: yup.string().required("Enter Course"),
      percentage: yup
        .number()
        .max(100, "Max 100% is Required")
        .required("Enter Percentage"),
    },
    onSubmit: (value) => console.log("value", value),
  });
  return (
    <div className="whole">
      <Container fixed sx={{ height: "100vh", backgroundColor: "#f5f5f5" }}>
        <form onSubmit={formik.handleSubmit}>
          <Card sx={{ height: "400px" }}>
            <Container maxWidth="sm">
              <Grid container>
                <Grid container md={12}>
                  <Grid item md={6} sx={{ my: 2 }}>
                    <FormControl>
                      <FormLabel id="Firstname">First Name</FormLabel>
                      <TextField
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter First Name"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item md={6} sx={{ my: 2 }}>
                    <FormControl>
                      <FormLabel id="LastName">Last Name</FormLabel>
                      <TextField
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid item md={12} sx={{ my: 2 }}>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Select Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="radio"
                      value={formik.values.radio}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl>
                    <FormLabel id="age"> Age</FormLabel>
                    <TextField
                      name="age"
                      placeholder="Enter Age"
                      variant="standard"
                      value={formik.values.age}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Container>
          </Card>
          <Card sx={{ my: 2, height: 200 }}>
            <Container sx={{ my: 2 }}>
              <FormControl sx={{ width: 200 }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  name="passOutYear"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={formik.values.passOutYear}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: 200 }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  name="Course"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={formik.values.Course}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <TextField
                type="number"
                name="percentage"
                label="Percentage"
                variant="standard"
                value={formik.values.percentage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Button variant="standard" type="submit">
                Submit{" "}
              </Button>
            </Container>
          </Card>
        </form>
      </Container>
    </div>
  );
}

export default CardTitle1;
