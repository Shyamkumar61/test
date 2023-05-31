import React, { useEffect, useState } from "react";
import LockIcon from "@mui/icons-material/Lock";

import InputAdornment from "@mui/material/InputAdornment";
import reset from "./img/reset.png";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { Button, TextField } from "@mui/material";
import { UtilityHeader, UtilityLink } from "./Utility";
import { useDispatch } from "react-redux";
const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // api request - mutation (pending waiting for base ur)
  // const [loginUser, {data,error,isSuccess,isError,isLoading}] = useLoginUserMutation(); l

  // data
  const [passwords,setPasswords] = useState({passwords: '',conformPassword: ''});
  
  // Methods
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login btn click")
    // loginpasswords({...passwords}) - pending to server data
  }

  // UseEffects
  useEffect(() => {
    // handling error
      // show popup error msg

    // After successfully
    // show popup login successfully
      // redirect to dashboard
  },[])
  return (
    <div className="flex flex-col md:flex-row flex-nowrap justify-start items-stretch  gap-[4px] md:mx-auto md:w-3/5  mt-8 rounded-md lg:w-4/5 shadow-2xl">
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-start items-start gap-2 mx-auto py-8 px-6 w-4/5 bg-white rounded-sm border-slate-700 border-4 ">
        {/* Header - Page information */}
        <UtilityHeader h1={'Password Recovery'} h2={'Regain access to your account.'} to={'login'} to_text={'Return to login'} />
        {/* Header - Wrapper */}
        {/* Signup form */}
        <form  onSubmit={handleSubmit} className="mt-10 flex flex-col justify-start items-start gap-8 w-full">
          {/* Login info */}
          <div className="flex flex-col justify-between items-center gap-6 w-full">
            {/* Password */}
            <TextField
              id="new-password"
              label="New password"
              type="password"
              name="new-password"
              size="small"
              required
              fullWidth
              onChange={(e) => setPasswords((prev) => {
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
            {/* Password - Wrapper*/}
            {/*Conform Password */}
            <TextField
              id="conform-new-password"
              label="Conform-New-Password"
              type="password"
              name="conform-new-password"
              size="small"
              required
              fullWidth
              onChange={(e) => setPasswords((prev) => {
                return {...prev,conformPassword: e.target.value}
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            {/*Conform Password - Wrapper*/}
          </div>
          {/* Login info - Wrapper */}

          {/* Submit Button */}
          <div className="mx-auto">
            <Button type="submit" fullWidth variant="contained">
              Reset
            </Button>
          </div>
        </form>
        {/* Signup form - Wrapper */}
      </div>
      {/* Left Side -- Wrapper */}

      {/* Right Side -- Images & Info div  */}
      <Layout img={reset} info={'reset'}/>
      {/* Right Side -- Wrapper */}
    </div>
  );
};

export default ResetPassword;
