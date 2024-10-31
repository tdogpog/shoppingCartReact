import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shoppage() {
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
        console.log(data);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {error}</div>;
  }
  return (
    <div className="homecontainer">
      <div>
        <h1>Items {products.length}</h1>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} />
            <p>{product.price}</p>
            <button></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shoppage;
