import { createSlice } from "@reduxjs/toolkit";
import { mergeObjectInfo } from "./utils";
import dayjs from "dayjs";
// Define a custom serializer for the dob property
// const dobSerializer = {
//   serialize: (value) => dayjs(value).format("DD/MM/YYYY"),
//   deserialize: (value) => dayjs(value, "DD/MM/YYYY").toDate(),
// };
let initialState = {
  employee: {
    basic: {
      name: "",
      emp_id: "",
      gender: "",
      joiningDate: "",
      subRole: "",
      workEmail: "",
      workLocation: "",
      uanNumber: "",
      esiNumber: "",
      company: "",
      client: "",
    }, // Stores basic employee information
    salary: {
      salary: {
        structureType: "",
      },
      technopark: {
        basic: "",
        da: "",
        washing: "",
        other: "",
        nfh: "",
        cl: "",
        el: "",
        nightDuty: "",
        epfAmount: "",
        esiAmount: "",
        professionalTax: "",
        lwfAmount: "",
      },
      attendance: {
        technopark: {
          daysWork: "",
          workOff: "",
          clb: "",
          elb: "",
          cl: "",
          el: "",
          leave: "",
          night: "",
        },
      },
    }, // Stores employee salary details
    personal: {
      number: "",
      nok: "",
      dob: "",
      bloodGroup: "",
      adhar: "",
      pan: "",
      address: "",
    }, // Stores employee personal details
    payment: {
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      accountType: "",
    }, // Stores employee payment details
  },
  employeeInfo: {},
  employeeSalary: null,
  selectOptions: {
    // Stores the select input options for each step
    basic: {
      gender: ["male", "female", "other"], // Gender options
      workLocation: [
        // Work location options
        // "➕ New Location",
        "Thiruvananthapuram",
      ],
      subRole: ["SECURITY SUPERVISOR","SECURITY OFFICER", "SECURITY GUARD"], // Subrole options
    },
  },
};
// Create the new employee slice
export const newEmployeeSlice = createSlice({
  name: "newemployee",
  initialState,
  reducers: {
    // Set the basic employee information
    setBasic: (state, action) => {
      const { property, value } = action.payload;
      state.employee.basic[property] = value;
    },
    // Set the employee salary detailsl
    setSalary: (state, action) => {
      const { property, value } = action.payload;
      let category = property;
      if (property === "structureType") {
        category = "salary";
      } else {
        category = "technopark";
      }

      state.employee.salary[category][property] = value;
    },
    // Set the employee personal details
    setPersonal: (state, action) => {
      const { property, value } = action.payload;
      state.employee.personal[property] = value;
    },
    // Set the employee payment details
    setPayment: (state, action) => {
      const { property, value } = action.payload;
      state.employee.payment[property] = value;
    },
    // Add an option to the select input
    addToSelectOptions: (state, action) => {
      const { property, value } = action.payload;
      state.selectOptions.basic[property].push(value);
    },
    addToEmployeeInfo: (state) => {
      // prettier-ignore
      state.employeeInfo= mergeObjectInfo(state.employee,'basic','personal',);
    },
    addToEmployeeInfoBank: (state) => {
      const payment = mergeObjectInfo(state.employee, "payment");
      return {
        ...state,
        employeeInfo: {
          ...state.employeeInfo,
          emp_bank: [payment],
        },
      };
    },
    addToEmployeeSalary: (state) => {
      const salary = mergeObjectInfo(state.employee.salary, "technopark");
      state.employeeSalary = salary;
      state.employeeSalary.employee = state.employeeInfo.emp_id;
      state.employeeSalary.company_name = 1;
    },
    // Remove an option from the select input
    removeFromSelectOptions: (state, action) => {
      const { property, value } = action.payload;
      const index = state.selectOptions.basic[property].indexOf(value);
      if (index !== -1) {
        state.selectOptions.basic[property].splice(index, 1);
      }
    },
  },
});

// Export the action creators for each case reducer function
export const {
  setBasic,
  setSalary,
  setPersonal,
  setPayment,
  addToSelectOptions,
  removeFromSelectOptions,
  addToEmployeeInfo,
  addToEmployeeInfoBank,
  addToEmployeeSalary,
} = newEmployeeSlice.actions;

// Export the new employee reducer
export default newEmployeeSlice.reducer;
