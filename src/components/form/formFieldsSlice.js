import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  fields: {
    basic: {
      fullName: {
        id: "fullName",
        label: "Full Name",
        placeholder: "Enter Full Name",
        formType: "input",
      },
      employeeId: {
        id: "employeeId",
        label: "Employee Id",
        placeholder: "Enter Employee Id",
        type: "number",
        formType: "input",
      },
      gender: {
        id: "gender",
        label: "Gender",
        placeholder: "Select Gender",
        formType: "select",
      },
      workEmail: {
        id: "workEmail",
        label: "Work Email",
        placeholder: "Enter Work Email",
        type: "email",
        required: false,
      },
      workLocation: {
        id: "workLocation",
        label: "Work Location",
        placeholder: "Select Work Location",
        formType: "select",
      },
      department: {
        id: "department",
        label: "Department",
        placeholder: "Select Department",
        formType: "select",
      },
      role: {
        id: "role",
        label: "Role",
        placeholder: "Select Role",
        formType: "select",
      },
      subRole: {
        id: "subRole",
        label: "Sub Role",
        placeholder: "Select Sub Role",
        formType: "select",
      },
      uanNumber: {
        id: "uanNumber",
        label: "UAN Number",
        placeholder: "Enter UAN Number",
        required: false,
      },
      esiNumber: {
        id: "esiNumber",
        label: "ESI Number",
        placeholder: "Enter ESI Number",
        required: false,
      },
      joiningDate: {
        id: "joiningDate",
        label: "Joining Date",
        placeholder: "Select Joining Date",
        formType: "date",
      },
    },
    personal: {
      number: {
        id: "number",
        label: "Contact Number",
        placeholder: "Enter Contact Number",
        type: "number",
        formType: "input",
        required: false,
      },
      nok: {
        id: "nok",
        label: "Nok",
        placeholder: "Enter Nok",
        required: false,
        formType: "input",
      },
      dob: {
        id: "dob",
        label: "Date of Birth",
        placeholder: "Select Date of Birth",
        formType: "date",
      },
      age: {
        id: "age",
        label: "Age",
        placeholder: "Enter Age",
        type: "number",
        formType: "input",
        required: false,
      },
      bloodGroup: {
        id: "bloodGroup",
        label: "Blood group",
        placeholder: "Enter Blood Group",
        formType: "input",
        required: false,
      },
      adhar: {
        id: "adhar",
        label: "Aadhaar Number",
        placeholder: "Enter Aadhaar Number",
        type: "number",
        formType: "input",
        required: false,
      },
      pan: {
        id: "pan",
        label: "PAN Number",
        placeholder: "Enter PAN Number",
        formType: "input",
        required: false,
      },
      address: {
        id: "address",
        label: "Address",
        placeholder: "Enter Address",
        formType: "input",
        required: false,
      },
    },
    salary: {
      structureType: {
        id: "structureType",
        label: "Salary Structure Type",
        placeholder: "Select Employment Type",
        type: "select",
        formType: "select",
        options: ["technopark", "centralGov", "private"],
        required: true,
      },
      basic: {
        id: "basic",
        label: "Basic",
        placeholder: "Enter Basic Amount",
        type: "number",
        formType: "input",
      },
      da: {
        id: "da",
        label: "DA",
        placeholder: "Enter DA Amount",
        type: "number",
        formType: "input",
      },
      washing: {
        id: "washing",
        label: "Washing",
        placeholder: "Enter Washing Allowance Amount",
        type: "number",
        formType: "input",
      },
      other: {
        id: "other",
        label: "Other",
        placeholder: "Enter Other Allowance Amount",
        type: "number",
        formType: "input",
      },
      employeeType: {
        id: "employeeType",
        label: "Employment Type",
        placeholder: "Select Employment Type",
        type: "select",
        formType: "select",
        options: ["Skilled", "Unskilled", "Semiskilled"],
      },
      wagesPerDay: {
        id: "wagesPerDay",
        label: "Wages Per Day",
        placeholder: "Enter Wages Per Day",
        type: "number",
        formType: "input",
      },
      monthlySalary: {
        id: "monthlySalary",
        label: "Monthly Salary",
        placeholder: "Enter Monthly Salary Amount",
        type: "number",
        formType: "input",
      },
    },
    payment: {
      name: {
        id: "name",
        label: "Account Holder Name",
        placeholder: "Enter Account Holder Name",
        formType: "input",
      },
      bankName: {
        id: "bankName",
        label: "Bank Name",
        placeholder: "Enter Bank Name",
        formType: "input",
      },
      accountNumber: {
        id: "accountNumber",
        label: "Account Number",
        placeholder: "Enter Account Number",
        formType: "input",
        type: "number",
      },
      conformAccountNumber: {
        id: "conformAccountNumber",
        label: "Confirm Account Number",
        placeholder: "Re-enter Account Number",
        formType: "input",
        type: "number",
      },
      ifscCode: {
        id: "ifscCode",
        label: "IFSC Code",
        placeholder: "Enter IFSC Code",
        formType: "input",
      },
      accountType: {
        id: "accountType",
        label: "Account Type",
        placeholder: "Select Account Type",
        formType: "select",
        options: ["Savings", "Current"],
      },
    },
    attendance: {
      month: {
        id: "month",
        label: "Month",
        placeholder: "Select Month for demo only",
        formType: "select",
        options: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      attendance: {
        id: "attendance",
        label: "Days Work",
        placeholder: "Enter Days Work",
        formType: "input",
        type: "number",
      },
      cl: {
        id: "cl",
        label: "CL",
        placeholder: "Enter CLB",
        formType: "input",
        type: "number",
      },
      el: {
        id: "el",
        label: "EL",
        placeholder: "Enter ELB",
        formType: "input",
        type: "number",
      },
      night: {
        id: "night",
        label: "Night Duty",
        placeholder: "Enter Night",
        formType: "input",
        type: "number",
      },
    },
  },
};

export const formFieldsSlice = createSlice({
  name: "formFields",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  formFieldsSlice.actions;

export default formFieldsSlice.reducer;
