import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DyanamicFormInput } from "../../../../components/form/DyanamicFormInput";
// prettier-ignore
import {createFieldChangeHandler, createFieldValidator,} from "../../../../components/form/HelperFunction";
import AddOptionsModal from "./components/AddOptionsModal";
import { step1FieldsProps } from "./newEmployeeConstant";
import { validateAllFields } from "./newEmployeeUtils";

/**
 * Child Component of AddNewEmployee Which is rendering condionally based on activeStep
 * StepBaisc compoenent is step1 of employee creation which store basic information of employee.
 * It has BasicModal component to add new Options in select type fields.
     -- openModal is state coming from redux store which controls opening & closing of modal.
 * nextClick is state coming from redux store from AddNewEmployee Component onClick of Next 
   Button its value set true.
      -- nextClick is used to trigger useEffect for validation of all fields inside step1.
 * step1Data is comming from redux store which is saving newEmployee information in newEmployee
   Object which will be send to backend on all step completion.
 * createFieldValidator & createFieldChangeHandler are higher order funtion which is dynamically retuning function 
   for specific field.
 * StepformFields is storing object of objects wil pass to DyanamicFormInput for appending step1fields.
 * DyanamicFormInput is higher order component on basis of formType its decide which type of input field to render
   for example: input then TextFiled , select then select , date then DateField      
 */
const Step1Basic = () => {
  const dispatch = useDispatch();
  const step1Data = useSelector((state) => state.newemployee.employee.basic);
  const nextClick = useSelector((state) => state.validation.nextClick);
  const openModal = useSelector((state) => state.modal.openModal);
  //prettier-ignore
  const { gender, workLocation, department, role, subRole } = useSelector((state) => state.newemployee.selectOptions.basic);

  const handleFieldValidation = createFieldValidator(step1Data);
  const handleChange = createFieldChangeHandler(step1Data, "setBasic");

  useEffect(() => {
    validateAllFields(nextClick, step1Data, dispatch);
  }, [nextClick]);

  const Step1FormFields = useMemo(
    () => ({
      name: {
        value: step1Data.name,
        onChange: handleChange,
        onBlur: handleFieldValidation,
        ...step1FieldsProps.name,
      },
      emp_id: {
        value: step1Data.emp_id,
        onChange: handleChange,
        onBlur: handleFieldValidation,
        ...step1FieldsProps.emp_id,
      },
      gender: {
        value: step1Data.gender,
        onChange: handleChange,
        onBlur: handleFieldValidation,
        options: gender,
        ...step1FieldsProps.gender,
      },
      workEmail: {
        value: step1Data.workEmail,
        onChange: handleChange,
        ...step1FieldsProps.workEmail,
      },
      workLocation: {
        value: step1Data.workLocation,
        onChange: handleChange,
        options: workLocation,
        ...step1FieldsProps.workLocation,
      },
      subRole: {
        value: step1Data.subRole,
        onChange: handleChange,
        options: subRole,
        ...step1FieldsProps.subRole,
      },
      uanNumber: {
        value: step1Data.uanNumber,
        onChange: handleChange,
        ...step1FieldsProps.uanNumber,
      },
      esiNumber: {
        value: step1Data.esiNumber,
        onChange: handleChange,
        ...step1FieldsProps.esiNumber,
      },
      joiningDate: {
        value: step1Data.joiningDate,
        onChange: handleChange,
        ...step1FieldsProps.joiningDate,
      },
    }),
    //prettier-ignore
    [step1Data, handleChange, gender, workLocation, department, role, subRole, step1FieldsProps]
  );

  return (
    <div className="flex flex-col flex-nowrap items-start w-full px-6 pt-4 scale-95">
      {openModal && <AddOptionsModal />}
      <div className="grid grid-cols-2 items-start gap-y-4 w-full h-full overflow-y-auto">
        {Object.values(Step1FormFields).map((field,num) => (
          <DyanamicFormInput key={num} {...field} />
        ))}
      </div>
    </div>
  );
};

export default Step1Basic;