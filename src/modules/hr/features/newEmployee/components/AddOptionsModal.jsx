import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {setOpenModal,setSaveClick,} from "../../../../../components/Modal/modalSlice";
import AddOptionCard from "./AddOptionCard";
import {addOptionModalMain,optionModalBtnDiv,optionModalHeading,} from "./muiStyles";
/*
This is a modal component that allows adding new options for a given modalname . 
It renders a modal dialog with a header, a card for adding new options, and save and cancel buttons. 
It uses data from the Redux store to determine the visibility of the modal and the name of the entity. 
The component also includes handlers for closing the modal and saving changes.
*/

// A modal component that allows adding new options for a given entity
const AddOptionsModal = () => {
  const dispatch = useDispatch();

  // Handlers for closing modal and saving changes
  const handleClose = () => dispatch(setOpenModal(false));
  const handleSave = () => dispatch(setSaveClick(true));

  // Extracting data from the Redux store
  const { openModal, modalName } = useSelector((state) => state.modal);

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <main style={addOptionModalMain}>

        {/* Modal heading */}
        <h2 style={optionModalHeading}>Add New {modalName}</h2>

        {/* Card for adding new options */}
        <AddOptionCard />

        {/* Save and cancel buttons */}
        <div style={optionModalBtnDiv}>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            cancel
          </Button>
        </div>
      </main>
    </Modal>
  );
};

export default AddOptionsModal;

