import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeId: null,
  salaryDataUpdated: false,
  formulas: {
    technopark: {
      //prettier-ignore
      earning : {
            formullaBasic:"if(daysWork < 20, ((basic / (minWorkDays + 2)) * daysWork), if(daysWork < minWorkDays, (basic / minWorkDays)*daysWork, basic))",
            formullaDa:"if(daysWork < 20, ((da / (minWorkDays + 2)) * daysWork), if(daysWork < minWorkDays, (da / minWorkDays)*daysWork, da))",
            formullaOther:"if(daysWork < 20, ((other / (minWorkDays + 2)) * daysWork), if(daysWork < minWorkDays, (other / minWorkDays)*daysWork, other))",
            formullaWashing:"if(daysWork < 20, ((washing / (minWorkDays + 2)) * daysWork), if(daysWork < minWorkDays, (washing / minWorkDays)*daysWork, washing))",
            formullaNfh: "if(daysWork >= 20, (basic + da + other + washing)/31*13/13, if(daysWork < 20, 0))",
            formullaCl: "if(daysWork >= 20, (basic + da + other + washing)/28*cl, if(daysWork < 20, 0))",
            formullaEl: "if(daysWork >= 20, (basic + da + other + washing)/28*el, if(daysWork < 20, 0))",
            formullaNight: "20*night"
        },
      deduction: {
        formullaPf:
          "if((basic + da) >= 15000, 1800, if((basic + da) < 15000, (basic + da)*12/100))",
        formullaEsi:
          "if((basic + da) >= 21000, 1800, if((basic + da) < 21000, (basic + da)*0.75/100))",
        formullaPt: 180,
        formullawf: 50,
      },
      attendance: {
        formullaAtdCl: "if(clb == 1, 0, if(clb == 0, 1))",
        formullaAtdEl: "if(elb == 1, 0, if(elb == 0, 1))",
      },
      other: {
        formullaGratuity: "(basic + da)*4.81/100",
        formullaBonus: "(basic + da)*8.33/100",
      },
    },
  },
};
export const SalarySlipSlice = createSlice({
  name: "salarySlip",
  initialState,
  reducers: {
    setEmployeeId: (state, action) => {
      state.employeeId = action.payload;
    },
    setSalaryDataUpdated: (state, action) => {
      state.salaryDataUpdated = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmployeeId, setSalaryDataUpdated } = SalarySlipSlice.actions;

export default SalarySlipSlice.reducer;
