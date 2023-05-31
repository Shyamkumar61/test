import React, { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import Overview from "./tabs/Overview";
import Salary from "./tabs/Salary";
import { useDispatch} from "react-redux";
import BackButton from "./components/BackButton";
import TabPanel from "./components/TabPanel";
import { useGetEmployeeDetailQuery } from "../../features/newEmployee/api/newEmployeeApi";
import { useParams } from "react-router-dom";
import {
  setApiDataBasic,
  setApiDataPayment,
  setApiDataPersonal,
  setApiDataSalary,
} from "./clickEmployeesSlice";

/**
 * Employee Profile component that displays a tabbed view for an employee's profile.
 * It includes an overview tab, salary tab, and attendance tab.
 * It uses data from the Redux store to determine the currently selected employee.
 * It also includes a BackButton component to allow returning to the previous view.
 */
const EmployeeProfile = () => {
  // Extracting data from the Redux store
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetEmployeeDetailQuery(id);
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    if (data?.success) {
      setEmployeeData(data.success);
    }
  }, [data]);

  useEffect(() => {
    if (employeeData) {
      const {
        address = "",
        adhar = "",
        bloodGroup = "",
        company = "",
        dob = "",
        emp_bank = "",
        emp_id = "",
        employee_details = "",
        esiNumber = "",
        gender = "",
        joiningDate = "",
        name = "",
        nok = "",
        number = "",
        pan = "",
        subRole = "",
        uanNumber = "",
        workEmail = "",
        workLocation = "",
        workingStatus = "",
      } = employeeData;

      dispatch(
        setApiDataBasic({
          fullName: name,
          employeeId: emp_id,
          gender: gender,
          joiningDate: joiningDate,
          subRole: subRole,
          workEmail: workEmail,
          workLocation: workLocation,
          uanNumber: uanNumber,
          esiNumber: esiNumber,
        })
      );

      dispatch(
        setApiDataPersonal({
          number: number,
          nok: nok,
          dob: dob,
          age: "",
          adhar: adhar,
          pan: pan,
          address: address,
        })
      );

      dispatch(
        setApiDataPayment({
          name: name,
          bankName: emp_bank?.[0]?.bankName || "",
          accountNumber: emp_bank?.[0]?.accountNumber || "",
          ifscCode: emp_bank?.[0]?.ifscCode || "",
          accountType: emp_bank?.[0]?.accountType || "",
        })
      );
      dispatch(
        setApiDataSalary({
          basic: employee_details?.[0]?.basic || "",
          da: employee_details?.[0]?.da || "",
          washing: employee_details?.[0]?.washing || "",
          other: employee_details?.[0]?.other || "",
          nfh: employee_details?.[0]?.nfh || "",
          cl: employee_details?.[0]?.cl || "",
          el: employee_details?.[0]?.el || "",
          nightDuty: employee_details?.[0]?.nightDuty || "",
          epfAmount: employee_details?.[0]?.epfAmount || "",
          esiAmount: employee_details?.[0]?.esiAmount || "",
          proffessioonalTax: employee_details?.[0]?.proffessioonalTax || "",
          lwfAmount: employee_details?.[0]?.lwfAmount || "",
          company_name: employee_details?.[0]?.company_name || "",
          employee: employee_details?.[0]?.employee || "",
          // id: employee_details?.[0]?.id || "",
        })
      );
    }
  }, [employeeData]);

  // Tab value state and handler
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // A function to set accessibility properties for the tab
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  if (isError) {
    return <>Oh no, there was an error</>;
  }

  return (
    <main className="self-center flex flex-col flex-nowrap gap-0 w-full h-screen mx-auto pb-2 bg-white rounded-md shadow-md">
      {isLoading ? (
        <>Loading...</>
      ) : employeeData ? (
        <>
          {/* Employee Profile header */}
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            className="bg-gray-50 flex flex-row flex-nowrap justify-between w-full"
          >
            <div className="flex flex-row flex-nowrap justify-start items-center z-10">
              {/* Back button */}
              <BackButton />
              <h1 className="text-2xl font-normal text-black">
                {employeeData.name}
              </h1>
            </div>

            {/* Tabs - label button to switch tab view */}
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                centered
                aria-label="basic tabs example"
              >
                <Tab
                  className="px-6 py-0 m-0 text-blue font-semibold"
                  label="Overview"
                  {...a11yProps(0)}
                />
                <Tab
                  className="px-6 py-0 m-0 text-blue font-semibold"
                  label="Salary"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
          </Box>

          {/* Employee Profile tabs - individual tab full view section */}
          <div className="w-full h-full overflow-y-auto">
            <TabPanel value={value} index={0}>
              <Overview />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Salary />
            </TabPanel>
          </div>
        </>
      ) : null}
    </main>
  );
};

export default EmployeeProfile;
