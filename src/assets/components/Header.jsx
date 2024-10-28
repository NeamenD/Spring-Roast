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
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/subscription">Subscription</Link>
        <Link to="/contact">Home</Link>
      </nav>
    </header>
  );
};
export default Header;
