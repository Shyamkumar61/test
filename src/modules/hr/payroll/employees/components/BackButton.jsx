import React from "react";
import { Button } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to={".."}>
      <Button>
        <ArrowCircleLeftIcon className="text-[2rem] text-blue-400" />
      </Button>
    </Link>
  );
};
export default BackButton;
