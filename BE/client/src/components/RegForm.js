import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import "./style.css";

window.axios = axios;

function RegForm({ errors, touched, isSubmitting }) {
  return (
    <Form className="login-form">
      <h2>Create User</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <Field
          autoComplete="off"
          type="text"
          id="username"
          name="username"
          className={errors.username ? "invalid" : ""}
        />
        <p className="error-text">{touched.username && errors.username}</p>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field autoComplete="off" type="text" id="password" name="password" />
        <p className="error-text">{touched.password && errors.password}</p>

        <label className="formLabel" htmlFor="email">
          Email
        </label>
        <Field autoComplete="off" type="email" id="email" name="email" />
        <p className="error-text">{touched.email && errors.email}</p>

        <div className="termsCheck">
          <label htmlFor="terms">I accept the terms of service</label>
          <Field
            className="field"
            autoComplete="off"
            type="checkbox"
            id="terms"
            name="terms"
            value="terms"
          />
        </div>
        <p className="error-text">{errors.terms}</p>
      </div>
      {isSubmitting && <p>Loading...</p>}
      <button className="submit-button" disabled={isSubmitting}>
        Submit &rarr;
      </button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues: () => {
    return {
      username: "",
      password: "",
      email: "",
      check: false
    };
  },
  handleSubmit: (values, formikBag) => {
    formikBag.resetForm();
    console.log("FORM SUCCESSFULLY SUBMITTED");
    const url = "http://localhost:5000/api/register";
    formikBag.setSubmitting(true);
    axios.post(url, values).then(response => {
      console.log(response.data);
      // window.alert("Form submitted " + response.data.username);
      formikBag.setSubmitting(false);
    });
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(3, "Username should be at least 5 characters long")
      .max(15, "Username must be at most 15 characters long")
      .required("Username is required"),
    password: Yup.string()
      .min(3, "Password must be at least 3 characters long")
      .max(15, "Password must be at most 15 characters long")
      .required("Password is required"),
    email: Yup.string()
      .min(8, "Email must be at least 8 characters long")
      .max(30, "Email must be at most 30 characters long")
      .required("Email is required"),
    terms: Yup.boolean()
      .oneOf([true], "Must Accept Terms of Service")
      .required("Must Accept Terms of Service")
  })
})(RegForm);
