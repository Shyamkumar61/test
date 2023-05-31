import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DyanamicFormInput } from "../../../../components/form/DyanamicFormInput";
import {
  createFieldChangeHandler,
  createFieldValidator,
} from "../../../../components/form/HelperFunction";
import { validateAllFields } from "./newEmployeeUtils";
/**
 * Child Component of AddNewEmployee Which is rendering condionally based on activeStep
 * Step3Personal compoenent is step3 of employee creation which store personal information of employee.
 * Refer To Jsdoc of Step1Basic
 */
const Step3Personal = () => {
  const dispatch = useDispatch();

  const step3Data = useSelector((state) => state.newemployee.employee.personal);

  const step3FieldsProps = useSelector(
    (state) => state.formFields.fields.personal
  );
  const nextClick = useSelector((state) => state.validation.nextClick);

  const handleInputBlur = createFieldValidator(step3Data);

  const handleChange = createFieldChangeHandler(step3Data, "setPersonal");

  useEffect(() => {
    validateAllFields(nextClick, step3Data, dispatch);
  }, [nextClick]);

  const Step3FormFields = useMemo(
    () => ({
      number: {
        value: step3Data.number,
        onChange: handleChange,
        onBlur: handleInputBlur,
        ...step3FieldsProps.number,
      },
      nok: {
        value: step3Data.nok,
        onChange: handleChange,
        onBlur: handleInputBlur,
        ...step3FieldsProps.nok,
      },
      dob: {
        value: step3Data.dob,
        onChange: handleChange,
        ...step3FieldsProps.dob,
      },
      bloodGroup: {
        value: step3Data.bloodGroup,
        onChange: handleChange,
        onBlur: handleInputBlur,
        ...step3FieldsProps.bloodGroup,
      },
      adhar: {
        value: step3Data.adhar,
        onChange: handleChange,
        onBlur: handleInputBlur,
        ...step3FieldsProps.adhar,
      },
      pan: {
        value: step3Data.pan,
        onChange: handleChange,
        onBlur: handleInputBlur,
        ...step3FieldsProps.pan,
      },
      address: {
        value: step3Data.address,
        onChange: handleChange,
        onBlur: handleInputBlur,
        ...step3FieldsProps.address,
      },
    }),
    [step3Data, handleChange, handleInputBlur]
  );
  return (
    <div className="flex flex-col flex-nowrap items-start w-full px-6 pt-4 scale-95">
      <div className="grid grid-cols-2 items-start gap-y-4 w-full h-full overflow-y-auto">
        {Object.values(Step3FormFields).map((field) => (
          <DyanamicFormInput key={field.id} {...field} />
        ))}
      </div>
    </div>
  );
};

export default Step3Personal;
