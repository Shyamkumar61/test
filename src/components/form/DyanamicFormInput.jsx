import { MenuItem, Select, TextField } from "@mui/material";
import { LocalizationProvider, DateField } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";
import { useDispatch } from "react-redux";
import { setModalId, setModalName, setOpenModal } from "../Modal/modalSlice";
import { deserializeDate } from "../../utils/utils";

export const DyanamicFormInput = React.memo(
  ({
    formType = "input",
    id,
    label,
    placeholder,
    type = "text",
    value,
    onChange,
    labelShow = true,
    options,
    onBlur,
    required = true,
  }) => {
    const dispatch = useDispatch();
    const newDateValue = deserializeDate(value);
    // handler function for when a date is selected
    const handleDateChange = (date) => {
      onChange({ target: { id, value: dayjs(date).format("YYYY-MM-DD") } });
    };

    // handler function for when an option in a select element is selected
    const handleSelectChange = (e) => {
      // check if a new field is being added
      const addNewfiled =
        options[0].split(" ")[0] === "➕" && e.target.value === options[0];
      if (addNewfiled) {
        // open the modal to add a new field
        dispatch(setOpenModal(true));
        // set the modal name to the appropriate name for the field being added
        dispatch(setModalName(options[0].split(" ")[2]));
        // set the modal ID to the ID of the current field
        dispatch(setModalId(id));
        // clear the value of the select element
        e.target.value = "";
        return;
      }
      // update the value of the field with the selected option
      onChange({ target: { id, value: e.target.value } });
    };

    // render the label element if labelShow is true
    const labelElement = labelShow && (
      <label
        htmlFor={id}
        className="text-[#475569] font-semibold text-[1.05rem]"
      >
        {label}:
      </label>
    );

    // render the input element
    const inputElement = (
      <TextField
        id={id}
        variant="outlined"
        type={type}
        size="small"
        placeholder={placeholder}
        className="w-3/4 justify-self-start h-1/4 self-start scale-90"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      />
    );

    // set the height and padding for the menu items in the select element
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };
    // render the select element
    const selectElement = (
      <Select
        id={id}
        value={value}
        onChange={handleSelectChange}
        placeholder={placeholder}
        size="small"
        MenuProps={MenuProps}
        className="w-3/4 justify-self-start self-start scale-90"
        onBlur={onBlur}
        required={required}
      >
        {/* map over the options to render menu items */}
        {options &&
          options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              // style={getStyles(option, id, theme)}
            >
              {option}
            </MenuItem>
          ))}
      </Select>
    );
    // date picker element for form type "date"
    const dateElement = (
      <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
        <DateField
          // value={value}
          value={newDateValue ? new Date(newDateValue) : ""}
          onChange={handleDateChange}
          opento="day"
          format="DD/MM/YYYY"
          maxDate={new Date()}
          views={["day", "month", "year"]}
          size="small"
          className="w-3/4 justify-self-start self-start scale-90"
          onBlur={onBlur}
          required={required}
        />
      </LocalizationProvider>
    );

    // render the form element based on the formType prop passed to the component
    return (
      <div
        className={`grid items-center content-center {${
          labelShow ? "grid-cols-[2fr_6fr]" : "grid-cols-1"
        } } w-full`}
      >
        {labelElement}
        {formType === "input" && inputElement}
        {formType === "select" && selectElement}
        {formType === "date" && dateElement}
      </div>
    );
  }
);
