import React, { useContext, useEffect, useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { NewContext } from "./Store";
import { HiMenuAlt1 } from "react-icons/hi";
import SideLeft from "./SideLeft";

const Navbar = ({ handleOpen, color, category, price }) => {
  const info = ["All Products", "Nike", "Adidas", "Puma", "Vans"];
  const { input, setInput, handleCompany, handleInput, cart } =
    useContext(NewContext);

  useEffect(() => {
    handleInput();
  }, [input]);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  return (
    <nav className="bg-white shadow-lg">
      <SideLeft
        color={color}
        handleClose1={handleClose1}
        price={price}
        open1={open1}
        category={category}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span
              onClick={handleOpen1}
              className="block lg:hidden text-gray-600 mr-2 text-2xl"
            >
              <HiMenuAlt1 />
            </span>
            <a href="#" className="flex-shrink-0">
              <span className="text-xl font-semibold text-indigo-600">
                StoreX
              </span>
            </a>
            <div className="ml-10 hidden relative md:flex items-baseline space-x-4">
              <h3 className="px-3 py-2 text-sm font-medium text-gray-900 border-b-2 border-indigo-500">
                Home
              </h3>
              <div className="relative group">
                <h3 className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent cursor-pointer">
                  Company
                </h3>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {info.map((val, id) => (
                      <h3
                        onClick={() => handleCompany(val)}
                        key={id}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                        role="menuitem"
                      >
                        {val}
                      </h3>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Search products..."
                className="bg-white text-gray-800 border border-gray-300 rounded-full py-[7px] pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-44 focus:border-indigo-500 lg:w-64 transition duration-200 ease-in-out text-sm"
              />
              <button
                onClick={handleInput}
                className="ml-[-2rem] text-gray-400 hover:text-indigo-500 transition duration-200 ease-in-out"
              >
                <FiSearch className="h-5 w-5" />
              </button>
            </div>
            <button
              onClick={handleOpen}
              className="relative flex items-center justify-center p-2 text-gray-600 hover:text-indigo-500 rounded-full transition duration-300 ease-in-out group"
            >
              <IoBagOutline className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full transition-all duration-300 ease-in-out transform group-hover:scale-110">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
