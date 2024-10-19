import React, { useContext } from "react";
import { NewContext } from "./Store";

const Price = ({ lab }) => {
  const { handlePrice } = useContext(NewContext);
  return (
    <div onClick={() => handlePrice(lab)} className="flex gap-2 items-center ">
      <input
        className="cursor-pointer accent-black"
        type="radio"
        id={lab}
        name="PriceGroup"
        value={lab}
        defaultChecked={lab === "All"}
      />
      <label
        className="text-white font-[300]  cursor-pointer"
        htmlFor={lab}
      >
        {lab}
      </label>
    </div>
  );
};

export default Price;
