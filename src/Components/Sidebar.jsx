import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";

import { NewContext } from "./Store";
import Empty from "./Empty";

const Sidebar = ({ open, handleClose }) => {
  const { cart, handleDelete, handleIncre, handleDecre } =
    useContext(NewContext);
  const total = cart.reduce((accum, val) => {
    return accum + val.newPrice * val.quantity;
  }, 0);

  return (
    <div
      className={`md:w-[32rem] w-full transition-all overflow-y-scroll  hide h-screen fixed
     z-[999] top-0 py-5 px-4 md:px-6 ${
       open ? "right-0 " : "right-[-32rem]"
     } bg-[#fff]`}
    >
      <div className="flex items-center border-b-2 pb-4 justify-between">
        <div className="flex gap-3 items-center">
          <h3>SHOPPING CART</h3>
          <span className="bg-indigo-600 text-white w-8 flex justify-center items-center rounded-full h-8">
            {cart.length}
          </span>
        </div>
        <span onClick={handleClose} className="cursor-pointer text-xl">
          <RxCross1 />
        </span>
      </div>

      <div className="flex w-full  h-auto    mt-8 justify-between items-start">
        {cart.length > 0 ? (
          <div className="flex w-full  flex-col gap-5 ">
            {cart.map((val) => (
              <div
                key={val.id}
                className="flex w-full items-center border-b-2 pb-4 justify-between "
              >
                <div className="flex items-center gap-6 ">
                  <div className="size-24 md:size-32">
                    <img
                      className="w-full h-full object-contain"
                      src={val.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-[400] text-sm">{val.title}</p>
                    <div className="my-1 lg:my-2">
                      <span className=" inline-block bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-full px-4 md:px-2 py-1 text-xs font-semibold text-gray-700 hover:text-gray-900 cursor-pointer mr-5 ">
                        {val.color}
                      </span>
                      <span className="inline-block bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-full px-4 md:px-2 py-1 text-xs font-semibold text-gray-700 hover:text-gray-900 cursor-pointer">
                        {val.company}
                      </span>
                    </div>
                    <p className="font-[400] text-sm">
                      ${val.newPrice * val.quantity}
                    </p>
                    <div className="px-4 inline-block space-x-3 rounded mt-1  bg-black text-white">
                      <button onClick={() => handleDecre(val.id)}>-</button>
                      <span>{val.quantity}</span>
                      <button onClick={() => handleIncre(val.id)}>+</button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(val.id)}
                  className="bg-red-500 self-start text-sm text-white rounded px-4 py-1"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <Empty />
        )}
      </div>

      <div className="total w-full   bottom-0 bg-white py-5">
        <div className="flex w-full border-b-2 pb-4 justify-between items-center">
          <p>Subtotal:</p>
          <p>${total}</p>
        </div>
        <button className="bg-black  mt-6 flex text-white rounded px-4 py-1">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
