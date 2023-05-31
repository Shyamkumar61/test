import React, { useEffect, useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";

import InputAdornment from "@mui/material/InputAdornment";
import login from "./img/login.png";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { Button, TextField } from "@mui/material";
import { UtilityHeader, UtilityLink } from "./Utility";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "./api/authentication";
import { useSnackbar } from "notistack";
import { loginRequest, loginSuccess } from "./authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // api request - mutation (pending waiting for base ur)
  const [loginUser, { data, error, isSuccess, isError, isLoading }] =
    useLoginUserMutation();

  // data
  const [user, setUser] = useState({ email: "", password: "" });

  // Methods
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginRequest());
    if (user.email === "" && user.password === "") {
      enqueueSnackbar("Please Enter Email & Password", { variant: "error" });
      return;
    }
    try {
      const result = await loginUser({ ...user });
      const accessToken = result.data?.success?.token?.access;
      const refreshToken = result.data?.success?.token?.refresh;
      if (accessToken) {
        dispatch(loginSuccess({ accessToken, refreshToken }));
        enqueueSnackbar("Login Successfully", { variant: "success" });
      }
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    } catch (error) {
      dispatch(loginFailure(error?.message));
    }
  };

  // UseEffects
  useEffect(() => {
    if (isSuccess) {
      navigate(`..`);
    }
  }, [
    data?.user,
    dispatch,
    enqueueSnackbar,
    error,
    isError,
    isSuccess,
    navigate,
    // redirect,
  ]);
  return (
    <div className="flex flex-col md:flex-row flex-nowrap justify-start items-stretch  gap-[4px] md:mx-auto md:w-3/5 lg:w-4/5  mt-8 rounded-md shadow-2xl">
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-start items-start gap-2 mx-auto py-8 px-6 w-4/5 bg-white rounded-sm border-slate-700 border-4 ">
        {/* Header - Page information */}
        <UtilityHeader
          h1={"Login Now"}
          h2={"Access your dashboard"}
          to={"signup"}
          to_text={"Create an account?"}
        />
        {/* Header - Wrapper */}
        {/* Signup form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col justify-start items-start gap-8 w-full"
        >
          {/* Login info */}
          <div className="flex flex-col justify-between items-center gap-6 w-full">
            {/* Email Id  */}
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              required
              fullWidth
              onChange={(e) =>
                setUser((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                ),
              }}
            />
            {/* Email Id - W */}
            {/* Password */}
            <TextField
              id="password"
              label="Password"
              type="password"
              name="password"
              size="small"
              required
              fullWidth
              onChange={(e) =>
                setUser((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              // value={password}
              // onChange={handleDataChange}
            />
            {/* Password - Wrapper*/}
          </div>
          {/* Login info - Wrapper */}

          {/* Submit Button */}
          <div className="mx-auto">
            <Button type="submit" fullWidth variant="contained">
              {isLoading ? "Logging In..." : "Login"}
            </Button>
          </div>
        </form>
        {/* Signup form - Wrapper */}
        <div className="flex justify-end items-end w-full mt-4">
          <UtilityLink to="forgot-password" text="Forgot password?" />
        </div>
      </div>
      {/* Left Side -- Wrapper */}

      {/* Right Side -- Images & Info div  */}
      <Layout img={login} info={"login"} />
      {/* Right Side -- Wrapper */}
    </div>
  );
};

export default Login;
