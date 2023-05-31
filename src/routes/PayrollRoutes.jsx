import React from "react";
import { Route, Routes } from "react-router-dom";
import AllEmployees from "../modules/hr/payroll/employees/AllEmployees";
import EmployeeProfile from "../modules/hr/payroll/employees/EmployeeProfile";
import IndexPayroll from "../Modules/HR/Payroll/IndexPayroll";
import PayrollHome from "../Modules/HR/Payroll/PayrollHome";
import AddNewEmployee from "../modules/hr/features/newEmployee/AddNewEmployee";
import Settings from "../pages/settings/Settings";
import SalaryStructure from "../pages/settings/Salary/SalaryStructure";
import TechnoParkInvoice from "../modules/hr/invoice/TechnoParkInvoice";

const PayrollRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<IndexPayroll />}>
        <Route index element={<PayrollHome />} />
        <Route path="home" element={<PayrollHome />} />
        <Route path="employees">
          <Route index element={<AllEmployees />} />
          <Route path="add" element={<AddNewEmployee />} />
          <Route path=":id" element={<EmployeeProfile />} />
        </Route>
        <Route path="invoice">
          <Route index element={<TechnoParkInvoice />} />
          <Route path="technopark" element={<TechnoParkInvoice />} />
        </Route>
        <Route path="settings">
          <Route index element={<Settings />} />
          <Route path="salary" element={<SalaryStructure />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default PayrollRoutes;
