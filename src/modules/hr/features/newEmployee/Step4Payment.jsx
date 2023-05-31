import React, { useEffect, useMemo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { DyanamicFormInput } from "../../../../components/form/DyanamicFormInput";
import { createFieldChangeHandler, createFieldValidator } from "../../../../components/form/HelperFunction";
import { validateAllFields } from "./newEmployeeUtils";

/**
 * Child Component of AddNewEmployee Which is rendering condionally based on activeStep
 * Step4Payment compoenent is step4 of employee creation which store paymemt information of employee.
 * Refer To Jsdoc of Step1Basic
 */

const Step4Payment = () => {
  const dispatch = useDispatch();

  const step4Data = useSelector((state) => state.newemployee.employee.payment);
  
  const step4FieldsProps = useSelector((state) => state.formFields.fields.payment);
  const nextClick = useSelector((state) => state.validation.nextClick);

  const handleInputBlur = createFieldValidator(step4Data);
  const handleChange = createFieldChangeHandler(step4Data, "setPayment");

  useEffect(() => {
    validateAllFields(nextClick,step4Data,dispatch)
  }, [nextClick]);

  const Step2FormFields = useMemo(
    () => ({
      bankName: {
        value: step4Data.bankName,
        onChange: handleChange,
        onBlur: handleInputBlur,
        ...step4FieldsProps.bankName
      },
      accountNumber: {
        value: step4Data.accountNumber,
        onChange: handleChange,
        onBlur: handleInputBlur,
        ...step4FieldsProps.accountNumber,
      },
      ifscCode: {
        value: step4Data.ifscCode,
        onChange: handleChange,
        onBlur: handleInputBlur,
        ...step4FieldsProps.ifscCode
      },
      accountType: {
        value: step4Data.accountType,
        onChange: handleChange,
        ...step4FieldsProps.accountType,
      },
    }),
    [step4Data, handleChange, handleInputBlur]
  );

  return (
    <div className="flex flex-col flex-nowrap items-start w-full px-6 pt-4 scale-95">
      <div className="grid grid-cols-2 items-start gap-y-4 w-full h-full overflow-y-auto">
        {Object.values(Step2FormFields).map((field) => (
          <DyanamicFormInput key={field.id} {...field} />
        ))}
      </div>
    </div>
  );
};

export default Step4Payment;
