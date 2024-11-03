import React, { useContext } from "react";
import { CartContext } from "../Context";

function Checkoutpage() {
  const {
    cart,
    addToCart,
    decrementFromCart,
    removeFromCart,
    cartPrice,
    cartSize,
    checkout,
  } = useContext(CartContext);
  return (
    <div className="cartContent">
      <div className="cartItems">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cartItem">
              <img
                src={item.image}
                alt={item.title}
                className="cartItemImage"
              />
              <div className="cartItemDetails">
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>
                <div className="itemQuantity">
                  <button onClick={() => decrementFromCart(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <br></br>
      <div className="checkoutValues">
        <p>Order Summary</p>
        <p>${cartPrice}</p>
        <br></br>
        <div className="subtotal">
          <p>Subtotal ({cartSize} items)</p>
          <p>${cartPrice.toFixed(2)}</p>
        </div>
        <br></br>
        <div className="taxes">
          <p>Tax (15%)</p>
          <p>${(cartPrice * 0.15).toFixed(2)} </p>
        </div>
        <br></br>
        <div className="total">
          <p>Total</p>
          <p>${(cartPrice * 1.15).toFixed(2)}</p>
        </div>
        <button onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
}

export default Checkoutpage;
