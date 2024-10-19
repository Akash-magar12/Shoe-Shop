import React from "react";
import { IoBagOutline } from "react-icons/io5";

const Empty = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4  ">
      <div className="text-4xl flex items-center justify-center h-20 w-20 bg-[#dadada] rounded-full">
        <IoBagOutline />
      </div>
      <h2>No Prouducts in Cart</h2>

    </div>
  );
};

export default Empty;
