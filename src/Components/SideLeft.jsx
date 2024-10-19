import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Color from "./Color";
import Category from "./Category";
import Price from "./Price";

const SideLeft = ({ price, category, color, open1, handleClose1 }) => {
  useEffect(() => {
    // Set body overflow to hidden when menu is open
    document.body.style.overflow = open1 ? "hidden" : "auto";

    // Cleanup function to reset overflow when component unmounts or open1 changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open1]); // Dependency array includes open1
  return (
    <div
      className={` w-60 drop transition-all z-50 md:hidden ${
        open1 ? "left-0" : "left-[-15rem]"
      } h-screen fixed  px-6 py-3  text-white `}
    >
      <div className="flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <span className="text-xl font-semibold text-white">StoreX</span>
        </a>
        <span onClick={handleClose1} className="cursor-pointer text-xl">
          <RxCross1 />
        </span>
      </div>
      <div className="mt-16 ">
        <div className="price">
          <h2 className="text-white font-semibold border-b-[1px] border-white  inline-block my-6">
            Price
          </h2>
          {price.map((lab, id) => (
            <Price key={id} lab={lab} />
          ))}
        </div>
        <div className="color">
          <h2 className="text-white font-semibold border-b-[1px] border-white  inline-block my-6">
            Color
          </h2>
          {color.map((lab, id) => (
            <Color key={id} lab={lab} />
          ))}
        </div>
        <div className="category">
          <h2 className="text-white font-semibold border-b-[1px] border-white  inline-block my-6">
            Category
          </h2>
          {category.map((lab, id) => (
            <Category key={id} lab={lab} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideLeft;
