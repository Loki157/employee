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
import ClearIcon from "@mui/icons-material/Clear";
import Card2Table from "./Card2Table";
import AddIcon from "@mui/icons-material/Add";
import Scrollbars from "react-custom-scrollbars/lib/Scrollbars";
import RefreshIcon from "@mui/icons-material/Refresh";
import Card2List from "./Card2List";

const Card2 = ({ formik, removeInput }) => {
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
        <FormControl sx={{ width: 150, paddingLeft: 1 }}>
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
        <FormControl sx={{ width: 200, paddingLeft: 1 }}>
          <TextField
            type="number"
            name="percentage"
            placeholder="percentage (%)"
            variant="standard"
            value={formik.values.percentage}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.percentage && formik.touched.percentage ? (
            <Typography variant="p" sx={{ color: "crimson", fontSize: "15px" }}>
              {formik.errors.percentage}
            </Typography>
          ) : (
            false
          )}
        </FormControl>
      </Box>
    </>
  );
};
function CardTitle2({
  formik,
  addCard2,
  addComponent,
  removeInput,
  getFormik,
  removeTableRow,
}) {
  const [displayClearButton, setDisplayClearButton] = React.useState(false);
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box>
        <Container fixed>
          <Card sx={{ padding: 2, my: 2, height: 300, overflow: "auto" }}>
            <Scrollbars>
              <Grid container sx={{ padding: 0 }}>
                <Grid item sm={10}>
                  <Typography variant="h5">Education Details</Typography>
                </Grid>
                <Grid
                  item
                  sm={1}

                  //sx={{ float: "right" }}
                >
                  <Tooltip title="Add" arrow placement="left">
                    <Fab
                      size="small"
                      sx={{
                        "&:hover": { backgroundColor: "#471597" },
                        backgroundColor: "#6727cc",
                        color: "white",
                      }}
                      onClick={() => {
                        addComponent();
                        setDisplayClearButton(true);
                      }}
                    >
                      <AddIcon />
                    </Fab>
                  </Tooltip>
                </Grid>

                <Grid item sm={0.5}>
                  {displayClearButton ? (
                    <FormControl sx={{ paddingLeft: 1 }}>
                      <Tooltip title="Clear" arrow placement="right">
                        <Fab
                          onClick={() => {
                            removeInput();
                            setDisplayClearButton(false);
                          }}
                          size="small"
                          sx={{
                            backgroundColor: "#6727cc",
                            color: "white",
                            "&:hover": { backgroundColor: "#471597" },
                            //textAlign: "center",
                          }}
                        >
                          <ClearIcon />
                        </Fab>
                      </Tooltip>
                    </FormControl>
                  ) : null}
                </Grid>
              </Grid>
              <Box
                sx={{
                  my: 2,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              ></Box>
              {addCard2 ? (
                <Card2 formik={formik} removeInput={removeInput} />
              ) : null}

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
                <Tooltip title="Reset" arrow placement="right">
                  <Fab
                    sx={{
                      my: 2,
                      "&:hover": { backgroundColor: "#471597" },
                      backgroundColor: "#6727cc",
                      color: "white",
                    }}
                    size="small"
                    onClick={removeInput}
                  >
                    <RefreshIcon />
                  </Fab>
                </Tooltip>
              </Box>
              <Box>
                <Card2List
                  getFormik={getFormik}
                  removeTableRow={removeTableRow}
                />
                {/* <Card2Table
                  getFormik={getFormik}
                  removeTableRow={removeTableRow}
                /> */}
              </Box>
            </Scrollbars>
          </Card>
        </Container>
      </Box>
    </form>
  );
}

export default CardTitle2;
