import React, { useEffect, useState } from "react";
import {
  CustomerDetailData,
  TableData,
  TableHeader,
  BankDetailsData,
} from "./data";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import TcsLogo from "./tcslogo.jpg";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import {
  InvoiceFieldEdit,
  createFieldChangeHandler,
  idToServiceAmount,
  idToServiceName,
  subTotalRate,
} from "./invoiceUtil";
import { savePDF } from "@progress/kendo-react-pdf";

import { convertNumberToWords } from "../utilInvoice";
import { useNavigate } from "react-router-dom";
const TopSection = () => {
  return (
    <div className="flex flex-col flex-nowrap gap-6 scale-90 -mt-6">
      {/* Conmpany Nmae */}
      <h1 className="text-center text-2xl mt-4">Total Care Security</h1>
      {/* Logo & Info div */}
      <div className="flex flex-row flex-nowrap justify-between gap-2 -mt-2">
        {/* logo & address */}
        <div className="flex flex-row flex-nowrap justify-between items-center gap-4">
          {/* loog */}
          <div className="h-[7rem] w-[7rem] rounded-3xl">
            <img
              src={TcsLogo}
              alt="TCS Logo"
              className="h-full w-full object-cover"
            />
          </div>
          {/* address */}
          <p className="text-sm font-semibold text-slate-700 ">
            TC 11/1649, 2nd floor, Charachira Road,
            <br />
            Plamoodu Thiruvananthapuram 695004
            <br />
            Ph: 0471-4851264, Mob: 9445661264
            <br />
            Email: toatlcaretvm@gmail.com
            <br />
            website: totalcaresecurity.in
          </p>  
        </div>
        {/* info */}
        <div className="flex flex-col flex-nowrap gap-2 text-end">
          <p className="text-sm font-semibold text-slate-700 ">
            Regn No. 11/2018
            <br />
            CLL - SH0110440110120
            <br />
            EPF No. KR TVM1709222000
            <br />
            ESI Code No: AANFT3601K
            <br />
            GSTIN/UIN: 3211NFT3601K1Z7
          </p>
        </div>
      </div>
      {/* Logo & Info div -End*/}
    </div>
  );
};
const CustomerDetail = () => {
  return (
    <div
      style={{ border: "1px solid lightgray" }}
      className="flex flex-row flex-nowrap gap-2 justify-between my-6 rounded-sm p-4 scale-90 -mt-4"
    >
      {/* right div */}
      <div className="flex flex-col flex-nowrap gap-1 justify-start">
        <p className="text-sm font-semibold text-slate-700 ">
          Electronics Technology parks - phase 3 sez campus
          <br />
          kulathoor,Thiruvananthapuram, kerala
        </p>
        <p className="text-sm font-semibold text-slate-700">
          <span>GSTIN: </span>ABC1234567DEF89
        </p>
        <p className="text-sm font-semibold text-slate-700">
          <span>Work Order No:: </span>EPK/ADMIN/SEC 2021-2024 ZONE B/WO-02/453
        </p>
      </div>
      {/* left div */}
      <div className="flex flex-col flex-nowrap gap-y-1 ">
        {CustomerDetailData.map(({ title, value }) => {
          return (
            <div
              key={title}
              className="flex flex-row flex-nowrap justify-between items-center gap-1 "
            >
              <h3 className="text-sm font-semibold text-slate-700 ">{title}</h3>
              <p className="text-sm font-semibold text-slate-700">{value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const InvoiceTable = () => {
  const [edit, setEdit] = useState(false);
  const technoparkInvoiceData = useSelector((state) => state.technoparkInvoice);
  const handleChange = createFieldChangeHandler(technoparkInvoiceData);
  // const handleInputBlur = createFieldValidator(cardData);
  const subToatalValue = subTotalRate();
  return (
    <div
      style={{ border: "1px solid lightgray" }}
      className="relative flex flex-col h-full rounded-sm -mt-4"
    >
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-slate-300 ">
              <tr>
                {TableHeader.map((name) => {
                  return (
                    <th
                      key={name}
                      scope="col"
                      className="p-2 text-center text-xs font-medium text-black-500 uppercase tracking-wider"
                    >
                      {name}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tfoot className="bg-white divide-y divide-gray-100">
              <tr className=" bg-slate-50">
                <th
                  colSpan={"5"}
                  className=" text-lg p-1 font-medium text-black"
                >
                  Subtotal
                </th>
                <th className="text-base font-medium text-gray-900">
                  {subToatalValue}
                </th>
              </tr>
              <tr className=" bg-slate-50">
                <th
                  colSpan={"1"}
                  className="text-center text-lg p-1 font-medium text-black"
                >
                  Amount In words:
                </th>
                <th
                  colSpan={"6"}
                  className=" text-justify text-base font-medium text-gray-900 capitalize"
                >
                  {convertNumberToWords(subToatalValue) + " " + "only"}
                </th>
              </tr>
            </tfoot>
            <tbody className="bg-white divide-y divide-gray-200">
              {TableData.map((data) => (
                // <tr key={data.id} className="even:bg-gray-50">
                <tr key={data.id} className="w-full">
                  {/* particular name */}
                  <td className="p-1 whitespace-nowrap w-1/4">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">
                          {data.seviceName}
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* hsn sac name */}
                  <td className="p-1  whitespace-nowrap w-2/12">
                    <div className="flex items-center">
                      <InvoiceFieldEdit
                        id={`${data.id} hsn`}
                        value={idToServiceName(data.id, "hsn")}
                        edit={edit}
                        onChange={handleChange}
                      />
                    </div>
                  </td>
                  {/* gst reate */}
                  <td className="p-1 whitespace-nowrap w-2/12">
                    <div className="flex items-center">
                      <InvoiceFieldEdit
                        id={`${data.id} gstrate`}
                        value={idToServiceName(data.id, "gstrate")}
                        edit={edit}
                        onChange={handleChange}
                      />
                    </div>
                  </td>
                  {/* quantity */}
                  <td className="p-1 whitespace-nowrap w-1/6">
                    <div className="flex items-center">
                      <InvoiceFieldEdit
                        id={`${data.id} quantity`}
                        value={idToServiceName(data.id, "quantity")}
                        edit={edit}
                        onChange={handleChange}
                      />
                    </div>
                  </td>
                  {/* Rate */}
                  <td className="p-1 whitespace-nowrap w-2/5">
                    <div className="flex items-center">
                      <InvoiceFieldEdit
                        id={`${data.id} rate`}
                        value={idToServiceName(data.id, "rate")}
                        edit={edit}
                        onChange={handleChange}
                      />
                    </div>
                  </td>
                  {/* amount */}
                  <td className="p-1 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        {Number(idToServiceAmount(data.id)).toFixed(0)}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="btn-div absolute left-0  top-0  flex flex-row flex-nowrap gap-2">
        {edit && (
          <Button onClick={() => setEdit(false)}>
            <SaveIcon className="text-[1.4rem] text-green-500" />{" "}
          </Button>
        )}
        <Button onClick={() => setEdit((prev) => !prev)}>
          {edit ? (
            <CancelIcon className="text-[1.4rem] text-red-500" />
          ) : (
            <EditIcon className="text-[1.2rem] text-blue-500" />
          )}
        </Button>
      </div>
    </div>
  );
};

const InvoiceTaxTable = () => {
  return (
    <div className="flex flex-col h-full rounded-sm scale-y-90 -mt-2">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <table
            style={{ border: "1px solid lightgray" }}
            className="min-w-full  divide-y divide-gray-200 "
          >
            <thead className="bg-gray-50 ">
              <tr>
                <th
                  rowSpan={"2"}
                  className="p-2 text-center text-xs font-medium text-black-500 uppercase tracking-wider"
                >
                  HSN/SAC
                </th>
                <th
                  rowSpan={"2"}
                  className="p-2 text-center text-xs font-medium text-black-500 uppercase tracking-wider"
                >
                  Taxable Value
                </th>
                <th
                  colSpan={"2"}
                  className="p-2 text-center text-xs font-medium text-black-500 uppercase tracking-wider"
                >
                  Central Tax
                </th>
                <th
                  colSpan={"2"}
                  className="p-2 text-center text-xs font-medium text-black-500 uppercase tracking-wider"
                >
                  State Tax
                </th>
                <th
                  colSpan={"2"}
                  scope="col"
                  className="p-2 text-center text-xs font-medium text-black-500 uppercase tracking-wider"
                >
                  Total Tax Amount
                </th>
              </tr>
              <tr>
                <th className="p-2 text-center text-xs font-medium text-black-500 uppercase tracking-wider">
                  Rate
                </th>
                <th className="p-2 text-center text-xs font-medium text-black-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="p-2 text-center text-xs font-medium text-black-500 uppercase tracking-wider">
                  Rate
                </th>
                <th className="p-2 text-center text-xs font-medium text-black-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="p-2 text-center text-xs font-medium text-black-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="p-1 text-center bg-gray-50 text-base font-medium text-gray-900">
                  998525
                </td>
                <td className="p-1 text-center bg-gray-50 text-base font-medium text-gray-900"></td>
                <td className="p-1 text-center bg-gray-50 text-base font-medium text-gray-900"></td>
                <td className="p-1 text-center bg-gray-50 text-base font-medium text-gray-900"></td>
                <td className="p-1 text-center bg-gray-50 text-base font-medium text-gray-900"></td>
                <td className="p-1 text-center bg-gray-50 text-base font-medium text-gray-900"></td>
                <td className="p-1 text-center bg-gray-50 text-base font-medium text-gray-900"></td>
              </tr>
              <tr>
                <td className="p-1 text-center bg-gray-50 text-base font-medium text-gray-900">
                  Total
                </td>
                <td className="p-1 text-center bg-gray-50 text-base font-medium text-gray-900"></td>
                <td className="p-1 text-center bg-gray-50 text-base font-medium text-gray-900"></td>
                <td className="p-1 text-center bg-gray-50 text-base font-medium text-gray-900"></td>
                <td className="p-1 text-center bg-gray-50 text-base font-medium text-gray-900"></td>
                <td className="p-1 text-center bg-gray-50 text-base font-medium text-gray-900"></td>
                <td className="p-1 text-center bg-gray-50 text-base font-medium text-gray-900"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
const BankDetails = () => {
  return (
    <>
      <div className="h-auto grid grid-cols-3 p-2 mb-24 gap-1 scale-90 -mt-8 ">
        <h4 className="text-lg font-semibold col-span-3">Bank Details</h4>
        {BankDetailsData.map(({ title, value }) => {
          return (
            <div className="flex flex-row flex-nowrap gap-x-2 gap-y-0  items-center">
              <h5 className="text-base font-semiobld text-gray-600">
                {title}:
              </h5>
              <h5 className="text-base font-semiobld text-gray-600">{value}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};
const TechnoParkInvoice = () => {
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth);
  const handleDownloadPDF = () => {
    const element = document.getElementById("pdf-content"); // Identify the element to be converted to PDF
    savePDF(element, { paperSize: "A4" }); // Generate and download the PDF
  };
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/login");
    }
  }, []);
  return (
    <div
      style={{ border: "1px solid lightgray" }}
      className="h-screen w-[60%] mx-auto p-4 m-2 bg-white  rounded-lg shadow-md overflow-auto -mt-4"
    >
      {accessToken && (
        <>
          <button
            type="button"
            className="w-full mt-2 sm:w-auto cursor-pointer  inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:text-sm"
            onClick={handleDownloadPDF}
          >
            Download
          </button>
          <div id="pdf-content">
            <TopSection />
            <CustomerDetail />
            <div
              style={{ border: "1px solid lightgray" }}
              className="h-auto p-2 flex flex-col flex-nowrap gap-2 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg scale-90 -mt-14"
            >
              <div className="flex flex-row justify-between items-center">
                <h4 className=" text-sm font-semiobld text-black-400 text-left p-2 ">
                  Service Charge for providing Security Services in Zone B,
                  <br /> Technopark Phase III, Month of March 2023
                </h4>
                <div className="flex flex-col">
                  {/* invoice */}
                  <div className="flex flex-row flex-nowrap justify-between items-center gap-1">
                    <h3 className="text-sm font-semibold text-black-400 ">
                      Invoice:
                    </h3>
                    {/* <p className="text-base font-normal text-slate-700 ">
                      TCS/03/1962
                    </p> */}
                  </div>
                  {/* date */}
                  <div className="flex flex-row flex-nowrap justify-between items-center gap-1">
                    <h3 className="text-sm font-semibold text-black-400 ">
                      Date:
                    </h3>
                    <p className="text-base font-normal text-slate-700 ">
                      31-05-2023
                    </p>
                  </div>
                </div>
              </div>
              <InvoiceTable />
              <InvoiceTaxTable />
            </div>
            <BankDetails />
          </div>
        </>
      )}
    </div>
  );
};

export default TechnoParkInvoice;
