/**
 * A component that displays a emmloyee profile card
 *
 * @param {Object} props - The component props
 * @param {string} props.name - The name of the user
 * @param {string} props.role - The role of the user
 * @param {string} props.id - The ID of the user
 * @returns {JSX.Element} - The user profile card element
 */
import React from "react";
import User from './user.png'
const EmployeeProfileCard = ({ name, role, id }) => {
  return (
    <div className="flex flex-row gap-0 items-start justify-around relative bg-white w-auto h-auto px-3 py-2 border border-solid border-slate-300  rounded-lg shadow-md   ">
      <div className="flex flex-col justify-start  items-center ">
        <div className="w-24 h-24 rounded-full overflow-hidden ">
          <img
            className="w-full h-full object-cover bg-slate-100"
            src={User}
            alt="Profile Picture"
          />
        </div>
      </div>
      <div className=" place-self-center flex flex-col gap-2">
        <h4 className="text-base    text-gray-600">{name}</h4>
        <div className="flex flex-row flex-nowrap justify-between gap-4">
          <h3 className="text-base font-medium text-gray-500">{role}</h3>
          <h3 className="text-base font-medium text-gray-500">{id}</h3>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfileCard;
