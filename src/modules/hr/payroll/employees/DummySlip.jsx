import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { evaluateFormula } from "../../../../pages/settings/Salary/HelperSalary";
import SalarySlip2 from "./SalarySlip2";
// import { getDaysInCurrentMonth, getMinWorkDays } from "../../../../utils/utils";

const DummySlip = () => {
  const {
    fullName="",
    employeeId="",
    subRole,
    uanNumber,
    esiNumber,
    joiningDate,
    dob,
    number,
    workEmail,
    companyName,
    address,
    basic,
    da,
    other,
    washing,
    nfh,
    cl,
    el,
    epfAmount,
    esiAmount,
    professionalTax,
    lwfAmount,
    month,
    attendance,
    gross_salary,
    total_deductions,
    payable_amount,
    // esi_percentage,
    nightDuty
  } = useSelector((state) => state.clickEmployee?.salarySlipValues);


  const employee = {
    name: fullName,
    id: employeeId,
    joiningDate: joiningDate,
    designation: subRole,
    // department: "Engineering",
    companyName: companyName,
    address: address,
    phone: number,
    email: workEmail,
  };
  const company = {
    companyName: "Total Care Security",
    address: "Charichira Road,Plamoodu,Platform PO, TVM",
    phone: "+91 9876543210",
    email: "info@totalCareSecurity.com",
  };
  const employee2 = {
    name: fullName,
    basicInfo: {
      "Employee Id": employeeId,
      // prettier-ignore
      "Designation": subRole,
      "UAN No": uanNumber,
      "ESI No": esiNumber,
      "Date of Birth": dob,
    },
    attendance: {
      "Days Work": attendance,
      "Casual Leave": cl,
      "Earned Leave": el,
      "Night Duty": nightDuty,
    },
  };

  const month1 = `${month} 2023`;
  const earnings = {
    "Basic Salary": basic,
    "Dearness Allowance": da,
    "Other Allowances": other,
    // prettier-ignore
    "NFH": nfh,
    "Washing Allowance": washing,
    "Casual Leave Allowance": cl,
    "Earned Leave Allowance": el,
    "Night Duty Allowance": nightDuty,
  };

  const deductions = {
    "Employee Provident Fund": epfAmount,
    "Employee State Insurance": esiAmount,
    "Professional Tax": professionalTax,
    "Labour Welfare fund": lwfAmount,
  };

  return (
    <SalarySlip2
      employee={employee}
      month={month1}
      earnings={earnings}
      deductions={deductions}
      currency="INR"
      attendance={employee2.attendance}
      grossSalary={gross_salary}
      totalDeduction={total_deductions}
      payableAmount={payable_amount}
    />
  );
};

export default DummySlip;
