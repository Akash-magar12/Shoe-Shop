import React, { useContext } from "react";
import { NewContext } from "./Store";

const Color = ({ lab }) => {
  const { handleColor } = useContext(NewContext);
  return (
    <div onClick={() => handleColor(lab)} className="flex gap-2  items-center ">
      <input
        className="cursor-pointer accent-black"
        type="radio"
        id={lab}
        name="ColorGroup"
        value={lab}
        defaultChecked={lab === "Black"}
      />
      <label
        className="text-white font-[300] cursor-pointer"
        htmlFor={lab}
      >
        {lab}
      </label>
    </div>
  );
};

export default Color;
