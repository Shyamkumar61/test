import React from "react";
import { Link } from "react-router-dom";

export const UtilityLink = ({ to, text }) => {
  return (
    <Link
      to={`/${to}`}
      className="inline-flex items-center no-underline list-none text-xs font-thin text-center text-gray-500 hover:text-gray-700 "
    >
      <span className="text-base text-cyan-500">{text}</span>
    </Link>
  );
};

export const UtilityHeader = ({ h1, h2, to, to_text }) => {
  return (
    <>
      <h1>Ardev</h1>
      {/* logo - wrapper */}
      {/* Tagline */}
      <div className="flex flex-col justify-start items-start gap-1 w-full">
        <div className="flex flex-row justify-between items-center gap-4 w-full">
          <h1 className="text-xl text-slate-800">{h1}</h1>
          <UtilityLink to={to} text={to_text} />
        </div>
        <h2 className="text-lg text-slate-600">{h2}</h2>
      </div>
    </>
  );
};
