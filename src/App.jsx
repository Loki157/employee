import React from "react";
import CardTitle1 from "./components/CardTitle1";
import { useFormik } from "formik";
function App() {
  const formik = useFormik({});
  return (
    <div>
      <CardTitle1 />
    </div>
  );
}

export default App;
