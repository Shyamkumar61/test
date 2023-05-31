import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useSelector } from "react-redux";

const Settings = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/login");
      
    }
  }, [accessToken]);
  return (
    <div className="flex flex-row justify-center items-center bg-white h-full md:h-[80vh] lg:h-[90vh]">
      <Link to={"salary"} className="no-underline">
        <Button
          variant="contained"
          className="text-lg rounded-lg font-semibold capitalize bg-white text-black "
          startIcon={<ListAltIcon className="text-[2.rem] text-green-600" />}
        >
          Salary Structure
        </Button>
      </Link>
    </div>
  );
};

export default Settings;
