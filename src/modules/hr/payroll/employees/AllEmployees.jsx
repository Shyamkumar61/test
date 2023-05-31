import React, { useState, useEffect, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setClickEmployeeId } from "./clickEmployeesSlice";
import { employeeData } from "./data";
import { useGetAllEmployeeListQuery } from "../../features/newEmployee/api/newEmployeeApi";
/**
 * A component that displays a table of all employees using ag-Grid library with a clickable cell for each row that navigates to the employee details page.
 * It fetches the data from an API endpoint  for demo purposes uses a static data source.
 * It dispatches a Redux action when a cell is clicked to set the clicked employee ID and navigates to the employee details page.
 */
const AllEmployees = () => {
  const { data, isLoading, error } = useGetAllEmployeeListQuery();
  const [rowData, setRowData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setRowData(data?.success);
  }, [data]);
  const cellClickedListener = useCallback((e) => {
    const {
      data: { emp_id, name, subRole },
    } = e;
    dispatch(setClickEmployeeId({ emp_id, name, subRole }));
    navigate(`${emp_id}`);
  }, []);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/login");
    }
  }, []);
  const columnDefs = [
    { headerName: "ID", field: "emp_id", sortable: true, filter: true },
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Role", field: "subRole", sortable: true, filter: true },
    {
      headerName: "Status",
      field: "working_status",
      sortable: true,
      filter: true,
    },
    { headerName: "Client", field: "company", sortable: true, filter: true },
    { headerName: "Number", field: "number", sortable: true, filter: true },
  ];
  const maxDisplayedColumns = 6;
  return (
    // <div className="all-employee relative rounded-md shadow-md h-full mt-4 md:mt-2 lg:mt-0 flex flex-col">
    <div className="all-employee relative rounded-md shadow-md    h-[85vh] flex flex-col flex-grow">
      <div className="pl-2 row-start-1 row-end-2">
        <Link to={"add"} className="no-underline">
          <Button variant="outlined" className="rounded-xl w-full ">
            Add New
          </Button>
        </Link>
      </div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div className="ag-theme-alpine  mt-2 flex-grow">
            <AgGridReact
              columnDefs={columnDefs}
              onCellClicked={cellClickedListener}
              rowData={rowData}
              animateRows={true}
              pagination={true}
              // domLayout="normal"
              paginationPageSize={20}
              maxDisplayedColumns={maxDisplayedColumns}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AllEmployees;
