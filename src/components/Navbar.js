import React from "react";
import { Link } from "react-router-dom";

import Logo from "../components/logo.png";
import "../App.css";

function Navbar() {
  return (
    <div className=" border flex  pl-12 space-x-8 items-center nav-container">
      <img
        src={Logo}
        alt="app-icon"
        height={70}
        width={70}
        className="md:w-[80px]"
      />{" "}
      <Link to="/" className="heading text-xl md:text-2xl ">
        {" "}
        Movies{" "}
      </Link>{" "}
      <Link to="/favourites" className="heading text-xl md:text-2xl">
        {" "}
        Favourites{" "}
      </Link>{" "}
    </div>
  );
}

export default Navbar;
