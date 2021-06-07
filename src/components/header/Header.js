import React, { Fragment, useEffect } from "react";
import "./HeaderStyles.css";
import Link from "@material-ui/core/Link";

const Header = ({ history }) => {
  console.log(history, "historyhistory");
  return (
    <div className="headerarea">
      <div className="headerlabel">
        <Link className="headerlabel" href="/">
          Home
        </Link>
      </div>
      <div className="headerlabel">
        <Link href="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Header;
