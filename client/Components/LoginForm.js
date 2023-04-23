import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import styles from "../styles/loginsignup.module.css"
import PrimaryButton from "./Button/PrimaryButton";
import { userLogin } from "../action/user";
import AppContext from "../context/AppContext";
import ContentLoader from "./ContentLoader";
import Link from 'next/link';

const LoginForm = (props) => {

  const { dispatchUser, dispatchEvents } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    try {
      setLoading(true);
      const data = await userLogin(values, 'user' ,dispatchUser, dispatchEvents);
      if(data?.error) {
        toast.error(data.error);
      }
    } catch(e) {
      console.log(e)
      toast.error('Something Went Wrong')
    }
    setLoading(false)
  }

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required")
    }),
    onSubmit: handleLogin
  });
  return (<>
  <form className={`${styles.login_form} bg-[#172947ba] shadow-md px-8 pt-6 pb-8 mb-4 h-full w-full`} onSubmit={formik.handleSubmit}>
      <h1 className={`${styles.hidden_h1} text-primaries-100 my-6 mx-auto`}>Welcome</h1>
      <div className="flex flex-col gap-2 mb-4">
        <label className="block text-lg font-bold tracking-wide text-primaries-100" htmlFor="email">Email Address</label>
        <input
          className="w-full px-3 py-2 leading-tight tracking-wide border rounded shadow appearance-none bg-primaries-700 text-primaries-100 focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder='Email Address'
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 mb-6">
      <label className="block text-lg font-bold text-primaries-100" htmlFor="password">Password</label>
        <input
          className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none border-primaries-100 bg-primaries-700 text-primaries-100 focus:outline-none focus:shadow-outline"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder='Password'
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500">{formik.errors.password}</div>
        ) : null}
      </div>
      <div className="flex items-center justify-between">
        <PrimaryButton type='submit'>
          Login
        </PrimaryButton>
        <Link href="/forgotpassword">
        <span className="inline-block text-sm font-bold text-blue-500 align-baseline cursor-pointer hover:text-blue-800">
          Forgot Password?
        </span>
        </Link>
      </div>
      <button onClick={props.displayRegister} className={`${styles.hidden_link} inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 my-6`}>Don't have an account? Register</button>
    </form> 
    {loading && <ContentLoader />}
    </>);
}

export default LoginForm;
