import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <Container  className='xl' >
    <div className="navbar flex flex-row justify-between items-center bg-[#1B1B1B] px-4">
      {/* Right Side */}
      {/* logo */}
      <div>
        <Link to={"/"} className="font-bold list-none no-underline">
          <h1 className="text-white text-2xl">Ardev</h1>
        </Link>
      </div>
      {/* Logo */}
      {/* Right SIde */}

      {/* Left Side */}
      {/* Nav Options */}
      <div className="flex flex-row justify-center items-center gap-10 px-8 py-4">
        {/* list */}
        <div className="flex flex-row justify-center items-center gap-6">
          {/* Note:To Change- Make an option list component and map over data of option list */}
          <Link to={"/userId"} className="font-bold list-none no-underline">
            <span className="text-white text-lg hover:text-blue-300 cursor-pointer">
              Dashboard
            </span>
          </Link>
          <Link to={"/product"} className="font-bold list-none no-underline">
            <span className="text-white text-lg hover:text-blue-300 cursor-pointer">
              Product
            </span>
          </Link>
          <Link to={"/company"} className="font-bold list-none no-underline">
            <span className="text-white text-lg hover:text-blue-300 cursor-pointer">
              Company
            </span>
          </Link>
          <Link to={"/contact"} className="font-bold list-none no-underline">
            <span className="text-white text-lg hover:text-blue-300 cursor-pointer">
              Contact
            </span>
          </Link>
        </div>
        {/* login/signup */}
        <Link to={'/login'} className='no-underline'>
          <Button
            variant="outlined"
            className="rounded-xl text-white border-white py-0"
          >
            {" "}
            Signup
          </Button>
        </Link>
      </div>
      {/* Nav Options */}
    </div>
    // </Container>
  );
};

export default Navbar;
