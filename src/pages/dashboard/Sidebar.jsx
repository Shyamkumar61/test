import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setSubNavIndex } from "./dashboardSlice";
import SubNavbar from "./SubNavbar";
const normalLink =
  "text-3xl font-bold text-white no-underline  hover:text-blue-400 cursor-pointer justify-self-center ";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="grid grid-rows-12 items-start  px-2 py-1   h-screen md:overflow-hidden overflow-hidden">
        <div className="mt-1 ml-2 row-span-1">
          <NavLink
            to={`/userId`}
            key={"/userId"}
            className={normalLink}
            onClick={(e) => dispatch(setSubNavIndex(0))}
          >
            Ardev
          </NavLink>
        </div>

        <div className=" row-span-6 justify-self-start mt-6">
          <SubNavbar />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
