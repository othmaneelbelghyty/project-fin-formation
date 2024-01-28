import React from "react";
import "../CSS/SignUpLogin.css";
import { useFormik } from "formik";
import { signUpSchema2 } from "../../Schemas/Shema2";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema2,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <div className="signuplogin">
      <form className="signuplogin-container" onSubmit={handleSubmit}>
        <h1>WellCome!</h1>
        <h4>Login Here</h4>
        <div className="signuplogin-fields">
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
        </div>

        <button>Continue</button>

        <p className="signuplogin-login">
          Dont Have An Acount?{" "}
          <Link className="sigbuplogin-link" to="/signup">
            <span>Sign Up Now!</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
