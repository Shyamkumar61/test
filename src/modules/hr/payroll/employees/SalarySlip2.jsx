import React from "react";

const EmployeeInfoCard = ({ title, value }) => {
  return (
    <div className="grid grid-cols-2 gap-1 content-center items-center">
      <p className="text-base  font-sans font-semibold text-slate-900">
        {title}
      </p>
      <p className="text-sm font-bold">{value}</p>
    </div>
  );
};
const SalryComponentCard = ({ title, datatype,amount }) => {
  return (
    <>
      <div className=" w-full col-span-1 flex flex-col justify-between flex-nowrap ">
        <div className="">
          <p className="font-bold">{title}</p>
          {Object.entries(datatype).map(([key, value]) => (
            <div key={key} className=" w-full grid grid-cols-4 ">
              <p className="col-span-3">{key}:</p>
              <p className="text-end mr-4">{value}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between items-center mt-2 ">
          <p className="font-bold text-slate-800">Total {title}</p>
          <p className="mr-3 font-semibold text-slate-700">
            {amount}
          </p>
        </div>
      </div>
    </>
  );
};
function SalarySlip2({
  employee,
  attendance,
  month,
  earnings,
  deductions,
  grossSalary,
  totalDeduction,
  payableAmount,
}) {
  return (
    <div
      style={{ border: "1px solid lightgray" }}
      className="max-w-xl mx-auto   bg-white rounded-lg shadow-md overflow-y-auto "
    >
      <div className="px-6 py-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">{employee.companyName}</h1>
        <p>{employee.address}</p>
        <p>{employee.phone}</p>
        <p>{employee.email}</p>
      </div>
      <div className="px-6 py-4">
        {/* Employee Name and month */}
        <div
          style={{ borderBottom: "1px solid lightgray" }}
          className="flex flex-row justify-between gap-2 mb-2"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {employee.name}
          </h3>
          <h3 className="text-lg font-medium mb-4">Salary Slip for {month}</h3>
        </div>

        {/* Employee info  */}
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <EmployeeInfoCard title={"Employee Id"} value={employee.id} />
            <EmployeeInfoCard
              title={"Joining Date"}
              value={employee.joiningDate}
            />
            <EmployeeInfoCard title={"Name"} value={employee.name} />
            <EmployeeInfoCard
              title={"Designation"}
              value={employee.designation}
            />
          </div>
          <div className="">
            {Object.entries(attendance).map(([key, value]) => (
              <EmployeeInfoCard title={key} value={value} />
            ))}
          </div>
        </div>
        {/* Employee info -wrapper */}

        <hr className="my-4" />
        {/* Salary Component */}
        <div className="grid grid-cols-2  justify-self-stretch mb-4">
          {/* Earning */}
          <SalryComponentCard title={"Earnings"} datatype={earnings} amount={grossSalary} />
          {/* Earning - Wrapper */}
          {/* Deduction */}
          <SalryComponentCard title={"Deduction"} datatype={deductions} amount={totalDeduction}/>
        </div>
        {/* Salary Component - Wrapper */}

        <hr className="my-4" />
        <div className="flex justify-between mb-4">
          <div>
            <p className="font-bold">Gross Salary</p>
            <p>{grossSalary}</p>
          </div>
          <div>
            <p className="font-bold">Net Pay</p>
            <p>
              {payableAmount}   
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalarySlip2;
