import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./previewModalSlice";
import DummySlip from "../../modules/hr/payroll/employees/DummySlip";
import { savePDF } from '@progress/kendo-react-pdf';
const PreviewModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.previewModal.isOpen);

  const handleClose = () => {
    dispatch(closeModal());
  };
  const handleDownloadPDF = () => {
    const element = document.getElementById("pdf-content"); // Identify the element to be converted to PDF
    savePDF(element, { paperSize: "A4" }); // Generate and download the PDF
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto w-full">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[40rem] sm:w-full">
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full sm:w-auto cursor-pointer  inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:text-sm"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="w-full sm:w-auto cursor-pointer  inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:text-sm"
                  onClick={handleDownloadPDF}
                >
                  Download
                </button>
              </div>
              {/* Modal content goes here */}
              <div id="pdf-content" className="px-4 pb-5 sm:p-6 -mt-6">
                <DummySlip />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewModal;
