import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { createFieldChangeHandler } from "../../../../components/form/HelperFunction";
import { step2FieldsProps } from "./newEmployeeConstant";
import { DyanamicFormInput } from "../../../../components/form/DyanamicFormInput";

/**
 *
 * Child Component of AddNewEmployee Which is rendering condionally based on activeStep
 * StepBaisc compoenent is step1 of employee creation which store basic information of employee.
 * Refer To Jsdoc of Step1Basic
 */

const Step2Salary = () => {
  const step2Data = useSelector((state) => state.newemployee.employee.salary);
  const handleChange = createFieldChangeHandler(step2Data, "setSalary");
  const Step2FormFields = useMemo(
    () => ({
      salary: {
        structureType: {
          value: step2Data.salary.structureType,
          onChange: handleChange,
          ...step2FieldsProps.structureType,
        },
      },
      technopark: {
        basic: {
          value: step2Data.technopark.basic,
          onChange: handleChange,
          ...step2FieldsProps.basic,
        },
        da: {
          value: step2Data.technopark.da,
          onChange: handleChange,
          ...step2FieldsProps.da,
        },
        washing: {
          value: step2Data.technopark.washing,
          onChange: handleChange,
          ...step2FieldsProps.washing,
        },
        other: {
          value: step2Data.technopark.other,
          onChange: handleChange,
          ...step2FieldsProps.other,
        },
        nfh: {
          value: step2Data.technopark.nfh,
          onChange: handleChange,
          ...step2FieldsProps.nfh,
        },
        cl: {
          value: step2Data.technopark.cl,
          onChange: handleChange,
          ...step2FieldsProps.cl,
        },
        el: {
          value: step2Data.technopark.el,
          onChange: handleChange,
          ...step2FieldsProps.el,
        },
        nightDuty: {
          value: step2Data.technopark.nightDuty,
          onChange: handleChange,
          ...step2FieldsProps.nightDuty,
        },
        epfAmount: {
          value: step2Data.technopark.epfAmount,
          onChange: handleChange,
          ...step2FieldsProps.epfAmount,
        },
        esiAmount: {
          value: step2Data.technopark.esiAmount,
          onChange: handleChange,
          ...step2FieldsProps.esiAmount,
        },
        professionalTax: {
          value: step2Data.technopark.professionalTax,
          onChange: handleChange,
          ...step2FieldsProps.professionalTax,
        },
        lwfAmount: {
          value: step2Data.technopark.lwfAmount,
          onChange: handleChange,
          ...step2FieldsProps.lwfAmount,
        },
      },
    }),
    [step2Data, handleChange]
  );

  return (
    <div className="flex flex-col flex-nowrap items-start w-full px-6 pt-4 scale-95 gap-10 mb-12">
      <DyanamicFormInput
        key={"structure"}
        {...Step2FormFields.salary.structureType}
      />
      <div className="grid grid-cols-3 items-start gap-y-2 w-full h-full overflow-y-auto">
        {step2Data.salary.structureType &&
          Object.values(Step2FormFields[step2Data.salary.structureType]).map(
            (field) => <DyanamicFormInput key={field.id} {...field} />
          )}
      </div>
    </div>
  );
};

export default Step2Salary;
