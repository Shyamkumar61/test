import { createSlice } from "@reduxjs/toolkit";
import { validationRules } from "./validationRules";

const initialState = {
  validate: false,
  nextClick: false,
  errorMsg: [],
};
const validationErrors = {
  fullName: [],
  // add error message arrays for other properties here
};
const validateField = (state, property, value) => {
  if (!validationRules.hasOwnProperty(property)) {
    return;
  }
  validationErrors[property] = [];
  state.errorMsg = state.errorMsg.filter((message) => {
    return !message.includes(`${property}:`);
  });

  validationRules[property].forEach((rule) => {
    if (!rule.rule(value)) {
      const index = state.errorMsg.indexOf(`${property}: ${rule.message}`);
      if (index === -1) {
        state.errorMsg.push(`${property}: ${rule.message}`);
      }
    } else {
      const index = state.errorMsg.indexOf(`${property}: ${rule.message}`);
      if (index !== -1) {
        state.errorMsg.splice(index, 1);
      }
    }
  });
  state.nextClick = false;
};

const employeeIdValidator = (value) => {
  return value.length === 4 && !isNaN(value);
};
const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    valueValidator: (state, action) => {
      const index = state.errorMsg.indexOf(
        "Please fill in all required fields correctly."
      );
      if (index !== -1) {
        state.errorMsg.splice(index, 1);
      }
      const { property, value } = action.payload;
      validateField(state, property, value);
    },
    setValidate: (state, action) => {
      state.validate = action.payload;
    },
    setNextClick: (state, action) => {
      state.nextClick = action.payload;
    },
  },
});

export const { valueValidator, setValidate, setNextClick } =
  validationSlice.actions;

export const selectValidationErrorMsg = (state) => state.validation.errorMsg;
export default validationSlice.reducer;
