import React from "react";

/**
 * A component to render validation error message
 * component is used to display a validation error message with a red background and border.
 * It takes an array of error messages as input and renders each message with its index number. 
 * component also applies some styling to format the error message to make it more visible and easy to read.
 */
const ErrorCard = ({ errors }) => {
  return (
    <div
      className="flex flex-col gap-2 rounded-md  bg-red-100 border border-red-200 text-red-400 px-4 py-3  relative w-full h-4/6 overflow-y-auto mt-4"
      role="alert"
    >
      {/* Map over the errors array and render each error message */}
      {errors.map((error, index) => (
        <React.Fragment key={index}>
          <h3 className="block sm:inline text-[1.1rem] font-medium">
            {/* Display the error message with its index */}
            <span>({index + 1})</span> {error} <br />
          </h3>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ErrorCard;


