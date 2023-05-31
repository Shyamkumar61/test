import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DyanamicFormFieldEdit } from "../../../../../components/form/DyanamicFormFieldEdit";
import { step2FieldsProps as salaryFieldsProps } from "../../../features/newEmployee/newEmployeeConstant";
import EditFieldButton from "../../../../../components/form/EditFieldButton";
import {
  selectValidationErrorMsg,
  valueValidator,
} from "../../../../../features/formValidation/validationSlice";
import { useSnackbar } from "notistack";
import { createFieldChangeHandler } from "../../../../../components/form/HelperFunction";
import Attendance from "./Attendance";
import Modal from "../../../../../components/modal/PreviewModal";
import { useEditEmpSalaryMutation } from "../../../features/newEmployee/api/newEmployeeApi";
import { addToClickEmployeeSalary } from "../clickEmployeesSlice";

const Salary = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [edit, setEdit] = useState(false);

  // const [addEmpSalary, { data }] = useAddEmpSalaryMutation();
  const [editEmpSalary, { data }] = useEditEmpSalaryMutation();

  const errorMsg = useSelector(selectValidationErrorMsg);
  const selectSalaryClickEmployee = (state) =>
    state.clickEmployee.clickEmployeeInfo.salary;
  const salary = useSelector(selectSalaryClickEmployee);

  const selectClickEmployeesalaryData = (state) =>
    state.clickEmployee.salaryData;
  const salaryData = useSelector(selectClickEmployeesalaryData);
  // Checks if all updated fields are valid after
  const isUpdatedFiledsValid = () => !errorMsg.length;

  // Toggles the edit state of the attendance.
  const handleChange = createFieldChangeHandler(salary, "setClickSalary");
  const handleEditOrCancel = useCallback(() => setEdit((prev) => !prev), []);

  /**
   * Handles save btn for saving updated attendance fileds values.
   * send all update  fields for validation,if valid then saves the information and closes the edit state.
   * If not, displays an error message.
   * @param {Event} e - The update filed submission event for save.
   */
  const handleSave = (e) => {
    e.preventDefault();
    Object.entries(salary[salary.salary.structureType]).forEach(
      ([property, value]) => {
        if (!(value === "")) {
          dispatch(valueValidator({ property, value }));
        }
      }
    );
    isUpdatedFiledsValid()
      ? setEdit(false)
      : enqueueSnackbar(errorMsg[0], { variant: "error" });
    dispatch(addToClickEmployeeSalary());
  };
  const sendSalaryApi = async () => {
    try {
      const result = await editEmpSalary({ ...salaryData });
    } catch (error) {
      enqueueSnackbar(error,{variant: 'error'})

    }
  };
  useEffect(() => {
    if (salaryData != null) {
      sendSalaryApi();
    }
  }, [salaryData]);

  const SalaryFormFields = useMemo(
    () => ({
      salary: {
        structureType: {
          value: salary.salary.structureType,
          onChange: handleChange,
          ...salaryFieldsProps.structureType,
        },
      },
      technopark: {
        basic: {
          value: salary.technopark.basic,
          onChange: handleChange,
          ...salaryFieldsProps.basic,
        },
        da: {
          value: salary.technopark.da,
          onChange: handleChange,
          ...salaryFieldsProps.da,
        },
        washing: {
          value: salary.technopark.washing,
          onChange: handleChange,
          ...salaryFieldsProps.washing,
        },
        other: {
          value: salary.technopark.other,
          onChange: handleChange,
          ...salaryFieldsProps.other,
        },
        nfh: {
          value: salary.technopark.nfh,
          onChange: handleChange,
          ...salaryFieldsProps.nfh,
        },
        cl: {
          value: salary.technopark.cl,
          onChange: handleChange,
          ...salaryFieldsProps.cl,
        },
        el: {
          value: salary.technopark.el,
          onChange: handleChange,
          ...salaryFieldsProps.el,
        },
        nightDuty: {
          value: salary.technopark.nightDuty,
          onChange: handleChange,
          ...salaryFieldsProps.nightDuty,
        },
        epfAmount: {
          value: salary.technopark.epfAmount,
          onChange: handleChange,
          ...salaryFieldsProps.epfAmount,
        },
        esiAmount: {
          value: salary.technopark.esiAmount,
          onChange: handleChange,
          ...salaryFieldsProps.esiAmount,
        },
        professionalTax: {
          value: salary.technopark.professionalTax,
          onChange: handleChange,
          ...salaryFieldsProps.professionalTax,
        },
        lwfAmount: {
          value: salary.technopark.lwfAmount,
          onChange: handleChange,
          ...salaryFieldsProps.lwfAmount,
        },
      },
    }),
    [salary, handleChange]
  );
  return (
    <div className="grid grid-cols-2  h-full  ">
      <Modal />
      <form
        onSubmit={handleSave}
        className="relative  flex flex-col flex-nowrap items-start gap-4 w-full h-[31.25rem] px-6 py-4 scale-95 border border-solid border-slate-300  shadow-md rounded-md"
      >
        <DyanamicFormFieldEdit
          key={"structure"}
          edit={edit}
          css={{
            labelCss: "text-xl font-semibold pb-2 text-black",
            labelValueCss:
              "text-[1.5rem] font-normal text-slate-600 capitalize",
          }}
          {...SalaryFormFields.salary.structureType}
        />
        <hr className="w-full" />
        <div className="grid grid-cols-1 text-xl  items-start gap-4 w-full h-full mb-10 overflow-y-auto  ">
          {salary.salary.structureType &&
            Object.values(SalaryFormFields[salary.salary.structureType]).map(
              (field) => (
                <DyanamicFormFieldEdit
                  key={field.id}
                  css={{
                    // labelCss: "text-xl font-bold  text-slate-500 mr-4",
                    labelCss: "text-lg font-bold text-slate-600",
                    // labelValueCss:
                    //   "text-xl capitalize font-medium text-slate-600",
                    labelValueCss:
                      "text-xl capitalize font-medium text-slate-600 ml-[5rem]",
                  }}
                  edit={edit}
                  {...field}
                />
              )
            )}
        </div>
        <EditFieldButton
          edit={edit}
          handleEditOrCancel={handleEditOrCancel}
          position="right-0 bottom-4"
        />
      </form>
      <div className=" scale-95 -mt-4 w-full h-screen ">
        {/* <div className="overflow-y-auto h-full"> */}
        {/* <DummySlip /> */}
        <Attendance />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Salary;
