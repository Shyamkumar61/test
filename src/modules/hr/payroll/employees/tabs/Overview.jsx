import React from "react";
import { useSelector } from "react-redux";
import EmployeeInfoCard from "../components/cards/EmployeeInfoCard";
import EmployeeProfileCard from "../components/cards/EmployeeProfileCard";

/**
 * Component that displays the overview of an employee, including basic, personal, and payment information.
 */
const Overview = () => {
  const { basic, personal, payment } = useSelector(
    (state) => state.clickEmployee.clickEmployeeInfo
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-6  row-auto overflow-auto  gap-y-2 gap-x-4 ">
      {/* Employee profile card */}
      <div className=" col-start-3 col-end-5 col-span-2 row-span-2 ">
        <EmployeeProfileCard name={basic.fullName} role={basic.employeeId} id={basic.subRole} />
      </div>

      {/* Payment information card */}
      <div className=" col-start-5 col-span-2 row-start-2  row-span-6 ">
        <EmployeeInfoCard cardType={"payment"} cardData={payment} />
      </div>

      {/* Personal information card */}
      <div className="col-span-2 row-start-2 row-span-6 ">
        <EmployeeInfoCard cardType={"personal"} cardData={personal} />
      </div>

      {/* Basic information card */}
      <div className="col-start-3 col-span-2 row-span-4 mt-2 overflow-auto">
        <EmployeeInfoCard cardType={"basic"} cardData={basic} />
      </div>
    </div>
  );
};

export default Overview;
