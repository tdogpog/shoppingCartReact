import React, { createContext, useState, useMemo } from "react";

//handler for the children
//in order to get value via useContext
//from our .provider value
export const CartContext = createContext();

// will apply all childrren we wrap in
//in our MainParent script
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //functional argument to a useState setter
    //auto take in the useStates most recent state
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? //increment
              { ...item, quantity: item.quantity + 1 }
            : //else not match just return the item with no increment
              item
        );
      } else {
        //item not already in cart, spread cart and add to cart

        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const decrementFromCart = (product) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const checkout = () => {
    if (cartSize === 0) {
      alert("Cart is empty");
      return;
    } else {
      setCart([]);
      alert("Thanks for purchasing");
    }
  };

  //memoized to prevent unnecessary repeat calcs
  // only runs when cart changes
  const cartSize = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const cartPrice = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  const contextValue = {
    cart,
    addToCart,
    decrementFromCart,
    removeFromCart,
    checkout,
    cartSize,
    cartPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
