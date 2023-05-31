import { CircularProgress } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UtilityLink } from "./Utility";
import verified from './img/verifiedimg.png'
import fail from './img/fail.jpg'
import Layout from "./Layout";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  //api request - to verify email
  //   const [verifyMail, {  error, isLoading, isError,isSuccess }] =useVerifyUserMailMutation();

  //data
  const redirect = location.search
    ? location.search.split("=")[1]
    : "dashboard";
  const isLoading = false;
  const isError = true;
  const isSuccess = false;

  // UseEffect
  useEffect(() => {
    // for verifying email
    // if(token) {
        // VerifyEmail({token})
    // }
  },[])

  useEffect(() => {
    // handle error

    // Success
  },[])

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        
        <div className="flex flex-col md:flex-row flex-nowrap justify-start items-stretch  gap-[4px] md:mx-auto md:w-3/5 md:mt-24 lg:w-4/5 mt-8 rounded-md shadow-2xl">
        {/* Left Side - Login Form */}
        <div className="flex flex-col justify-start items-start gap-2 mx-auto py-8 px-6 w-4/5 bg-white rounded-sm border-slate-700 border-4 ">
          {/* logo */}
          <h1>Ardev</h1>
          {/* logo - wrapper */}
          
          {/* Tagline */}
          <div className="flex flex-col justify-start items-start gap-1 w-full mt-10">
            <div className="flex flex-row justify-between items-center gap-4 w-full">
              <h2 className="text-xl ">{isSuccess ?  `Email verification successful` : `Email Verification Failed!`}</h2>
            </div>
            <h2 className="text-lg text-slate-700 ">{isSuccess ? `Now you can login & access your dashboard` : `Please Try again`}</h2>
            {isError && <UtilityLink to={'help'} text='Do you need help?' />}
          </div>
          {/* Tagline - Wrapper */}
          
        </div>
        {/* Left Side -- Wrapper */}
  
        {/* Right Side -- Images & Info div  */}

        {isSuccess && <Layout img={verified} info={false} />}
        {isError && <Layout img={fail} info={false}  />}
        {/* Right Side -- Wrapper */}
      </div>
      )}
    </>
  );
};

export default VerifyEmail;
