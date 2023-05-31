import { Button, TextField } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LockIcon from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import signup from "./img/signup.jpg";
import React, { useEffect, useState } from "react";
import {useSnackbar} from 'notistack'
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { UtilityHeader} from "./Utility";
import { useRegisterUserMutation } from "./api/authentication";

const Signup = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const {enqueueSnackbar} = useSnackbar();

  //api request -mutation
  const [registerUser, { error, isSuccess }] = useRegisterUserMutation();

  // data
  const [user,setUser] = useState({first_name:'',last_name:'',phone_number: 0,email: '',password:'',password2: ''})
  // const redirect = location.search ? location.search.split("=") : "userId";

  // Methods
  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({...user}) 
  }
  useEffect(() => {
    // Handling Error
    if(error) {
      const errorMsg = error?.data?.errors || error?.data?.msg;
      enqueueSnackbar(errorMsg, {
        variant: "error",
      });
    }
    // After successfully authentication redirect
    if (isSuccess) {
      navigate(`..`);
      enqueueSnackbar("Account Created  Successfully", { variant: "success" });
    }
  }, [ isSuccess, navigate, enqueueSnackbar, error]);
  return (
    <div className="flex flex-col md:flex-row flex-nowrap justify-start items-stretch  gap-[4px] md:mx-auto md:w-3/5  lg:w-4/5 mt-8 rounded-md shadow-2xl">
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-start items-start gap-2 mx-auto py-8 px-6 w-4/5 bg-white rounded-sm border-slate-500 border-2 ">
        {/* Header - Page information */}
        <UtilityHeader h1={'Sign Up'} h2={'Get Started with Ardev'} to={'login'} to_text={'Already have an account?'} />
        {/* Header - Wrapper */}
        {/* Signup form */}
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col justify-start items-start gap-4">
          {/* Name */}
          <div className="flex flex-row justify-between items-center gap-4">
            <TextField
              id="first-name"
              label="First Name*"
              onChange={(e) => setUser((prev) => {
                return {...prev,first_name: e.target.value}
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              required
              size="small"
              variant="outlined"
            />
            <TextField
              id="last-name"
              label="Last Name*"
              onChange={(e) => setUser((prev) => {
                return {...prev,last_name: e.target.value}
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              required
              size="small"
              variant="outlined"
            />
          </div>
          {/* Name - Wrapper */}
          {/* Mobile Number */}
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            size="small"
            required
            fullWidth
            onChange={(e) => setUser((prev) => {
              return {...prev,phone_number: e.target.value}
            })}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneIcon />
                </InputAdornment>
              ),
            }}
          />
          {/* Mobile Number - wrapper */}
          {/* Email Id  */}
          <TextField
            id="email"
            label="Email*"
            variant="outlined"
            onChange={(e) => setUser((prev) => {
              return {...prev,email: e.target.value}
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              ),
            }}
            size="small"
            required
            fullWidth
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
            onChange={(e) => setUser((prev) => {
              return {...prev,password: e.target.value}
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="conform-password"
            label="Conform password"
            type="password"
            name="password"
            size="small"
            required
            fullWidth
            onChange={(e) => setUser((prev) => {
              return {...prev,password2: e.target.value}
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
          {/* Password - Wrapper*/}
          {/* Submit Button */}
          <div className="mx-auto">
            <Button type="submit" fullWidth variant="contained">
              Get Started
            </Button>
          </div>
        </form>
        {/* Signup form - Wrapper */}
      </div>
      {/* Left Side -- Wrapper */}

      {/* Right Side -- Layout (Images & Info div)  */}
      <Layout img={signup} info='signup' />
      {/* Right Side -- Wrapper */}
    </div>
  );
};

export default Signup;
