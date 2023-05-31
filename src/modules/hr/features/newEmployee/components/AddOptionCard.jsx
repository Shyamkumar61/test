import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModal, setSaveClick } from "../../../../../components/Modal/modalSlice";
import { addToSelectOptions } from "../newEmployeeSlice";
import { OPTIONS_CARD_FIELDS } from "../newEmployeeConstant";
import OptionCardInput from "./OptionCardInput";

/**
 * A child component for AddOptionsModal Component.
 * It renders a text input component and listens for changes in input value. 
 * When the modal is saved, it dispatches the new option value to the Redux store and closes the modal.
 */ 
const AddOptionCard = () => {
  const dispatch = useDispatch();

  // Extracting data from the Redux store
  const { modalId, saveClick } = useSelector((state) => state.modal);
  
  // A single state value to store the current input value
  const [value, setValue] = useState("");

  // A single handleChange function that can be reused for all inputs
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  });

  // Use useEffect to add the new option and close the modal when saveClick is true
  useEffect(() => {
    if (saveClick) {
      dispatch(addToSelectOptions({ property: modalId, value }));
      dispatch(setOpenModal(false));
      dispatch(setSaveClick(false))
    }
  }, [saveClick, modalId, value, dispatch]);

  return (
    <main>
      {/* Render the OptionCardInput component with the current field data */}
      <OptionCardInput
        key={modalId}
        value={value}
        onChange={handleChange}
        {...OPTIONS_CARD_FIELDS[modalId]}
      />
    </main>
  );
};

export default AddOptionCard;
