import React from "react";
import CardTitle1 from "./components/CardTitle1";
import { useFormik } from "formik";
import "../src/App.css";
import teamwork from "./assets/teamwork.jpg";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Scrollbars from "react-custom-scrollbars/lib/Scrollbars";
// const useStyles = makeStyles({
//   root: {
//     position: "sticky",
//     top: "1rem",
//     minWidth: "275",
//   },
// });
function App() {
  const formik = useFormik({});
  //  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="all">
        <div className="imageback">
          <div className="image">
            {" "}
            <img src={teamwork} />
          </div>
        </div>
        <div className="commonCard">
          <Scrollbars>
            <div className="component">
              <Box>
                <CardTitle1 />
              </Box>
            </div>
          </Scrollbars>
        </div>
      </div>
      {/* <CardTitle1 /> */}
    </React.Fragment>
  );
}

export default App;
