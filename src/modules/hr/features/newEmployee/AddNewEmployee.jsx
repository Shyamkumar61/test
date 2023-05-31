// import * as React from "react";
import React, { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NewClient from "./img/newClient.png";
import Checklist from "./img/Checklist.png";
import Step1Basic from "./Step1Basic";
import Step2Salary from "./Step2Salary";
import Step3Personal from "./Step3Personal";
import Step4Payment from "./Step4Payment";
import { useDispatch, useSelector } from "react-redux";
import { setNextClick } from "../../../../features/formValidation/validationSlice";
import { useSnackbar } from "notistack";
import ErrorCard from "./components/ErrorCard";
import {
  addToEmployeeInfo,
  addToEmployeeInfoBank,
  addToEmployeeSalary,
} from "./newEmployeeSlice";
import {
  useAddEmpDetailMutation,
  useAddEmpSalaryMutation,
} from "./api/newEmployeeApi";
import { handleErrorResponse } from "./utils";
import { useNavigate } from "react-router-dom";

const StepperHeader = ({ activeStep, stepsTitle }) => {
  const Header = useMemo(() => {
    return (
      <Stepper activeStep={activeStep} className="col-span-6 md:col-span-4">
        {stepsTitle.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    );
  }, [activeStep, stepsTitle]);
  return Header;
};
// Component for when all steps have been completed successfully
const AllStepsCompleted = ({ handleReset }) => {
  return (
    <div className="col-span-4">
      {/* Content After All Steps */}
      <Typography sx={{ mt: 2, mb: 1 }}>
        All steps completed - New Employee Created Successfully
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mt: 4 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleReset}>Reset</Button>
      </Box>
    </div>
  );
};
// Component for the rendering conditonally active step content
const ActiveStepComponent = ({ activeStep }) => {
  return (
    <>
      {activeStep === 0 ? (
        <Step1Basic />
      ) : activeStep === 1 ? (
        <Step3Personal />
      ) : activeStep === 2 ? (
        <Step4Payment />
      ) : (
        <Step2Salary />
      )}
    </>
  );
};
const NavigationButtons = ({ activeStep, handleBack }) => {
  const NavigateBtn = useMemo(() => {
    return (
      <div className="flex flex-row ">
        {/* prettier-ignore */}
        <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>Back</Button>
        <Box sx={{ flex: "1 1 auto" }} />
        {/* prettier-ignore */}
        <Button type="sumbmit">{activeStep === stepsTitle.length - 1 ? "Finish" : "Next"}</Button>
      </div>
    );
  }, [activeStep, handleBack]);
  return NavigateBtn;
};

const RightSideContent = ({
  errorMsg,
  showErrors,
  activeStep,
  Checklist,
  NewClient,
  handleErrors,
}) => {
  return (
    // <div className="w-full col-span-2 flex flex-col justify-start items-center">
    <div className="col-span-6 sm:col-span-2">
      {[...errorMsg].length > 0 && (
        <Button className=" text-red-300" onClick={handleErrors}>
          {showErrors ? "Hide Errors" : "Show Errors"}
        </Button>
      )}
      {showErrors && [...errorMsg].length > 0 ? (
        <ErrorCard errors={errorMsg} />
      ) : (
        <img
          src={activeStep === 0 ? Checklist : NewClient}
          alt=""
          className="w-full mx-auto scale-75"
        />
      )}
    </div>
  );
};
const stepsTitle = ["Basic", "Personal", "Payment", "Salary"];
/**
 * Component for adding a new employee with a multi-step form and validation.
 * NewEmployee is a component that renders a multi-step form with a stepper and validation for each step.
 * It utilizes the useSnackbar, useDispatch, and useSelector hooks from the react-redux and notistack libraries.
 * The component has state variables to keep track of the active step, error messages, and whether to display error messages.
 * It also has functions to handle moving to the next and previous steps and resetting the form.
 * The component renders a stepper header, the current active step component, and navigation buttons for each step.
 * It also renders an error card and an image on the right side of the form.
 */

const AddNewEmployee = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const errorMsg = useSelector((state) => state.validation.errorMsg);
  const navigate = useNavigate();
  const { employeeInfo, employeeSalary } = useSelector(
    (state) => state.newemployee
  );
  const { accessToken } = useSelector((state) => state.auth);
  const { nextClick } = useSelector((state) => state.validation);
  const [dataEmpInfoSuccess, setDataEmpInfoSuccess] = useState(null);

  const [showErrors, setShowErrors] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [addEmpDetail, { data, error, isLoading, isSuccess, isError }] =
    useAddEmpDetailMutation();
  const [addEmpSalary] = useAddEmpSalaryMutation();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/login");
    }
  }, []);
  const isStepValid = () => !([...errorMsg].length > 0);
  const handleNext = async (e) => {
    e.preventDefault();
    dispatch(setNextClick(true));
    if (isStepValid()) {
      if (activeStep < 2) {
        dispatch(addToEmployeeInfo());
      }
      if (activeStep === 2) {
        dispatch(addToEmployeeInfoBank());
        try {
          if (employeeInfo) {
            const result = await addEmpDetail(employeeInfo);
            result?.data && setDataEmpInfoSuccess(result?.data);
            const errorMsg = handleErrorResponse(result?.error?.data);
            if (
              errorMsg[0] &&
              dataEmpInfoSuccess?.success?.emp_id === employeeInfo?.emp_id
            ) {
              setActiveStep((prevActiveStep) => prevActiveStep);
              errorMsg.forEach((element) => {
                enqueueSnackbar(element, { variant: "error" });
              });
              return;
            }
          }
        } catch (error) {
          console.log("errorTry", error);
        }
      }
      if (activeStep === 3) {
        dispatch(addToEmployeeSalary());
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      //prettier-ignore
      enqueueSnackbar("Please fill in all required fields correctly.",{variant: "error",});
    }
  };
  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => setActiveStep(0);

  const handleErrors = () => setShowErrors((prev) => !prev);
  const sendSalaryApi = async () => {
    try {
      const result = await addEmpSalary({ ...employeeSalary });
    } catch (error) {
      enqueueSnackbar(error, { variant: "error" });
    }
  };
  useEffect(() => {
    if (nextClick && activeStep === 2) {
      dispatch(addToEmployeeInfoBank());
    }
  }, [activeStep, nextClick]);
  useEffect(() => {
    if (employeeSalary != null) {
      try {
        sendSalaryApi();
      } catch (error) {
        enqueueSnackbar(error, { variant: "error" });
      }
    }
  }, [employeeInfo, employeeSalary]);
  useEffect(() => {
    [...errorMsg].length > 0 ? setShowErrors(true) : setShowErrors(false);
  }, [errorMsg]);

  return (
    <>
      {accessToken && (
        <div className="container mx-auto px-4 md:px-8 bg-white rounded-md shadow-md py-4">
          {/* <div className=""> */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-2 overflow-x-auto max-h-screen">
            {/* Left Side - Stepper Header & Current active Step Component */}
            <StepperHeader activeStep={activeStep} stepsTitle={stepsTitle} />

            <div className="col-span-1 md:col-span-4">
              {activeStep === stepsTitle.length ? (
                // On All Steps Completion Successfully
                <AllStepsCompleted handleReset={handleReset} />
              ) : (
                <form onSubmit={handleNext}>
                  {/* Conditional Render Step Component */}

                  <ActiveStepComponent activeStep={activeStep} />

                  {/* Buttons Back! Next! Finish to navigate in stepper */}
                  <NavigationButtons
                    activeStep={activeStep}
                    handleBack={handleBack}
                  />
                </form>
              )}
            </div>

            {/* Right Side - ErrorCard & Image */}
            <RightSideContent
              errorMsg={errorMsg}
              showErrors={showErrors}
              activeStep={activeStep}
              Checklist={Checklist}
              NewClient={NewClient}
              handleErrors={handleErrors}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewEmployee;
