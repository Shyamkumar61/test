import React from "react";

const EmployeeSummary = () => {
  const employeeData = {
    totalEmployees: 200,
    activeEmployees: 180,
    terminatedEmployees: 10,
    onLeaveEmployees: 10,
    employeeGrowth: "+10%",
    employeeDemographics: [
      { ageGroup: "18-25", count: 30 },
      { ageGroup: "26-35", count: 100 },
      { ageGroup: "36-45", count: 50 },
      { ageGroup: "46+", count: 20 },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-4">Employee Summary</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
        <div className="bg-gradient-to-r from-green-500 to-green-400 text-white rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-2">Active Employees</h4>
          <p className="text-3xl font-bold">{employeeData.activeEmployees}</p>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-red-400 text-white rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-2">Terminated Employees</h4>
          <p className="text-3xl font-bold">
            {employeeData.terminatedEmployees}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSummary;
