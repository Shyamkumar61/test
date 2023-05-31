import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ListAltIcon from "@mui/icons-material/ListAlt";

const IndexInvoice = () => {
  return (
    <div className="h-max  justify-self-center self-center  flex flex-row flex-nowrap items-center  gap-10">
      {/* New Invoice */}
      <Link to={"new"} className="no-underline">
        <Button
          variant="contained"
          className="text-lg rounded-lg font-semibold capitalize bg-white text-black"
          startIcon={<AddCircleIcon className="text-[2.5rem] text-blue-600" />}
        >
          New Invoice
        </Button>
      </Link>
      <Link className="no-underline">
        <Button
          variant="contained"
          className="text-lg rounded-lg font-semibold capitalize bg-white text-black "
          startIcon={<ListAltIcon className="text-[2.5rem] text-green-600" />}
        >
          Invoice List
        </Button>
      </Link>
    </div>
  );
};

export default IndexInvoice;
