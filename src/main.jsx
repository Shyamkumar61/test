import { StyledEngineProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import {SnackbarProvider} from 'notistack'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <SnackbarProvider maxSnack={2} anchorOrigin={{vertical: "bottom",horizontal: "center",}}
          iconVariant={{success: "✅",error: "✖️",warning: "⚠️",info: "ℹ️",}}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SnackbarProvider>
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
);
