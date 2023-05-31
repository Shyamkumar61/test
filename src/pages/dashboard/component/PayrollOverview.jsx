import React from "react";

const PayrollOverview = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Payroll Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-2">Total Employees</h4>
          <p className="text-3xl font-bold">150</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-2">Total Payroll</h4>
          <p className="text-2xl font-bold">500,000</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg"></div>
      </div>
    </div>
  );
};
export default PayrollOverview;
