import { TextField } from "@mui/material";
import React from "react";

/**
 * A child component for AddOptionCard Component.
 * memoized component that renders a text input field with an optional label.
 */
const OptionCardInput = React.memo(({ label, labelShow = true, ...props }) => {
  return (
    <div>
      <h5>{label}:</h5>
      <TextField variant="outlined" size="small" {...props} required />
    </div>
  );
});

export default OptionCardInput;
