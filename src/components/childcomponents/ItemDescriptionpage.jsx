import { useLocation } from "react-router-dom";
import { CartContext } from "../Context";
import { useContext } from "react";

function ItemDescriptionPage() {
  const location = useLocation();
  //we need this to access the state object we fed in through link
  // this was  fix for not raising the API up to mainparent
  // or expanding our context beyond being a shopping cart
  const { product } = location.state;
  const { addToCart } = useContext(CartContext);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="item-description">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ItemDescriptionPage;
