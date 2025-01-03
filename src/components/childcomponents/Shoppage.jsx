import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context";

function Shoppage() {
  const { addToCart } = useContext(CartContext);

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
  // drilled in each product description with state={product}
  // also arrow ffunction the addtocart button
  // so it onlyc alls when click, not on render
  return (
    <div className="shopcontainer">
      <h1>Items {products.length}</h1>
      <div className="productContainer">
        {products.map((product) => (
          <div className="productItem" key={product.id}>
            <Link to={`/item/${product.id}`} state={{ product }}>
              <img className="shopItemImg" src={product.image} />
            </Link>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shoppage;
