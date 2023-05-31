import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/home/Home";

const Signup = lazy(() => import("../features/authentication/Signup"));
const Login = lazy(() => import("../features/authentication/Login"));
const VerifyEmail = lazy(() =>
  import("../features/authentication/VerifyEmail")
);
const ForgotPassword = lazy(() =>
  import("../features/authentication/ForgotPassword")
);
const ResetPassword = lazy(() =>
  import("../features/authentication/ResetPassword")
);

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route
          path="/signup"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/verify-email/:token"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <VerifyEmail />
            </Suspense>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ForgotPassword />
            </Suspense>
          }
        />
        <Route
          path="/reset-password"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ResetPassword />
            </Suspense>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default IndexRoutes;
