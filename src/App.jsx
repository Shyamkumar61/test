import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "./features/authentication/authSlice";

/**
 * The root component of the application
 */
function App() {
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken]);

  const initializeApp = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (accessToken) {
      dispatch(loginSuccess({ accessToken, refreshToken }));
    }
  };

  initializeApp();
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
