import React, { useContext } from "react";
import { NewContext } from "./Store";

const Category = ({ lab }) => {
  const { handleCategory } = useContext(NewContext);
  return (
    <div
      onClick={() => handleCategory(lab)}
      className="flex gap-2  items-center "
    >
      <input
        className="cursor-pointer accent-black"
        type="radio"
        id={lab}
        name="CatergoryGroup"
        value={lab}
        defaultChecked={lab === "Sneakers"}
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

export default Category;
