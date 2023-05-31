import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import dashboardSlice from "./pages/dashboard/dashboardSlice";
import globalSlice from "./services/Slice/globalSlice";
import modalSlice from "./components/Modal/modalSlice";
import validationSlice from "./features/formValidation/validationSlice";
import clickEmployeesSlice from "./modules/hr/payroll/employees/clickEmployeesSlice";
import formFieldsSlice from "./components/form/formFieldsSlice";
import SalarySlipSlice from "./pages/settings/Salary/SalarySlipSlice";
import newEmployeeSlice from "./modules/hr/features/newEmployee/newEmployeeSlice";
import { authenticationApi } from "./features/authentication/api/authentication";
import previewModalSlice from "./components/modal/previewModalSlice";
import authSlice from "./features/authentication/authSlice";
import { newEmployeeApi } from "./modules/hr/features/newEmployee/api/newEmployeeApi";
import TechnoparkInvoiceSlice from "./modules/hr/invoice/TechnoparkInvoiceSlice";
export const store = configureStore({
  reducer: {
    global: globalSlice,
    dashboard: dashboardSlice,
    newemployee: newEmployeeSlice,
    modal: modalSlice,
    validation: validationSlice,
    clickEmployee: clickEmployeesSlice,
    formFields: formFieldsSlice,
    salarySlip: SalarySlipSlice,
    technoparkInvoice: TechnoparkInvoiceSlice,
    previewModal: previewModalSlice,
    auth: authSlice,
    // Add the generated reducer as a specific top-level slice
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [newEmployeeApi.reducerPath]: newEmployeeApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authenticationApi.middleware, newEmployeeApi.middleware),
});

setupListeners(store.dispatch);
