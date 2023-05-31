import React from "react";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { capitaliseFirstLetter, formatString } from "../../employeesUtils";
// prettier-ignore
import {createFieldChangeHandler,createFieldValidator,} from "../../../../../../components/form/HelperFunction";
import AddOptionsModal from "../../../../features/newEmployee/components/AddOptionsModal";
import { useSelector } from "react-redux";
import { selectOpenModalState } from "../../../../../../components/Modal/modalSlice";
import { selectValidationErrorMsg } from "../../../../../../features/formValidation/validationSlice";
import { DyanamicFormFieldEdit } from "../../../../../../components/form/DyanamicFormFieldEdit";

/**
 * A card component that displays and allows editing of employee information.
 * @param {object} props - The props object.
 * @param {string} props.cardType - The type of information displayed on the card (e.g. "basic", "personal", "payment").
 * @param {object} props.cardData - An object containing the employee information to display.
 * @returns {JSX.Element} - A card component that displays employee information.
 */
const EmployeeInfoCard = ({ cardType, cardData }) => {
  const { enqueueSnackbar } = useSnackbar();

  // Select form fields from Redux store
  const selectFormPropFields = (state) => state.formFields.fields[cardType];
  const fields = useSelector(selectFormPropFields);

  // Select modal state and error messages from Redux store
  const openModal = useSelector(selectOpenModalState);
  const errorMsg = useSelector(selectValidationErrorMsg);

  // State to keep track of whether the card is being toogle for edit or not
  const [edit, setEdit] = useState({
    basic: false,
    personal: false,
    payment: false,
  });

  // Checks if all updated fields are valid after.
  const isUpdatedFiledsValid = () => !errorMsg.length;

  // Create event handlers for updated fields.
  //prettier-ignore
  const handleChange = createFieldChangeHandler(cardData,`setClick${capitaliseFirstLetter(cardType)}`);
  const handleInputBlur = createFieldValidator(cardData);

  // Toggles the edit state of the card.
  const handleEditOrCancel = (cardType) =>
    setEdit((prev) => ({ ...prev, [cardType]: !prev[cardType] }));

  /**
   * Handles save btn for saving updated card fileds values.
   * If all update  fields are valid, saves the information and closes the edit state.
   * If not, displays an error message.
   * @param {Event} e - The update filed submission event for save.
   */
  const handleSave = (e) => {
    e.preventDefault();
    if (isUpdatedFiledsValid()) {
      enqueueSnackbar(`${cardType} information Save`, { variant: "success" });
      setEdit(false);
    } else {
      enqueueSnackbar(`${errorMsg[0]}`, { variant: "error" });
    }
  };
  // Update the edit state if the modal is open
  useEffect(() => {
    if (openModal) {
      setEdit((prev) => ({ ...prev, [cardType]: prev[cardType] === true }));
    }
  }, [openModal]);

  return (
    <form
      className={`flex flex-col gap-2 items-start justify-around bg-white w-auto h-max relative border  border-solid  border-slate-300 rounded-lg shadow-md px-3 py-2 overflow-y-auto`}
      onSubmit={handleSave}
    >
      {openModal && <AddOptionsModal />}
      <h4 className=" capitalize text-xl   font-medium  text-black">
        {cardType} information
      </h4>
      <div className={`w-full flex flex-col justify-between gap-2`}>
        {Object.entries(cardData).map(([property, value]) => {
          return (
            <DyanamicFormFieldEdit
              key={property}
              value={value}
              onChange={handleChange}
              onBlur={handleInputBlur}
              edit={edit[cardType]}
              label={formatString(property)}
              {...fields[property]}
            />
          );
        })}
      </div>
      {/* <EditFieldButton
        edit={edit[cardType]}
        handleEditOrCancel={handleEditOrCancel}
        cardType={cardType}
      /> */}
    </form>
  );
};
export default EmployeeInfoCard;
