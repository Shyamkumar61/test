import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexRoutes from "./IndexRoutes";
import DashboardRoutes from "./DashboardRoutes";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<DashboardRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
