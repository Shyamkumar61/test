import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginSuccess,
} from "../../features/authentication/authSlice";
import PayrollOverview from "./component/PayrollOverview";
import EmployeeSummary from "./component/EmployeeSummary";
import TimeAndAttendance from "./component/TimeAndAttendance ";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken]);

  // Initialize or load the application
  const initializeApp = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (accessToken) {
      dispatch(loginSuccess({ accessToken, refreshToken }));
    }
  };

  initializeApp();
  return (
    <div className="justify-self-start h-screen overflow-x-auto">
      {accessToken && (
        <>
          <h2 className="text-2xl font-bold mb-4">Welcome</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* Add your dashboard components here */}
            <div className="bg-white p-4 shadow rounded-lg">
              <PayrollOverview />
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <EmployeeSummary />
            </div>
            <div className="bg-white p-4 shadow rounded-lg overflow-auto">
              <TimeAndAttendance />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardHome;
