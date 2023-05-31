import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { valueValidator } from "../../features/formValidation/validationSlice";
import {
  setBasic,
  setPayment,
  setPersonal,
  setSalary,
} from "../../modules/hr/features/newEmployee/newEmployeeSlice";
import {
  setClickBasic,
  setClickPayment,
  setClickPersonal,
  setClickSalary,
} from "../../modules/hr/payroll/employees/clickEmployeesSlice";
let currentId = "";
export const createFieldValidator = (stepData) => {
  const dispatch = useDispatch();
  const handleChange = useCallback((e) => {
    if (currentId) {
      dispatch(
        valueValidator({ property: currentId, value: stepData[currentId] })
      );
    }
  });
  return handleChange;
};
export const createFieldChangeHandler = (stepData, setAction) => {
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      const { id, value } = e.target;
      switch (setAction) {
        case "setBasic":
          dispatch(setBasic({ property: id, value: value }));
          break;
        case "setSalary":
          dispatch(setSalary({ property: id, value: value }));
          break;
        case "setPersonal":
          dispatch(setPersonal({ property: id, value: value }));
          break;
        case "setPayment":
          dispatch(setPayment({ property: id, value: value }));
          break;
        case "setClickBasic":
          dispatch(setClickBasic({ property: id, value: value }));
          break;
        case "setClickSalary":
          dispatch(setClickSalary({ property: id, value: value }));
          break;
        case "setClickPersonal":
          dispatch(setClickPersonal({ property: id, value: value }));
          break;
        case "setClickPayment":
          dispatch(setClickPayment({ property: id, value: value }));
          break;
        default:
          break;
      }
      currentId = id;
    },
    [stepData, setAction, dispatch]
  );

  return handleChange;
};
