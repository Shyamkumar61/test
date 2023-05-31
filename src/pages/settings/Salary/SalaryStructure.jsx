import { TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ComponentItemCard = ({ name, value }) => {
  return (
    <div className="grid grid-cols-8 gap-1">
      <h3 className="col-span-2 text-xl capitalize font-medium text-slate-600">
        {name}
      </h3>
      <TextField
        variant="outlined"
        size="small"
        className="col-span-6 w-full justify-self-start h-1/4 self-start  scale-90"
        value={value}
        disabled
      />
    </div>
  );
};
const SalaryStructure = () => {
  const { earning, deduction } = useSelector(
    (state) => state.salarySlip.formulas.technopark
  );

  return (
    <div className=" self-start grid grid-cols-12 gap-4 p-2 content-start justify-items-start  w-full h-[90%] bg-white overflow-auto">
      {/*Heading div  */}
      <div className="col-span-12  justify-self-center">
        <h1 class="text-2xl font-semibold  text-slate-500">
          Technopark Salary Struture
        </h1>
      </div>
      {/*Heading div - wrapper  */}
      {/* Salary Components - section */}
      <div
        style={{ border: "1px solid lightgray" }}
        className=" col-start-2 col-span-10 flex flex-col flex-nowrap gap-4 rounded-md shadow-lg px-6 py-2 w-full scale-95"
      >
        <h1
          style={{ borderBottom: "1px solid lightblue" }}
          class="text-2xl font-medium pb-2 text-slate-700"
        >
          Salary Component
        </h1>
        {/* Salary Componets */}
        <div className="grid grid-cols-4 gap-2">
          {/* Earning - Left*/}
          <div className=" col-span-2 flex flex-col flex-nowrap gap-2">
            <h1 class="text-xl font-semibold  text-slate-700 mb-2">Earning</h1>
            {Object.entries(earning).map(([property, value]) => {
              return <ComponentItemCard name={property} value={value} />;
            })}
          </div>
          {/* Earning -Wrapper */}
          {/* Deduction - Right */}
          <div className=" col-span-2 flex flex-col flex-nowrap gap-2">
            <h1 class="text-xl font-semibold  text-slate-700 mb-2">
              Deduction
            </h1>
            {Object.entries(deduction).map(([property, value]) => {
              return <ComponentItemCard name={property} value={value} />;
            })}
          </div>
          {/* Deduction- Wrapper */}
        </div>
        {/* Salary Componets -Wrapper */}
      </div>
      {/* Salary Components - section - Warpper */}
    </div>
  );
};

export default SalaryStructure;
