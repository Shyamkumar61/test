import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  supervisior: {
    hsn: "998585",
    gstrate: "",
    quantity: 60,
    rate: 12533,
  },
  securityGuard: {
    hsn: "",
    gstrate: "",
    quantity: 452,
    rate: 2000,
  },
  lessSupervisior: {
    hsn: "",
    gstrate: "",
    quantity: 10,
    rate: 1000,
  },
  lessSecurityGuard: {
    hsn: "998585",
    gstrate: "",
    quantity: 40,
    rate: 500,
  },
};

export const TechnoparkInvoiceSlice = createSlice({
  name: "technoparkInvoice",
  initialState,
  reducers: {
    setSupervisior: (state, action) => {
      const { property, value } = action.payload;
      state.supervisior[property] = value;
    },
    setSecurityGuard: (state,action) => {
      const { property, value } = action.payload;
      state.securityGuard[property] = value;
    },
    setLessSupervisior: (state, action) => {
      const { property, value } = action.payload;
      state.lessSupervisior[property] = value;
    },
    setLessSecurityGuard: (state, action) => {
      const { property, value } = action.payload;
      state.lessSecurityGuard[property] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSupervisior,
  setSecurityGuard,
  setLessSupervisior,
  setLessSecurityGuard,
} = TechnoparkInvoiceSlice.actions;

export default TechnoparkInvoiceSlice.reducer;
