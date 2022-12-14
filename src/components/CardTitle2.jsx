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
  FormLabel,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { Grow } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Tooltip from "@mui/material/Tooltip";
import ClearIcon from "@mui/icons-material/Clear";
import Card2Table from "./Card2Table";
import AddIcon from "@mui/icons-material/Add";
import Scrollbars from "react-custom-scrollbars/lib/Scrollbars";
import RefreshIcon from "@mui/icons-material/Refresh";
import Card2List from "./Card2List";
import DoneIcon from "@mui/icons-material/Done";

const Card2 = ({
  formik,
  removeInput,
  datacheck,
  setgetalert,
  getalert,
  addCard2,
  growSet,
}) => {
  return (
    <>
      <Grow in={growSet}>
        <Fab
          variant="standard"
          type="submit"
          size="small"
          sx={{
            backgroundColor: "#6727cc",
            color: "white",
            "&:hover": { backgroundColor: "#471597" },
            //textAlign: "center",
            // padding: "10px",
            // width: "60%",
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <DoneIcon />
        </Fab>
      </Grow>
      <Box display="flex" flexDirection="row">
        <Grow in={growSet} {...(growSet ? { timeout: 500 } : {})}>
          <FormControl sx={{ width: 200 }}>
            <FormLabel
              id="demo-simple-select-label"
              sx={{
                fontFamily: "Gilroy Semibold",
                fontSize: "17px",
                //fontWeight: "bold",
              }}
            >
              Passed Out Year
            </FormLabel>
            <Select
              name="passOutYear"
              id="demo-simple-select"
              placeholder="Select Year"
              defaultValue="2022-16"
              value={formik.values.passOutYear}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <MenuItem value={10}>2022-2016</MenuItem>
              <MenuItem value={"2022"}>2022</MenuItem>
              <MenuItem value={"2021"}>2021</MenuItem>
              <MenuItem value={"2020"}>2020</MenuItem>
              <MenuItem value={"2019"}>2019</MenuItem>
              <MenuItem value={"2018"}>2018</MenuItem>
              <MenuItem value={"2017"}>2017</MenuItem>
              <MenuItem value={"2016"}>2016</MenuItem>
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
        </Grow>
        <Grow in={growSet} {...(growSet ? { timeout: 750 } : {})}>
          <FormControl sx={{ width: 150, paddingLeft: 1 }}>
            <FormLabel
              id="demo-simple-select-label"
              sx={{
                fontFamily: "Gilroy Semibold",
                fontSize: "17px",
                //fontWeight: "bold",
              }}
            >
              Course
            </FormLabel>
            <Select
              name="Course"
              value={formik.values.Course}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <MenuItem disabled value={20}>
                Select Course
              </MenuItem>
              <MenuItem value={"B.E"}>B.E</MenuItem>
              <MenuItem value={"B.T"}>B.T</MenuItem>
              <MenuItem value={"BCA"}>BCA</MenuItem>
              <MenuItem value={"BSC"}>BSC</MenuItem>
              <MenuItem value={"HSC"}>HSC</MenuItem>
              <MenuItem value={"SSLC"}>SSLC</MenuItem>
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
        </Grow>
        <Grow in={growSet} {...(growSet ? { timeout: 1000 } : {})}>
          <FormControl sx={{ width: 200, paddingLeft: 1 }}>
            <FormLabel
              id="demo-simple-select-label"
              sx={{
                fontFamily: "Gilroy Semibold",
                fontSize: "17px",
                //fontWeight: "bold",
              }}
            >
              &nbsp;
            </FormLabel>
            <TextField
              type="number"
              name="percentage"
              placeholder="percentage (%)"
              variant="outlined"
              value={formik.values.percentage}
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
            ) : (
              false
            )}
          </FormControl>
        </Grow>
        {/* <Stack spacing={2} sx={{ width: "100%" }}>
          <Alert
            onClose={() => {
              setgetalert(false);
            }}
          >
            <AlertTitle>Error</AlertTitle>
            This is a success alert ??? check it out!
          </Alert>
        </Stack> */}
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
  setgetalert,
  getalert,
}) {
  const [displayClearButton, setDisplayClearButton] = React.useState(false);
  const [growSet, setGrowSet] = React.useState(false);
  function handleChange() {
    setGrowSet((get) => !get);
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box>
        <Container fixed>
          <Card sx={{ padding: 2, my: 2, height: 300, overflow: "auto" }}>
            <Scrollbars>
              <Grid container sx={{ padding: 0 }}>
                <Grid item sm={10}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#6727cc",
                      fontFamily: "Gilroy Light",
                      fontWeight: "bold",
                    }}
                  >
                    Education Details
                  </Typography>
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
                        setGrowSet(true);
                      }}
                    >
                      <AddIcon />
                    </Fab>
                  </Tooltip>
                </Grid>

                <Grid item sm={0.5}>
                  {displayClearButton ? (
                    <Grow in={growSet}>
                      <FormControl
                      // sx={{ paddingLeft: 1 }}
                      >
                        <Tooltip title="Clear" arrow placement="right">
                          <Fab
                            onClick={() => {
                              removeInput();
                              setDisplayClearButton(false);
                              setGrowSet(false);
                            }}
                            onChange={handleChange}
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
                    </Grow>
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
                <Card2
                  formik={formik}
                  removeInput={removeInput}
                  growSet={growSet}
                />
              ) : (
                false
              )}

              {getalert ? (
                <Stack spacing={2} sx={{ width: "100%" }}>
                  <Alert
                    severity="error"
                    onClose={() => {
                      setgetalert(false);
                    }}
                  >
                    <AlertTitle>Error</AlertTitle>
                    Same Course Cannot be Entered
                  </Alert>
                </Stack>
              ) : null}

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
                    width: "90%",
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
                      paddingX: 2,
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
