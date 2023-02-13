import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";


function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "field required";
      if (!values.password) errors.password = "field required";
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="email" type="text" name="email" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) :null}
        <div>Password:</div>
        <input id="password" type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ?(
          <div id="pswError" style={{ color: "red"}}>
            {formik.errors.email}
          </div>
        ) :null}
        <button id="submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
