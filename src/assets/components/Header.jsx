import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Image/logo-removebg.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* <Link to="/">Spring Roast</Link> */}
        <img src={logo} alt="Spring Roast Logo" />
      </div>
      <nav>
        {/* <link to="/">Home</link>
        <link to="/about">About</link>
        <link to="/shop">Shop</link>
        <link to="/subscription">Subscription</link>
        <link to="/contact">Home</link> */}
      </nav>
    </header>
  );
};
export default Header;
