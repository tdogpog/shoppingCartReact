import { Link, Outlet } from "react-router-dom";

import { CartProvider } from "./Context";

function MainParent() {
  return (
    <CartProvider>
      <div className="pageContainer">
        <nav className="header">
          <div className="leftHeader">
            <ul className="leftItems">
              <li>
                <Link to="/">
                  <h1>Murphys Goods</h1>
                </Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="shop">Store</Link>
              </li>
            </ul>
          </div>
          <div className="rightHeader">
            <ul>
              <li>
                <Link to="checkout">Cart</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main">
          <Outlet />
        </div>
      </div>
    </CartProvider>
  );
}

export default MainParent;
