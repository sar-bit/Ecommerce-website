import React, { Fragment, useEffect } from "react";
import "./HeaderStyles.css";
import Link from "@material-ui/core/Link";
import { useSelector } from "react-redux";

const Header = ({ history }) => {

  const localcart = useSelector((state) => state.product.cart);
  const cartlength = localcart && localcart.length;

  return (
    <div className="headerarea">
      <div className="headerlabel">
        <Link className="headerlabel" href="/">
          Home
        </Link>
      </div>
      <div className="headerlabel2">
        <Link href="/cart">Cart</Link>
      </div>
      <div className="cartlength">
        {cartlength}
      </div>
    </div>
  );
};

export default Header;
