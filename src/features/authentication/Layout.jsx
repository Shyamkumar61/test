import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Info = ({ h1, h2, h3 }) => {
  return(
  <>
    <div className="flex flex-col justify-center items-center gap-1 md:-mt-8">
      <h1 className="text-xl text-gray-600">{h1}</h1>
      <h2 className="text-base text-gray-500 text-center">{h2}</h2>

      {h3 && (
        <div className="flex flex-row justify-center items-center gap-4">
          <LocalPhoneIcon className="text-gray-500 text-lg" />
          <h5 className="text-lg text-gray-600">1800 403 1600</h5>
        </div>
      )}
    </div>
  </>
  );
};
const Layout = ({ img, info }) => {
  return (
    <div className="hidden md:flex flex-col justify-start items-center mx-auto p-8 w-4/5 bg-white rounded-sm border-slate-700 border-4 ">
      <img src={img} alt="signup" className="w-full mx-auto scale-90 -mt-4" />
      {/* Info */}
      {info === "signup" && ( <Info h1={"Having doubts?"} h2={"Reach out to us and get your queries resolved."} h3={true} />  )}
      {info === "login" && ( <Info h1={"Role-Based Access"} h2={"Gain access to a specific dashboard based on your assigned role."} h3={false} />  )}
      {info === "forgot" && ( <Info h1={"Forgot Password"} h2={"Enter your email, receive reset link, click to create new password."} h3={false} />  )}
      {info === "reset" && ( <Info h1={"Reset Password"} h2={"Reset your password and get back to using our service with ease"} h3={false} />  )}
      {/* Info - wrapper */}
    </div>
  );
};

export default Layout;
