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
import { alpha, styled } from "@mui/material/styles";
const CssTexField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#010c45;",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#b987fa;",
    },
  },
});

function CardTitle1({ formik }) {
  return (
    <>
      <Container fixed>
        <Box display="flex" flexDirection="column">
          <Card
            sx={{
              my: 2,
              height: "500px",
              //backgroundColor: "#f2f2f2",
              //backgroundColor: "#afcb64",
            }}
          >
            <AccountCircleIcon
              sx={{
                color: "#010c45",
                paddingX: 35.5,
                fontSize: 70,
                // textAlign: "center",
              }}
            />
            <p
              style={{
                margin: 0,

                padding: "10px",
                textAlign: "center",
                color: "#010c45",
                fontFamily: "Gilroy Medium",
                // backgroundColor: "#fe0073",
                fontSize: "25px",
                borderBottom: "2px solid #010c45",
              }}
            >
              Employee Register
            </p>
            <Container fixed>
              <Grid item md={12}>
                <Typography
                  variant="h5"
                  sx={{
                    paddingY: 2,
                    fontFamily: "Gilroy Light",
                    fontWeight: "bold",
                    color: "#6727cc",
                  }}
                >
                  Personal Details
                </Typography>
              </Grid>
              <Grid container>
                <Grid container md={12}>
                  <Grid item md={6} sx={{ my: 2 }}>
                    <FormControl>
                      <FormLabel
                        id="Firstname"
                        sx={{
                          fontFamily: "Gilroy Semibold",
                          fontSize: "17px",
                          //fontWeight: "bold",
                          color: "#0c0908",
                        }}
                      >
                        First Name
                      </FormLabel>
                      <CssTexField
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
                      <FormLabel
                        id="LastName"
                        sx={{
                          fontFamily: "Gilroy Semibold",
                          fontSize: "17px",
                          color: "#0c0908",
                          //fontWeight: "bold",
                        }}
                      >
                        Last Name
                      </FormLabel>
                      <CssTexField
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
                      sx={{
                        "&.Mui-Focused": { color: "#b987fa" },
                        fontFamily: "Gilroy Semibold",
                        fontSize: "17px",
                        color: "#0c0908",
                        //fontWeight: "bold",
                      }}
                    >
                      Select Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      sx={{}}
                      name="radio"
                      value={formik.values.radio}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <FormControlLabel
                        value="female"
                        control={
                          <Radio
                            sx={{ "&.Mui-checked": { color: "#b987fa" } }}
                          />
                        }
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={
                          <Radio
                            sx={{ "&.Mui-checked": { color: "#b987fa" } }}
                          />
                        }
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={
                          <Radio
                            sx={{
                              "&.Mui-checked": { color: "#b987fa" },
                            }}
                          />
                        }
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
                    <FormLabel
                      id="age"
                      sx={{
                        fontFamily: "Gilroy Semibold",
                        fontSize: "17px",
                        color: "#0c0908",
                        //fontWeight: "bold",
                      }}
                    >
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
                      // sx={{
                      //   "& .MuiInput-underline:hover": {
                      //     borderBottomColor: "green",
                      //   },
                      // }}
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
