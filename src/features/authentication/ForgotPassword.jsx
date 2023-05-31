import React, { useEffect, useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";

import InputAdornment from "@mui/material/InputAdornment";
import forgot from "./img/forgot.png";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { Button, TextField } from "@mui/material";
import { UtilityHeader, UtilityLink } from "./Utility";
import { useDispatch } from "react-redux";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // api request - mutation (pending waiting for base ur)
//   const [sendForgotPassMail, { error,data,isSuccess, isLoading }] =
//   useSendForgotPassMailMutation();

  // data
  const [email,setEmail] = useState('');
  
  // Methods
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("reset password btn click")
    // loginUser({...user}) - pending to server data
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
    <div className="flex flex-col md:flex-row flex-nowrap justify-start items-stretch  gap-[4px] md:mx-auto md:w-3/5  mt-8 rounded-md shadow-2xl">
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-start items-start gap-2 mx-auto py-8 px-6 w-4/5 bg-white rounded-sm border-slate-700 border-4 ">
        <UtilityHeader h1={'Forgot Password  '} h2={'Receive password reset link via email.'} to={'login'} to_text={'Return to login'} />
        {/* Signup form */}
        <form  onSubmit={handleSubmit} className="mt-10 flex flex-col justify-start items-start gap-8 w-full">
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
              onChange={(e) => setEmail(email)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                ),
              }}
            />
            {/* Email Id - Wrapper */}
          </div>
          {/* Login info - Wrapper */}

          {/* Submit Button */}
          <div className="mx-auto">
            <Button type="submit" fullWidth variant="contained">
              Send
            </Button>
          </div>
        </form>
        {/* Signup form - Wrapper */}
        <div className="flex justify-end items-end w-full mt-4">
          <UtilityLink to="reset-password" text="Go to reset page" />
        </div>
      </div>
      {/* Left Side -- Wrapper */}

      {/* Right Side -- Images & Info div  */}
      <Layout img={forgot} info={'forgot'}/>
      {/* Right Side -- Wrapper */}
    </div>
  );
};

export default ForgotPassword;
