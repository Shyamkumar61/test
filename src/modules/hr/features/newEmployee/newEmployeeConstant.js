// This object is use in Option Card component when modal get opens form AddNewEmployee Step1.
export const OPTIONS_CARD_FIELDS = {
  workLocation: {
    id: "workLocation",
    label: "Work Location",
    placeholder: "Enter New Work Location",
  },
  role: {
    id: "role",
    label: "Role",
    placeholder: "Enter New Role",
  },
  subRole: {
    id: "subRole",
    label: "Sub Role",
    placeholder: "Enter New Role",
  },
};
/**
 * Static fileds Object for Steps of AddNewEmployee which will use in creating StepFormFields 
   which then will be pass to DynamicFormInput to append specific type of fields.
 */
export const step1FieldsProps = {
  name: {
    id: "name",
    label: "Full Name",
    placeholder: "Enter Full Name",
    formType: "input",
  },
  emp_id: {
    id: "emp_id",
    label: "Employeee Id",
    placeholder: "Enter Employee Id",
    type: "number",
    formType: "input",
  },
  gender: {
    id: "gender",
    label: "Gender",
    placeholder: "Select Gender",
    formType: "select",
  },
  workEmail: {
    id: "workEmail",
    label: "Email",
    placeholder: "Enter Email",
    type: "email",
    required: false,
  },
  workLocation: {
    id: "workLocation",
    label: "Work Location",
    placeholder: "Select Work Location",
    formType: "select",
    required: false,
  },

  subRole: {
    id: "subRole",
    label: "Designation",
    placeholder: "Select Designation",
    formType: "select",
  },
  uanNumber: {
    id: "uanNumber",
    label: "UAN Number",
    placeholder: "Enter UAN Number",
    required: false,
  },
  esiNumber: {
    id: "esiNumber",
    label: "ESI Number",
    placeholder: "Enter ESI Number",
    required: false,
  },
  joiningDate: {
    id: "joiningDate",
    label: "Joining Date",
    placeholder: "Select Joining Date",
    formType: "date",
    required: false,
  },
};
export const step2FieldsProps = {
  structureType: {
    id: "structureType",
    label: "Salary Structure",
    placeholder: "Select Employment Type",
    type: "select",
    formType: "select",
    options: ["technopark"],
    required: true,
  },
  basic: {
    id: "basic",
    label: "Basic",
    placeholder: "Enter Basic Amount",
    type: "number",
    formType: "input",
  },
  da: {
    id: "da",
    label: "DA",
    placeholder: "Enter DA Amount",
    type: "number",
    formType: "input",
  },
  washing: {
    id: "washing",
    label: "Washing",
    placeholder: "Enter Washing Allowance Amount",
    type: "number",
    formType: "input",
  },
  other: {
    id: "other",
    label: "Other",
    placeholder: "Enter Other Allowance Amount",
    type: "number",
    formType: "input",
  },
  nfh: {
    id: "nfh",
    label: "NFH",
    placeholder: "Enter NFH Amount",
    type: "number",
    formType: "input",
  },
  cl: {
    id: "cl",
    label: "CL",
    placeholder: "Enter Cl Amount",
    type: "number",
    formType: "input",
  },
  el: {
    id: "el",
    label: "EL",
    placeholder: "Enter El Amount",
    type: "number",
    formType: "input",
  },
  nightDuty: {
    id: "nightDuty",
    label: "Night Duty",
    placeholder: "Enter Night Duty",
    type: "number",
    formType: "input",
  },
  epfAmount: {
    id: "epfAmount",
    label: "Epf Amount",
    placeholder: "Enter Epf Amount",
    type: "number",
    formType: "input",
  },
  esiAmount: {
    id: "esiAmount",
    label: "Esi Amount",
    placeholder: "Enter ESI Amount",
    type: "number",
    formType: "input",
  },
  professionalTax: {
    id: "professionalTax",
    label: "Professional Tax",
    placeholder: "Enter Professional Tax",
    type: "number",
    formType: "input",
    required: false,
  },
  lwfAmount: {
    id: "lwfAmount",
    label: "LWF Amount",
    placeholder: "Labour Wellfare Fund",
    type: "number",
    formType: "input",
    required: false,
  },
};
export const step3FieldsProps = {
  number: {
    id: "number",
    label: "Contact Number",
    placeholder: "Enter Contact Number",
    type: "number",
    formType: "input",
    required: false,
  },
  nok: {
    id: "nok",
    label: "Nok",
    placeholder: "Enter Nok",
    required: false,
    formType: "input",
  },
  dob: {
    id: "dob",
    label: "Date of Birth",
    placeholder: "Select Date of Birth",
    formType: "date",
  },
  // age: {
  //   id: "age",
  //   label: "Age",
  //   placeholder: "Enter Age",
  //   type: "number",
  //   formType: "input",
  //   required: false,
  // },
  bloodGroup: {
    id: "bloodGroup",
    label: "Blood group",
    placeholder: "Enter Blood Group",
    formType: "input",
    required: false,
  },
  adhar: {
    id: "adhar",
    label: "Aadhaar Number",
    placeholder: "Enter Aadhaar Number",
    type: "number",
    formType: "input",
    required: false,
  },
  pan: {
    id: "pan",
    label: "PAN Number",
    placeholder: "Enter PAN Number",
    formType: "input",
    required: false,
  },
  address: {
    id: "address",
    label: "Address",
    placeholder: "Enter Address",
    formType: "input",
    required: false,
  },
};

export const step4FieldsProps = {
  bankName: {
    id: "bankName",
    label: "Bank Name",
    placeholder: "Enter Bank Name",
    formType: "input",
  },
  accountNumber: {
    id: "accountNumber",
    label: "Account Number",
    placeholder: "Enter Account Number",
    formType: "input",
    type: "number",
  },
  ifscCode: {
    id: "ifscCode",
    label: "IFSC Code",
    placeholder: "Enter IFSC Code",
    formType: "input",
  },
  accountType: {
    id: "accountType",
    label: "Account Type",
    placeholder: "Select Account Type",
    formType: "select",
    options: ["Savings", "Current",],
  },
};
