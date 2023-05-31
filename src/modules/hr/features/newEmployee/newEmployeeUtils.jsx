  import { valueValidator } from "../../../../features/formValidation/validationSlice";

  /**
   * Reusable Funtion use in aciveStep Commponent of AddNewEmployee.
   * Its validate all fileds in one go of activeStpe component when next button is click.
   * dispatch is use to through each field value to valueValidator to check if its satisfying validation rules
     for specific filed.
   */
  export const validateAllFields = (nextClick, stepData, dispatch) => {
    if (nextClick) {
      Object.entries(stepData).forEach(([property, value]) => {
        if (!(value === "")) {
          dispatch(valueValidator({ property, value }));
        }
      });
    }
  };

