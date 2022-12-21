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
  const [tabledata, settabledata] = React.useState([]);
  const [addCard2, setAddCard2] = React.useState(false);
  const [getFormik, setGetFormik] = React.useState([]);
  const [getalert, setgetalert] = React.useState(false);
  function addComponent() {
    setAddCard2(true);
  }
  function removeInput() {
    //formik.handleReset();
    setAddCard2(false);
  }
  function removeTableRow(idValue) {
    console.log(idValue);
    const passData = [...getFormik];
    const index1 = getFormik.findIndex((item) => {
      return item.id === idValue;
    });
    console.log("passData", passData, "index1", index1);
    if (index1 >= 0) {
      passData.splice(index1, 1);
    }
    setGetFormik([...passData]);
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
        .min(3, "Minimum 4 characters")
        .required("FirstName is Must"),
      lastName: yup
        .string()
        .max(20, "Maximum 20 Characters allowed")
        .min(3, "Minimum 4 characters")
        .required("Last Name Is Must"),
      radio: yup.string().required("Select Gender"),
      age: yup
        .number()
        .max(3, "Maximum 100 allowed")
        .required("Must Enter Age"),
      passOutYear: yup.string().required("Enter Passed Out Year"),
      Course: yup.string().required("Enter Course"),
      percentage: yup
        .number()
        .max(100, "Max 100% is Required")
        .required("Enter Percentage"),
    }),
    onSubmit: (values) => {
      console.log("value", values);
      // formik.handleReset();
      setAddCard2(false);
      // getFormikValues(values);
      datacheck(values);
    },
  });

  function datacheck(values) {
    const check = getFormik.findIndex((data) => data.Course === values.Course);
    console.log("index", check, values);
    if (check === -1) {
      const idWithValue = { ...values, id: Date.now() };
      setGetFormik([...getFormik, idWithValue]);
      console.log("table", getFormik);
    } else {
      setgetalert(true);
    }
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
                  datacheck={datacheck}
                  formik={formik}
                  addCard2={addCard2}
                  removeInput={removeInput}
                  addComponent={addComponent}
                  getFormik={getFormik}
                  removeTableRow={removeTableRow}
                  setgetalert={setgetalert}
                  getalert={getalert}
                />
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
