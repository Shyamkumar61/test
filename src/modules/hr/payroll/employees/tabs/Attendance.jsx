import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createFieldChangeHandler,
  createFieldValidator,
} from "../../../../../components/form/HelperFunction";
import { DyanamicFormFieldEdit } from "../../../../../components/form/DyanamicFormFieldEdit";
import { useSnackbar } from "notistack";
import {
  selectValidationErrorMsg,
  valueValidator,
} from "../../../../../features/formValidation/validationSlice";
import EditFieldButton from "../../../../../components/form/EditFieldButton";
import { Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import { openModal } from "../../../../../components/modal/previewModalSlice";
import {
  addToClickEmployeeAttendance,
  setApiDataSalarySlipValues,
} from "../clickEmployeesSlice";
import { useAddEmpAttendanceMutation } from "../../../features/newEmployee/api/newEmployeeApi";

const Attendance = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  // State to keep track of whether the attendance is being toogle for edit or not
  const [edit, setEdit] = useState(false);

  const [addEmpAttendance, { data }] = useAddEmpAttendanceMutation();

  // Extracting data from Redux store
  const selectFormPropFields = (state) => state.formFields.fields.attendance;
  const selectAttendanceData = (state) =>
    state.clickEmployee.clickEmployeeInfo.salary.attendance.technopark;
  const selectAttendanceDataApi = (state) => state.clickEmployee.attendanceData;

  const fields = useSelector(selectFormPropFields);
  const attendanceData = useSelector(selectAttendanceData);
  const attendanceDataApi = useSelector(selectAttendanceDataApi);
  const errorMsg = useSelector(selectValidationErrorMsg);
  const salarySlipValues = useSelector(
    (state) => state.clickEmployee.salarySlipValues
  );

  // Checks if all updated fields are valid after
  const isUpdatedFiledsValid = () => !errorMsg.length;

  // Create event handlers for updated fields.
  //prettier-ignore
  const handleChange = createFieldChangeHandler(attendanceData,"setClickSalary");
  const handleFieldValidation = createFieldValidator(attendanceData);

  // Toggles the edit state of the attendance.
  const handleEditOrCancel = useCallback(() => setEdit((prev) => !prev), []);

  /**
   * Handles save btn for saving updated attendance fileds values.
   * send all update  fields for validation,if valid then saves the information and closes the edit state.
   * If not, displays an error message.
   * @param {Event} e - The update filed submission event for save.
   */
  const handleSave = (e) => {
    e.preventDefault();
    Object.entries(attendanceData).forEach(([property, value]) => {
      if (!(value === "")) {
        dispatch(valueValidator({ property, value }));
      }
    });
    isUpdatedFiledsValid()
      ? setEdit(false)
      : enqueueSnackbar(errorMsg[0], { variant: "error" });
    dispatch(addToClickEmployeeAttendance());
  };

  const AttendanceFormFields = useMemo(
    () => ({
      month: {
        value: attendanceData.month,
        onChange: handleChange,
        onBlur: handleFieldValidation,
        ...fields.month,
      },
      attendance: {
        value: attendanceData.attendance,
        onChange: handleChange,
        onBlur: handleFieldValidation,
        ...fields.attendance,
      },
      night: {
        value: attendanceData.night,
        onChange: handleChange,
        onBlur: handleFieldValidation,
        ...fields.night,
      },
    }),
    [attendanceData, handleChange, handleFieldValidation, fields]
  );
  const sendSalaryApi = async () => {
    try {
      const {
        data: {
          success: {
            employee,
            basic,
            da,
            washing,
            other,
            epfAmount,
            esiAmount,
            company_name,
            professionalTax,
            lwfAmount,
            month,
            nfh,
            cl,
            el,
            nightDuty,
            attendance,
            gross_salary,
            total_deductions,
            payable_amount,
            esi_percentage,
          },
        },
      } = await addEmpAttendance({ ...attendanceDataApi });
      dispatch(
        setApiDataSalarySlipValues({
          fullName: employee?.name,
          employeeId: employee?.emp_id,
          subRole: employee?.subRole,
          uanNumber: employee?.uanNumber,
          esiNumber: employee?.esiNumber,
          joiningDate: employee?.joiningDate,
          dob: employee?.dob,
          number: employee?.number,
          workEmail: employee?.workEmail,
          companyName: company_name?.client_name,
          address: company_name?.client_address,
          // //////
          basic: basic,
          da: da,
          other: other,
          washing: washing,
          nfh: nfh,
          cl: cl,
          el: el,
          nightDuty: nightDuty,
          epfAmount: epfAmount,
          esiAmount: esiAmount,
          professionalTax: professionalTax,
          lwfAmount: lwfAmount,
          month: month,
          attendance: attendance,
          gross_salary: gross_salary,
          total_deductions: total_deductions,
          payable_amount: payable_amount,
          esi_percentage: esi_percentage,
        })
      );
      if (salarySlipValues) {
        setIsSlip(true);
      }
    } catch (error) {
      enqueueSnackbar(error, { variant: "error" });
    }
  };
  useEffect(() => {
    if (salarySlipValues) {
      setIsSlip(true);
    }
  }, [salarySlipValues]);
  useEffect(() => {
    if (attendanceDataApi != null) {
      sendSalaryApi();
    }
  }, [attendanceDataApi]);
  const generateSalarySlip = () => {
    dispatch(openModal());
  };
  const [isSlip, setIsSlip] = useState(false);

  return (
    <form
      onSubmit={handleSave}
      className="flex flex-col flex-nowrap items-start  justify-between   gap-6 w-full h-[32.813rem] px-6 py-4 scale-95 border border-solid border-slate-300  shadow-md rounded-md"
    >
      <div className="flex flex-row items-center justify-between gap-20">
        <h2>Attendance</h2>
        {isSlip && (
          <Button
            onClick={generateSalarySlip}
            variant="outlined"
            className="py-1 px-2 "
          >
            {" "}
            Preview Slip
            <span className="ml-4 mt-1">{<PrintIcon />} </span>
          </Button>
        )}
      </div>
      <hr className="w-full " />
      <div className="relative grid grid-cols-1   items-start h-full p-6 -mt-6 ">
        {Object.values(AttendanceFormFields).map((field) => (
          <DyanamicFormFieldEdit
            key={field.id}
            edit={edit}
            css={{
              labelCss: "text-lg font-bold text-slate-600",
              labelValueCss:
                "text-xl capitalize font-medium text-slate-600 ml-[5rem]",
            }}
            {...field}
          />
        ))}
      </div>
      <EditFieldButton
        edit={edit}
        handleEditOrCancel={handleEditOrCancel}
        position="right-0 bottom-4"
      />
    </form>
  );
};

export default Attendance;
