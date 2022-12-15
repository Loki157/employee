import React from "react";
import {
  Container,
  Card,
  TextField,
  FormControl,
  Box,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  makeStyles,
  Grid,
  Fab,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import AddIcon from "@mui/icons-material/Add";
import Scrollbars from "react-custom-scrollbars/lib/Scrollbars";
import RefreshIcon from "@mui/icons-material/Refresh";
const Card2 = ({ formik }) => {
  return (
    <>
      <Box display="flex" flexDirection="row">
        <FormControl sx={{ width: 200 }}>
          <InputLabel id="demo-simple-select-label" sx={{ fontWeight: "bold" }}>
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
            <MenuItem value={"2022"}>2022</MenuItem>
            <MenuItem value={"2021"}>2021</MenuItem>
            <MenuItem value={"2020"}>2020</MenuItem>
            <MenuItem value={"2019"}>2019</MenuItem>
            <MenuItem value={"2018"}>2018</MenuItem>
            <MenuItem value={"2017"}>2017</MenuItem>
            <MenuItem value={"2016"}>2016</MenuItem>
          </Select>

          {formik.errors.passOutYear && formik.touched.passOutYear ? (
            <Typography variant="p" sx={{ color: "crimson", fontSize: "15px" }}>
              {formik.errors.passOutYear}
            </Typography>
          ) : null}
        </FormControl>
        <FormControl sx={{ width: 150 }}>
          <InputLabel id="demo-simple-select-label" sx={{ fontWeight: "bold" }}>
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
            <MenuItem value={"B.E"}>B.E</MenuItem>
            <MenuItem value={"B.T"}>B.T</MenuItem>
            <MenuItem value={"BCA"}>BCA</MenuItem>
            <MenuItem value={"BSC"}>BSC</MenuItem>
            <MenuItem value={"HSC"}>HSC</MenuItem>
            <MenuItem value={"SSLC"}>SSLC</MenuItem>
          </Select>
          {formik.errors.Course && formik.touched.Course ? (
            <Typography variant="p" sx={{ color: "crimson", fontSize: "15px" }}>
              {formik.errors.Course}
            </Typography>
          ) : null}
        </FormControl>
        <FormControl sx={{ width: 100 }}>
          <TextField
            type="number"
            name="percentage"
            placeholder="Enter percentage (%)"
            variant="standard"
            value={formik.values.percentage}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.percentage && formik.touched.percentage ? (
            <Typography variant="p" sx={{ color: "crimson", fontSize: "15px" }}>
              {formik.errors.percentage}
            </Typography>
          ) : null}
        </FormControl>
      </Box>
    </>
  );
};
function CardTitle2({ formik, addCard2, addComponent }) {
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box>
        <Container fixed>
          <Card sx={{ padding: 3, my: 2, height: 300, overflow: "auto" }}>
            <Scrollbars>
              <h2>Education Details</h2>

              <Button
                variant="contained"
                size="small"
                sx={{
                  "&:hover": { backgroundColor: "#471597" },
                  backgroundColor: "#6727cc",
                  color: "white",
                }}
                onClick={addComponent}
              >
                <AddIcon />
                Add{" "}
              </Button>
              <Box
                sx={{
                  my: 2,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              ></Box>
              {addCard2?<Card2 formik={formik} /> :null}

              <Box
                display="flex"
                flexDirection="row"
                //justifyContent="space-around"
              >
                <Button
                  variant="standard"
                  type="submit"
                  sx={{
                    my: 2,
                    backgroundColor: "#6727cc",
                    color: "white",
                    "&:hover": { backgroundColor: "#471597" },
                    //textAlign: "center",
                    padding: "10px",
                    width: "60%",
                    // display: "flex",
                    // flexDirection: "column",
                    // alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  Submit
                </Button>
                <Tooltip title="Reset">
                  <Fab
                    sx={{
                      my: 2,
                      "&:hover": { backgroundColor: "#471597" },
                      backgroundColor: "#6727cc",
                      color: "white",
                    }}
                    size="small"
                    onClick={formik.handleReset}
                  >
                    <RefreshIcon />
                  </Fab>
                </Tooltip>
              </Box>
            </Scrollbars>
          </Card>
        </Container>
      </Box>
    </form>
  );
}

export default CardTitle2;
