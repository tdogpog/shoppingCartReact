import React, { createContext, useState, useEffect } from "react";

//handler for the children
//in order to get value via useContext
//from our .provider value
export const CartContext = createContext();

// will apply all childrren we wrap in
//in our MainParent script
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart();
  }

  function removeFromCart(product){

  }

  

  return (
    <CartContext.Provider value={}>
      {children}
    </CartContext.Provider>
  );
};
