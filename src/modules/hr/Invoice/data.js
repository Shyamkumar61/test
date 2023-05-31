// export const invoiceStaticData = {
//     companyInfo : ["TC 11/1649, 2nd floor, Charchira Road, Plamoodu","T"]
// }
// TableData.js
export const CustomerDetailData = [
  //   {
  //     title: "Invoice No:",
  //     value: "TCS/03/1962",
  //   },

  {
    title: "Contract Period:",
    value: "01-06-2021 to 31-05-2024",
  },
  {
    title: "LUT No",
    value: "AD3206210009559G",
  },
  {
    title: "From",
    value: "11-6-2021 to 31-05-2024",
  },
  // {
  //   title: "Work Order No:",
  //   value: "EPK/ADMIN/SEC 2021-2024 ZONE B/WO-02/453",
  // },
];
export const TableHeader = [
  "Particulars",
  "HSN/SAC",
  "GST RATE",
  "QTY",
  "RATE",
  "Amount",
];

export const TableData = [
  {
    id: 1,
    type: "addition",
    seviceName: "1. Security Supervisor",
    hsn: "998585",
    gst: "",
    qty: 600,
    rate: 12533,
  },
  {
    id: 2,
    type: "addition",
    seviceName: "2. Security Guard",
    hsn: "998585",
    gst: "",
    qty: 452,
    rate: 2000,
  },
  {
    id: 3,
    type: "deduction",
    seviceName: "3.Less Duty Security Supervisor",
    hsn: "998585",
    gst: "",
    qty: 10,
    rate: 1000,
  },
  {
    id: 4,
    type: "deduction",
    seviceName: "4.Less Duty Security Guard",
    hsn: "998585",
    gst: "",
    qty: 40,
    rate: 500,
  },
];

export const BankDetailsData = [
  { title: "Name", value: "Total Care Security" },
  { title: "A/C No", value: "6596453185" },
  { title: "Bank", value: "Indian Bank, Pattonm Branch" },
  { title: "IFSC Code", value: "IDIBOOOP30" },
  { title: "PAN", value: "AANFT3601K" },
];
export const subTotal = (TableData) => {
  let sum = 0;
  TableData.map((item) => {
    item.type === "addition"
      ? (sum += item.qty * item.rate)
      : (sum -= item.qty * item.rate);
  });
  return sum;
};
