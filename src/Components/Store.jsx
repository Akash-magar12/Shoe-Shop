import React, { createContext, useState } from "react";
import data from "../assets/data";

export const NewContext = createContext(null);

const Store = ({ children }) => {
  const [input, setInput] = useState("");
  const [shoes, setShoes] = useState(data);
  const [cart, setCart] = useState([]);
  //handle Add to cart

  const handleCart = (item) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prev.map((cartItem) => {
          return cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
        });
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };
  //handle cart delete
  const handleDelete = (id) => {
    const filter = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(filter);
  };
  // handle increment
  const handleIncre = (itemId) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (itemId === item.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };
  // handle Deccrement

  const handleDecre = (itemId) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (itemId === item.id) {
          return item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        }
        return item;
      });
    });
  };

  //handling input
  const handleInput = () => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().startsWith(input.toLowerCase())
    );
    setShoes(filtered);
  };

  // Generic filter function
  const filterData = (key, value) => {
    if (
      value.toLowerCase() === "all products" ||
      value.toLowerCase() === "all"
    ) {
      setShoes(data);
      return;
    }
    const filteredData = data.filter(
      (item) => item[key].toLowerCase() === value.toLowerCase()
    );
    setShoes(filteredData);
  };

  // Handle filtering shoes by color
  const handleColor = (selectedColor) => filterData("color", selectedColor);

  // Handle filtering shoes by Category
  const handleCategory = (selectedCategory) =>
    filterData("category", selectedCategory);

  // Handle filtering shoes by Company
  const handleCompany = (selectedCompany) =>
    filterData("company", selectedCompany);

  // Handle filtering shoes by Price
  const handlePrice = (selectedPrice) => {
    if (selectedPrice.toLowerCase() === "all") {
      setShoes(data);
      return;
    }
    const filteredPrice = data.filter((item) => {
      let price = item.newPrice;
      switch (selectedPrice) {
        case "$0-$50":
          return price >= 0 && price <= 50;
        case "$50-$100":
          return price > 50 && price <= 100;
        case "$100-$150":
          return price > 100 && price <= 150;
        case "Over $150":
          return price > 150;
        default:
          return false;
      }
    });
    setShoes(filteredPrice);
  };
  return (
    <NewContext.Provider
      value={{
        handlePrice,
        handleInput,
        handleDecre,
        shoes,
        handleColor,
        input,
        setInput,
        handleCategory,
        handleCompany,
        handleCart,
        cart,
        handleDelete,
        handleIncre,
      }}
    >
      {children}
    </NewContext.Provider>
  );
};

export default Store;
