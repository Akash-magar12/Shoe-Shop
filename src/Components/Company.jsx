import React, { useContext } from "react";
import { NewContext } from "./Store";

const Company = ({ cat }) => {
  const { handleCompany } = useContext(NewContext);

  return (
    <button
      onClick={() => handleCompany(cat)}
      className="px-3 py-1 text-sm border font-[300] border-[#111] border-opacity-70 text-[#111] text-opacity-70 rounded-md hover:bg-gray-100 transition-all duration-300 focus:outline-none active:scale-90"
    >
      {cat}
    </button>
  );
};

export default Company;
