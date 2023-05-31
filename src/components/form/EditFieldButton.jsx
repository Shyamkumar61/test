import { Button } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

/**
 * A button component that renders a button element with an edit icon that toggles between edit and save/cancel modes
 * @param {Object} props - The component props
 * @param {boolean} props.edit - Whether the button is in edit mode or not
 * @param {function} props.handleEditOrCancel - A function that handles edit and cancel actions
 * @param {string} props.cardType - The type of card associated with the button (basic, personal, payment)
 * @param {string} [props.position='right-0 top-2'] - The position of the button relative to its parent element
 * @returns {JSX.Element} - The button element
 */

//prettier-ignore
const EditFieldButton = ({ edit, handleEditOrCancel,cardType,position='right-0 top-2' }) => {
  return (
    <div
      className={`edit-btn-div flex flex-row flex-nowrap gap-2 absolute ${position} `}
    >
      {/* Show the save button if in edit mode */}
      {edit && (
        <Button type="submit">
          <SaveIcon className="text-[1.4rem] text-green-500" />{" "}
        </Button>
      )}
      
      {/* Toggle between edit and cancel icons */}
      <Button onClick={() => handleEditOrCancel(cardType)}>
        {edit ? (
          <CancelIcon className="text-[1.4rem] text-red-500" />
        ) : (
          <EditIcon className="text-[1.2rem] text-blue-500" />
        )}
      </Button>
    </div>
  );
};

export default EditFieldButton;
