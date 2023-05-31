import React, { useCallback } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  setLessSecurityGuard,
  setLessSupervisior,
  setSecurityGuard,
  setSupervisior,
} from "./TechnoparkInvoiceSlice";

export const subTotalRate = () => {
  const invoiceSliceData = useSelector((state) => state.technoparkInvoice);
  const sum =
    invoiceSliceData.supervisior["quantity"] *
      invoiceSliceData.supervisior["rate"] +
    invoiceSliceData.securityGuard["quantity"] *
      invoiceSliceData.securityGuard["rate"] -
    (invoiceSliceData.lessSupervisior["quantity"] *
      invoiceSliceData.lessSupervisior["rate"] +
      invoiceSliceData.lessSecurityGuard["quantity"] *
        invoiceSliceData.lessSecurityGuard["rate"]);
  return sum;
};

export const idToServiceName = (id, property) => {
  const invoiceSliceData = useSelector((state) => state.technoparkInvoice);
  return id === 1
    ? `${invoiceSliceData.supervisior[property]}`
    : id === 2
    ? `${invoiceSliceData.securityGuard[property]}`
    : id === 3
    ? `${invoiceSliceData.lessSupervisior[property]}`
    : `${invoiceSliceData.lessSecurityGuard[property]}`;
};

export const idToServiceAmount = (id) => {
  const invoiceSliceData = useSelector((state) => state.technoparkInvoice);
  return id === 1
    ? `${
        invoiceSliceData.supervisior["quantity"] *
        invoiceSliceData.supervisior["rate"]
      }`
    : id === 2
    ? `${
        invoiceSliceData.securityGuard["quantity"] *
        invoiceSliceData.securityGuard["rate"]
      }`
    : id === 3
    ? `${
        invoiceSliceData.lessSupervisior["quantity"] *
        invoiceSliceData.lessSupervisior["rate"]
      }`
    : `${
        invoiceSliceData.lessSecurityGuard["quantity"] *
        invoiceSliceData.lessSecurityGuard["rate"]
      }`;
};

let currentId = "";

export const createFieldChangeHandler = (stepData) => {
  const dispatch = useDispatch();
  const handleChange = useCallback(
    (e) => {
      const { id, value } = e.target;
      const [rowNumber, property] = id.split(" ");
      switch (Number(rowNumber)) {
        case 1:
          dispatch(setSupervisior({ property: property, value: value }));
          break;
        case 2:
          dispatch(setSecurityGuard({ property: property, value: value }));
          break;
        case 3:
          dispatch(setLessSupervisior({ property: property, value: value }));
          break;
        case 4:
          dispatch(setLessSecurityGuard({ property: property, value: value }));
          break;
        default:
          break;
      }
      currentId = id;
    },
    [stepData, dispatch]
  );

  return handleChange;
};

export const InvoiceFieldEdit = ({
  edit = false,
  value,
  onChange,
  id,
  placeholder,
}) => {
  const inputElement = (
    <TextField
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={!edit}
      required={true}
      type="number"
      variant="outlined"
      size="small"
      className="w-full text-sm font-medium text-gray-900 text-center  h-1/4  scale-90"
    />
  );
  return !edit ? (
    <h4 className="w-full text-sm font-medium text-gray-900 text-center">
      {value}
    </h4>
  ) : (
    inputElement
  );
};
