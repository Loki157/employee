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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../Styles/CardTitle1.css";
import { Box } from "@mui/system";

function CardTitle1({ formik }) {
  return (
    <>
      <Container fixed>
        <Box display="flex" flexDirection="column">
          <Card
            sx={{
              my: 2,
              height: "400px",
              //backgroundColor: "#f2f2f2",
              //backgroundColor: "#afcb64",
            }}
          >
            <p
              style={{
                margin: 0,
                padding: "10px",
                textAlign: "center",
                color: "#6727cc",
                fontFamily: "Gilroy Medium",
                // backgroundColor: "#fe0073",
                fontSize: "25px",
              }}
            >
              Employee Register
            </p>
            <Grid item md={12}>
              <Typography
                variant="h5"
                sx={{
                  padding: 0,
                  fontFamily: "Gilroy Light",
                  fontWeight: "bold",
                }}
              >
                Personal Details
              </Typography>
            </Grid>
            <Container fixed>
              <Grid container>
                <Grid container md={12}>
                  <Grid item md={6} sx={{ my: 2 }}>
                    <FormControl>
                      <FormLabel
                        id="Firstname"
                        sx={{
                          fontFamily: "Gilroy ",
                          fontWeight: "bold",
                        }}
                      >
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
        </Box>
      </Container>
    </>
  );
}

export default CardTitle1;
