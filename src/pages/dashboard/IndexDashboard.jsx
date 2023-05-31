import React, { useEffect} from "react";
import { useDispatch} from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { setNavBarUrl, setSubNavIndex } from "./dashboardSlice";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const IndexDashboard = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    const pathname = location.pathname;
    if (pathname.split("/").length <= 5) {
      const lastSegment = pathname.split("/")[2];
      dispatch(setNavBarUrl(lastSegment));
      dispatch(
        setSubNavIndex(
          lastSegment === "technopark"
            ? 1
            : lastSegment === "finance"
            ? 2
            : lastSegment === "crm"
            ? 3
            : 0
        )
      );
    }
  }, [location]);
  return (
    <div className="grid grid-cols-12 grid-rows-6   justify-items-start items-start w-full bg-[#F1F5FF] ">
      {/* Sidebar */}
      <div className="bg-[#1B4868] w-full col-span-1 row-start-1 row-span-full   overflow-x-hidden  rounded-br-[7rem] shadow-xl shadow-orange-100">
        <Sidebar />
      </div>
      {/* Sidebar - Wrapper */}
      {/* Main Navbar */}
      <div className="w-full col-start-2 col-span-11 row-start-1 row-end-2  h-full ">
        <Navbar />
      </div>
      <div className=" w-[98%]  h-full  -mt-12  row-start-2 row-span-full col-start-2 col-span-11  grid grid-cols-1  items-start mx-auto rounded-md ">
        <Outlet />
      </div>
    </div>
  );
};

export default IndexDashboard;
