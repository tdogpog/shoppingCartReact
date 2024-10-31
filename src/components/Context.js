import React, { createContext, useState, useEffect } from "react";

//handler for the children
//in order to get value via useContext
//from our .provider value
export const ProductContext = createContext();

// will apply all childrren we wrap in ProductProvider ({children})
//in our MainParent script
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=8"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    //call it on mount
    fetchProducts();
    //leave dependency empty, we only need this on mount
  }, []);

  const contextValue = { products, loading, error };
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
