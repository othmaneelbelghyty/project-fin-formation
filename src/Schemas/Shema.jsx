import * as Yup from "yup";

export const signUpSchema = Yup.object({
  username: Yup.string().min(2).max(25).required("Please enter your user name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf(
      [Yup.ref("password"), null],

      "password must match"
    ),
});
