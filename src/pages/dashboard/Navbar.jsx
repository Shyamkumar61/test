import TcsLogo from "./tcslogo.jpg";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../features/authentication/authSlice";
import { useSnackbar } from "notistack";
import { useLogoutUserMutation } from "../../modules/hr/features/newEmployee/api/newEmployeeApi";

const Navbar = () => {
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  const { enqueueSnackbar } = useSnackbar();
  const [logoutUser] = useLogoutUserMutation();
  const [setWord, setSetWord] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSetWord = async () => {
    if (setWord === "Logout") {
      dispatch(logout());
      const result = await logoutUser(refreshToken);
      setSetWord("SignUp");
      enqueueSnackbar("Logout Succesfully", { variant: "success" });
    }
  };
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setSetWord("SignUp");
      navigate("/login");
    } else {
      setSetWord("Logout");
    }
  }, [accessToken]);
  return (
    <div className="bg-white shadow-lg">
      <div className="flex items-center justify-between px-4 md:px-8 py-1">
        {/* Login Button - Left */}

        {/* Company Name - Center */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <NavLink
            to="/"
            className="text-3xl font-semibold text-gray-600 no-underline hover:text-blue-500 cursor-pointer mx-4"
          >
            Ardev
          </NavLink>
        </div>

        {/* Navigation Links - Middle */}
        <div className="flex-grow hidden md:flex justify-center">
          <NavLink
            to="/employees"
            className="text-xl font-semibold text-gray-600 no-underline hover:text-blue-500 cursor-pointer mx-4"
            activeClassName="text-2xl font-bold text-[#3178F6] no-underline cursor-pointer"
          >
            Employee
          </NavLink>
          <NavLink
            to="/invoice"
            className="text-xl font-semibold text-gray-600 no-underline hover:text-blue-500 cursor-pointer mx-4"
            activeClassName="text-2xl font-bold text-[#3178F6] no-underline cursor-pointer"
          >
            Invoice
          </NavLink>
          <NavLink
            to="/settings"
            className="text-xl font-semibold text-gray-600 no-underline hover:text-blue-500 cursor-pointer mx-4"
            activeClassName="text-2xl font-bold text-[#3178F6] no-underline cursor-pointer"
          >
            Settings
          </NavLink>
        </div>

        {/* User Info - Right */}
        <div className="flex items-center pr-4">
          <div>
            {/* toogle this button base on authentication status */}
            <div className="pr-4">
              <NavLink
                onClick={handleSetWord}
                to="/login"
                className="text-xl font-semibold text-gray-600 no-underline hover:text-blue-500 cursor-pointer"
              >
                {setWord}
              </NavLink>
            </div>
          </div>
          {/* Profile Picture */}
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-md">
            <img
              className="w-full h-full object-cover bg-slate-100"
              src={TcsLogo}
              alt="Profile Picture"
            />
          </div>
          <div className="ml-2">
            {/* Name */}
            <h1 className="font-bold text-base text-black text-center">TCS</h1>
            {/* Role */}
            <h2 className="font-normal text-base text-slate-900">
              Total Care Security
            </h2>
          </div>
        </div>
      </div>
      <div className="flex-grow sm:hiden md:hidden lg:hidden justify-center">
        <NavLink
          to="/employees"
          className="text-xl font-semibold text-gray-600 no-underline hover:text-blue-500 cursor-pointer mx-4"
          activeClassName="text-2xl font-bold text-[#3178F6] no-underline cursor-pointer"
        >
          Employee
        </NavLink>
        <NavLink
          to="/invoice"
          className="text-xl font-semibold text-gray-600 no-underline hover:text-blue-500 cursor-pointer mx-4"
          activeClassName="text-2xl font-bold text-[#3178F6] no-underline cursor-pointer"
        >
          Invoice
        </NavLink>
        <NavLink
          to="/settings"
          className="text-xl font-semibold text-gray-600 no-underline hover:text-blue-500 cursor-pointer mx-4"
          activeClassName="text-2xl font-bold text-[#3178F6] no-underline cursor-pointer"
        >
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
