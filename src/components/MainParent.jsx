import React, { useEffect, useState } from "react";

import Checkoutpage from "./childcomponents/Checkoutpage";
import Homepage from "./childcomponents/Homepage";
import ItemDescriptionpage from "./childcomponents/ItemDescriptionpage";
import Shoppage from "./childcomponents/Shoppage";

function MainParent() {
  return (
    <div className="pageContainer">
      <div className="header"></div>
      <Checkoutpage />
      <Homepage />
      <ItemDescriptionpage />
      <Shoppage />
    </div>
  );
}

export default MainParent;
