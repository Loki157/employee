import React from "react";
import CardTitle1 from "./components/CardTitle1";
import CardTitle2 from "./components/CardTitle2";
import { useFormik } from "formik";
import "../src/App.css";
import teamwork from "./assets/teamwork.jpg";
import work from "./assets/work.png";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Scrollbars from "react-custom-scrollbars/lib/Scrollbars";
import * as yup from "yup";
import Card2Table from "./components/Card2Table";
import login from "./assets/login.jpg";
// const useStyles = makeStyles({
//   root: {
//     position: "sticky",
//     top: "1rem",
//     minWidth: "275",
//   },
// });
function App() {
  const [addCard2, setAddCard2] = React.useState(false);
  const [getFormik, setGetFormik] = React.useState([]);
  function addComponent() {
    setAddCard2([...addCard2, "Adding"]);
  }
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      radio: "",
      age: "",
      passOutYear: "",
      Course: "",
      percentage: "",
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(20, "Maximum 20 Characters allowed")
        .min(3, "Minimum 4 characters"),
      // .required("FirstName is Must")
      lastName: yup
        .string()
        .max(20, "Maximum 20 Characters allowed")
        .min(3, "Minimum 4 characters"),
      // .required("Last Name Is Must"),
      radio: yup.string(),
      //   .required("Select Gender"),
      age: yup.string().max(100, "Maximum 100 allowed"),

      // .required("Must Enter Age"),
      passOutYear: yup.string().required("Enter Passed Out Year"),
      Course: yup.string().required("Enter Course"),
      percentage: yup
        .number()
        .max(100, "Max 100% is Required")
        .required("Enter Percentage"),
    }),
    onSubmit: (values) => {
      console.log("value", values);
      formik.handleReset();
      getFormikValues(values);
    },
  });
  function getFormikValues(item) {
    setGetFormik([...getFormik, item]);
  }
  //  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="all">
        <div className="imageback">
          <div className="image">
            {" "}
            <img src={work} />
          </div>
        </div>
        <div className="commonCard">
          <Scrollbars>
            <div className="component">
              <Box>
                <CardTitle1 formik={formik} />
                <CardTitle2
                  formik={formik}
                  addCard2={addCard2}
                  addComponent={addComponent}
                />
                <Card2Table getFormik={getFormik} />
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
