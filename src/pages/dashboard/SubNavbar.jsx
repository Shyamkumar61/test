import React from "react";
import { useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import { links } from "./data";
const SubNavbar = () => {
  const navbarUrl = useSelector((state) => state.dashboard.navbarUrl);
  const activeLink =
    'text-lg font-bold text-white no-underline  bg-blue-400 rounded-lg px-1 cursor-pointer"';
  const normalLink =
    "text-base font-bold text-white no-underline hover:text-blue-400 cursor-pointer";
  const index = useSelector((state) => state.dashboard.subNavIndex);
  const { sub_links } = links[index];
  return (
    <div className="flex flex-row overflow-hidden  flex-wrap  justify-start items-center gap-8 px-2  py-1 m-0    border-b-[1px]  w-full">
      {sub_links?.map((item) => {
        const { title } = item;
        const toUrl =
          navbarUrl && navbarUrl != title.toLocaleLowerCase()
            ? `${navbarUrl}/${title.toLocaleLowerCase()}`
            : `${title.toLocaleLowerCase()}`;
        return (
          <div
            key={title}
            className="flex flex-row justify-start overflow-hidden items-center gap-1 bg-transparent cursor-pointer"
          >
            <NavLink
              to={toUrl}
              key={title.toLocaleLowerCase()}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              {title}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default SubNavbar;
