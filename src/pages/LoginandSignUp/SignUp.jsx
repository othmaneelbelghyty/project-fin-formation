import React, { Component } from "react";
import "../CSS/SignUpLogin.css";
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas/Shema";
import { Link } from "react-router-dom";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <div className="signuplogin">
      <form className="signuplogin-container" onSubmit={handleSubmit}>
        <h1>WellCome!</h1>
        <h4>Sign Up Here</h4>
        <div className="signuplogin-fields">
          <input
            type="text"
            placeholder="Your Name"
            id="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username ? (
            <p className="form-errer">{errors.username}</p>
          ) : null}
          <input
            type=" email"
            placeholder="Email Address"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-errer">{errors.email}</p>
          ) : null}

          <input
            type=" password"
            placeholder="Password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-errer">{errors.password}</p>
          ) : null}
          <input
            type="password"
            id="confirmPassword"
            placeholder="Password Confirm"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <p className="form-errer">{errors.confirmPassword}</p>
          ) : null}
        </div>
        <button>Continue</button>
        <p className="signuplogin-login">
          Already have an account?{" "}
          <Link className="sigbuplogin-link" to="/login">
            <span>Login now</span>
          </Link>
        </p>
        <div className="signuplogin-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
