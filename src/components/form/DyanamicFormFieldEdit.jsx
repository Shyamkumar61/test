import { MenuItem, Select, TextField } from "@mui/material";
import { LocalizationProvider, DateField } from "@mui/x-date-pickers";
import { useTheme } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalId, setModalName, setOpenModal } from "../Modal/modalSlice";

export const DyanamicFormFieldEdit = React.memo(
  ({
    edit = false,
    required = true,
    key,
    value,
    onChange,
    onBlur,
    options,
    id,
    label,
    placeholder,
    type = "text ",
    formType = "input",
    css = {
      labelCss: "text-sm font-semibold  text-slate-600",
      labelValueCss: "text-base text-gray-500",
    },
  }) => {
    const { labelCss, labelValueCss } = css;
    const updatedSelectOptions = useSelector(
      (state) => state.newemployee.selectOptions.basic
    );
    const { gender, workLocation, department, role, subRole } =
      updatedSelectOptions;
    switch (id) {
      case "gender":
        options = gender;
        break;
      case "workLocation":
        options = workLocation;
        break;
      case "department":
        options = department;
        break;
      case "role":
        options = role;
        break;
      case "subRole":
        options = subRole;
        break;
      default:
        break;
    }
    const dispatch = useDispatch();
    // get the theme object from MUI theme provider
    const theme = useTheme();
    const [dateValue, setDateValue] = useState(dayjs(value, "DD-MM-YYYY"));

    const handleDateChange = (date) => {
      onChange({ target: { id, value: date.format("DD-MM-YYYY") } });
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

    // render the input element
    const inputElement = (
      <TextField
        key={key}
        id={id}
        variant="outlined"
        type={type}
        size="small"
        placeholder={placeholder}
        className="w-full justify-self-start h-1/4 self-start scale-90"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        disabled={!edit}
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

    // function to get the styles for the select element menu items
    function getStyles(name, personName, theme) {
      return {
        fontWeight:
          personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
      };
    }

    // render the select element
    const selectElement = (
      <Select
        key={key}
        id={id}
        value={value}
        onChange={handleSelectChange}
        placeholder={placeholder}
        size="small"
        MenuProps={MenuProps}
        className="w-full justify-self-start self-start scale-90"
        onBlur={onBlur}
        required={required}
        disabled={!edit}
      >
        {/* map over the options to render menu items */}
        {options &&
          options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(option, id, theme)}
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
          // defaultValue={dateValue}
          key={key}
          value={dateValue}
          onChange={handleDateChange}
          opento="day"
          format="DD/MM/YYYY"
          maxDate={new Date()}
          views={["day", "month", "year"]}
          size="small"
          className="w-3/4 justify-self-start self-start scale-90"
          onBlur={onBlur}
          required={required}
          disabled={!edit}
        />
      </LocalizationProvider>
    );
    return (
      <>
        <div
          key={label}
          className="w-full grid items-center content-center grid-cols-[4fr_6fr]"
        >
          <label className={`${labelCss}`}>{label}</label>
          <div className="w-full justify-self-start self-start">
            {!edit ? (
              <span className={`${labelValueCss}`}>{value}</span>
            ) : (
              <>
                {formType === "input" && inputElement}
                {formType === "select" && selectElement}
                {formType === "date" && dateElement}
              </>
            )}
          </div>
        </div>
      </>
    );
  }
);
