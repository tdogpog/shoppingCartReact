import { Link, Outlet } from "react-router-dom";

import { ProductProvider } from "./Context";

function MainParent() {
  return (
    <ProductProvider>
      <div className="pageContainer">
        <div className="header">
          <ul>
            <li>
              <h1>Generic Store</h1>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shop">Store</Link>
            </li>
          </ul>
        </div>
        <div className="main">
          <Outlet />
        </div>
      </div>
    </ProductProvider>
  );
}

export default MainParent;
