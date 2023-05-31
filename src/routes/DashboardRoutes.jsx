import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardHome from "../pages/dashboard/DashboardHome";
import IndexRoutes from "./IndexRoutes";
import IndexDashboard1 from "../pages/dashboard/IndexDashboard1";
import AllEmployees from "../modules/hr/payroll/employees/AllEmployees";
import AddNewEmployee from "../modules/hr/features/newEmployee/AddNewEmployee";
import EmployeeProfile from "../modules/hr/payroll/employees/EmployeeProfile";
import TechnoParkInvoice from "../modules/hr/invoice/TechnoParkInvoice";
import SalaryStructure from "../pages/settings/Salary/SalaryStructure";
import Settings from "../pages/settings/Settings";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<IndexDashboard1 />}>
        <Route path="/*" element={<IndexRoutes />} />
        <Route index element={<DashboardHome />} /> 
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

export default DashboardRoutes;
