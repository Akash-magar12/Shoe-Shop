import React, { useContext, useState } from "react";
import Price from "./Price";
import Color from "./Color";
import Category from "./Category";
import Company from "./Company";
import Navbar from "./Navbar";
import { NewContext } from "./Store";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";

const Content = () => {
  let company = ["All Products", "Nike", "Adidas", "Puma", "Vans"];
  let price = ["All", "$0-$50", "$50-$100", "$100-$150", "Over $150"];
  let color = ["Black", "Blue", "Red", "Green", "White"];
  let category = ["Sneakers", "Flats", "Sandals", "Heels"];
  const notify = () => toast.success("Add to Cart");
  //data
  let { shoes, handleCart } = useContext(NewContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Navbar
        handleOpen={handleOpen}
        price={price}
        color={color}
        category={category}
      />

      <div className="w-full flex min-h-screen">
        <Sidebar open={open} handleClose={handleClose} />
        <div className="left hidden sticky top-0 left-0  h-screen sm:w-[35%]  lg:w-[15%] border-r-2 border-[#11111125] bg-indigo-600 px-8 pt-16 md:flex flex-col  gap-10">
          <div className="price">
            <h2 className="text-white font-semibold border-b-[1px] border-white inline-block mb-2">
              Price
            </h2>
            {price.map((lab, id) => (
              <Price key={id} lab={lab} />
            ))}
          </div>
          <div className="color">
            <h2 className="text-white font-semibold border-b-[1px] border-white inline-block mb-2">
              Color
            </h2>
            {color.map((lab, id) => (
              <Color key={id} lab={lab} />
            ))}
          </div>
          <div className="category">
            <h2 className="text-white font-semibold border-b-[1px] border-white inline-block mb-2">
              Category
            </h2>
            {category.map((lab, id) => (
              <Category key={id} lab={lab} />
            ))}
          </div>
        </div>
        <div className="right w-full min-h-screen md:w-[85%] ">
          <div className="flex md:hidden flex-wrap flex-col  pt-6 px-6 md:px-8">
            <h2 className="mb-4 font-semibold text-black text-opacity-70">
              Company
            </h2>
            <div className="btns flex flex-wrap items-center gap-4">
              {company.map((cat) => (
                <Company key={cat} cat={cat} />
              ))}
            </div>
          </div>

          <div className="w-full pt-4 pb-10 px-6  md:px-8 mt-10 justify-center  flex flex-wrap gap-4">
            {shoes.length > 0 ? (
              shoes.map((val) => (
                <div
                  key={val.id}
                  className="md:w-[14rem] w-full  bg-white cursor-pointer p-2 overflow-hidden rounded shadow-lg "
                >
                  <img
                    className="w-full md:w-full  hover:scale-110 transition-all h-24 md:h-28 object-contain"
                    src={val.img}
                    alt={val.title}
                  />
                  <div className="px-2 flex flex-col gap-4 md:gap-2 py-4">
                    <div>
                      <h1 className=" font-semibold text-sm mb-1 text-gray-800 truncate">
                        {val.title}
                      </h1>
                      <div className="flex items-center mt-1">
                        <AiFillStar className="text-yellow-400 text-sm" />
                        <span className="text-gray-600 text-xs ml-1">
                          {val.reviews}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="text-gray-500 font-[gilroy] line-through text-xs mr-1">
                            {val.prevPrice}
                          </span>
                          <span className="text-green-600 font-[gilroy] text-sm">
                            ${val.newPrice}
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            handleCart(val);
                            notify();
                          }}
                          className="text-green-600 hover:text-green-700 transition-colors duration-300"
                        >
                          <AiOutlineShoppingCart className="text-xl" />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <span className="inline-block bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-full px-4 md:px-2 py-1 text-xs font-semibold text-gray-700 hover:text-gray-900 cursor-pointer">
                          {val.company}
                        </span>
                        <span className="inline-block bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-full px-4 md:px-2 py-1 text-xs font-semibold text-gray-700 hover:text-gray-900 cursor-pointer">
                          {val.color}
                        </span>
                        <span className="inline-block bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-full px-4 md:px-2 py-1 text-xs font-semibold text-gray-700 hover:text-gray-900 cursor-pointer">
                          {val.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-black">Not Found</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
