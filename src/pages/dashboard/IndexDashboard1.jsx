import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { setNavBarUrl, setSubNavIndex } from "./dashboardSlice";
import Navbar from "./Navbar";
import AllEmployees from "../../modules/hr/payroll/employees/AllEmployees";
import AddNewEmployee from "../../modules/hr/features/newEmployee/AddNewEmployee";

const IndexDashboard1 = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />
      <div className="container mx-auto px-4 mt-8 overflow-y-hidden overflow-x-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default IndexDashboard1;
