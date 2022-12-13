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
  Typography,
  makeStyles,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

import "../Styles/CardTitle1.css";
import { Box } from "@mui/system";

function CardTitle1() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      radio: "",
      age: Number,
      passOutYear: "",
      Course: "",
      percentage: Number,
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(20, "Maximum 20 Characters allowed")
        .min(3, "Minimum 4 characters")
        .required("FirstName is Must"),

      lastName: yup
        .string()
        .max(20, "Maximum 20 Characters allowed")
        .min(3, "Minimum 4 characters")
        .required("Last Name Is Must"),
      radio: yup.string().required("Select Gender"),
      age: yup
        .string()
        .max(100, "Maximum 100 allowed")

        .required("Must Enter Age"),
      passOutYear: yup.string().required("Enter Passed Out Year"),
      Course: yup.string().required("Enter Course"),
      percentage: yup
        .string()
        .max(100, "Max 100% is Required")
        .required("Enter Percentage"),
    }),
    onSubmit: (value) => {
      console.log("value", value);
    },
  });
  return (
    <>
      <Container fixed>
        <h2>Employee Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <Box display="flex" flexDirection="column">
            <Card
              sx={{ height: "400px", backgroundColor: "#afcb64 !important" }}
            >
              <Container fixed>
                <Grid container>
                  <Grid item md={12}>
                    <h2>Personal Details</h2>
                  </Grid>
                  <Grid container md={12}>
                    <Grid item md={6} sx={{ my: 2 }}>
                      <FormControl>
                        <FormLabel id="Firstname" sx={{ fontWeight: "bold" }}>
                          First Name
                        </FormLabel>
                        <TextField
                          name="firstName"
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enter First Name"
                        />
                        {formik.errors.firstName && formik.touched.firstName ? (
                          <Typography
                            variant="p"
                            sx={{ color: "crimson", fontSize: "15px" }}
                          >
                            {formik.errors.firstName}
                          </Typography>
                        ) : null}
                      </FormControl>
                    </Grid>
                    <Grid item md={6} sx={{ my: 2 }}>
                      <FormControl>
                        <FormLabel id="LastName" sx={{ fontWeight: "bold" }}>
                          Last Name
                        </FormLabel>
                        <TextField
                          name="lastName"
                          placeholder="Enter Last Name"
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.errors.lastName && formik.touched.lastName ? (
                          <Typography
                            variant="p"
                            sx={{ color: "crimson", fontSize: "15px" }}
                          >
                            {formik.errors.lastName}
                          </Typography>
                        ) : null}
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid item md={12} sx={{ my: 2 }}>
                    <FormControl>
                      <FormLabel
                        id="demo-row-radio-buttons-group-label"
                        sx={{ fontWeight: "bold" }}
                      >
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
                      {formik.errors.radio && formik.touched.radio ? (
                        <Typography
                          variant="p"
                          sx={{ color: "crimson", fontSize: "15px" }}
                        >
                          {formik.errors.radio}
                        </Typography>
                      ) : null}
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <FormLabel id="age" sx={{ fontWeight: "bold" }}>
                        {" "}
                        Age
                      </FormLabel>
                      <TextField
                        name="age"
                        placeholder="Enter Age"
                        variant="standard"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.age && formik.touched.age ? (
                        <Typography
                          variant="p"
                          sx={{ color: "crimson", fontSize: "15px" }}
                        >
                          {formik.errors.age}
                        </Typography>
                      ) : null}
                    </FormControl>
                  </Grid>
                </Grid>
              </Container>
            </Card>

            <Card sx={{ my: 2, height: 300 }}>
              <h2 style={{ textAlign: "center" }}>Education Details</h2>
              <Button>Add Education</Button>
              <Box
                sx={{
                  my: 2,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <FormControl sx={{ width: 200 }}>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ fontWeight: "bold" }}
                  >
                    Passed Out Year
                  </InputLabel>
                  <Select
                    name="passOutYear"
                    id="demo-simple-select"
                    placeholder="Select Year"
                    value={formik.values.passOutYear}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>

                  {formik.errors.passOutYear && formik.touched.passOutYear ? (
                    <Typography
                      variant="p"
                      sx={{ color: "crimson", fontSize: "15px" }}
                    >
                      {formik.errors.passOutYear}
                    </Typography>
                  ) : null}
                </FormControl>
                <FormControl sx={{ width: 200 }}>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ fontWeight: "bold" }}
                  >
                    Course
                  </InputLabel>
                  <Select
                    name="Course"
                    id="demo-simple-select"
                    placeholder="Select Course"
                    value={formik.values.Course}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  {formik.errors.Course && formik.touched.Course ? (
                    <Typography
                      variant="p"
                      sx={{ color: "crimson", fontSize: "15px" }}
                    >
                      {formik.errors.Course}
                    </Typography>
                  ) : null}
                </FormControl>
                <FormControl>
                  <TextField
                    type="number"
                    name="percentage"
                    placeholder="Enter percentage (%)"
                    variant="standard"
                    value=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.percentage && formik.touched.percentage ? (
                    <Typography
                      variant="p"
                      sx={{ color: "crimson", fontSize: "15px" }}
                    >
                      {formik.errors.percentage}
                    </Typography>
                  ) : null}
                </FormControl>
              </Box>

              <Button
                variant="standard"
                type="submit"
                sx={{
                  my: 2,
                  backgroundColor: "rgb(87, 73, 209)",
                  color: "white",
                  "&:hover": { backgroundColor: "rgb(38, 21, 187)" },
                  textAlign: "center",
                  padding: "10px",
                  width: "100%",
                  // display: "flex",
                  // flexDirection: "column",
                  // alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                Submit{" "}
              </Button>
            </Card>
          </Box>
        </form>
      </Container>
    </>
  );
}

export default CardTitle1;
