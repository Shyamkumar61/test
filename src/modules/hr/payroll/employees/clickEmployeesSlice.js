import { createSlice } from "@reduxjs/toolkit";
import { mergeObjectInfo } from "../../features/newEmployee/utils";
const initialState = {
  clickEmployeeId: null, //{ id, name, role } format of store value

  clickEmployeeInfo: {
    basic: {
      fullName: "",
      employeeId: "",
      gender: "",
      joiningDate: "",
      department: "",
      role: "",
      subRole: "",
      workEmail: "",
      workLocation: "",
      uanNumber: "",
      esiNumber: "",
    },
    salary: {
      salary: {
        structureType: "technopark",
      },
      technopark: {
        basic: 0,
        da: 0,
        other: 0,
        washing: 0,
        nfh: 0,
        cl: 0,
        el: 0,
        nightDuty: 0,
        epfAmount: 0,
        esiAmount: 0,
        professionalTax: 0,
        lwfAmount: 0,
      },
      attendance: {
        technopark: {
          month: "April",
          attendance: 0,
          // cl: 0,
          // el: 0,
          night: 0,
        },
      },
    },
    personal: {
      number: "",
      nok: "",
      dob: "",
      age: "",
      adhar: "",
      pan: "",
      address: "",
    },
    payment: {
      name: "",
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      accountType: "",
    },
  },
  salaryData: null,
  attendanceData: null,
  salarySlipValues: null,
};
const clickEmployeeSlice = createSlice({
  name: "clickEmployee",
  initialState,
  reducers: {
    // Set the basic employee information
    setClickBasic: (state, action) => {
      const { property, value } = action.payload;
      state.clickEmployeeInfo.basic[property] = value;
    },
    // Set the employee salary detailsl
    setClickSalary: (state, action) => {
      const { property, value } = action.payload;
      let category = property;
      if (property === "structureType") {
        category = "salary";
        state.clickEmployeeInfo.salary[category][property] = value;
        return;
      } else {
        category = "technopark";
      }
      //prettier-ignore
      if (property === "attendance" || property === "cl" || property === "el"|| property === "night") {
        category = "technopark";
        state.clickEmployeeInfo.salary.attendance.technopark[property] = Number(value);
        return;
      }
      if (property === "month") {
        category = "technopark";
        state.clickEmployeeInfo.salary.attendance.technopark[property] = value;
        return;
      }

      state.clickEmployeeInfo.salary[category][property] = Number(value);
    },
    // Set the employee personal details
    setClickPersonal: (state, action) => {
      const { property, value } = action.payload;
      state.clickEmployeeInfo.personal[property] = value;
    },
    // Set the employee payment details
    setClickPayment: (state, action) => {
      const { property, value } = action.payload;
      state.clickEmployeeInfo.payment[property] = value;
    },
    setClickEmployeeId: (state, action) => {
      state.clickEmployeeId = action.payload;
    },
    addToClickEmployeeSalary: (state) => {
      const salary = mergeObjectInfo(
        state.clickEmployeeInfo.salary,
        "technopark"
      );
      state.salaryData = salary;
      state.salaryData.employee = state.clickEmployeeInfo.basic.employeeId;
      state.salaryData.company_name = 1;
    },
    addToClickEmployeeAttendance: (state) => {
      const attendance = mergeObjectInfo(
        state.clickEmployeeInfo.salary.attendance,
        "technopark"
      );
      state.attendanceData = attendance;
      state.attendanceData.emp_id = state.clickEmployeeInfo.basic.employeeId;
    },
    setApiDataBasic: (state, action) => {
      state.clickEmployeeInfo.basic = action.payload;
    },
    setApiDataPersonal: (state, action) => {
      state.clickEmployeeInfo.personal = action.payload;
    },
    setApiDataPayment: (state, action) => {
      state.clickEmployeeInfo.payment = action.payload;
    },
    setApiDataSalary: (state, action) => {
      state.clickEmployeeInfo.salary.technopark = action.payload;
    },
    setApiDataSalarySlipValues: (state, action) => {
      state.salarySlipValues = action.payload;
    },
  },
});

export const {
  setClickEmployeeId,
  setClickBasic,
  setClickPayment,
  setClickPersonal,
  setClickSalary,
  addToClickEmployeeSalary,
  addToClickEmployeeAttendance,
  setApiDataBasic,
  setApiDataPayment,
  setApiDataPersonal,
  setApiDataSalary,
  setApiDataSalarySlipValues,
} = clickEmployeeSlice.actions;

export default clickEmployeeSlice.reducer;
