import React from "react";
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
      <h1 className="heading text-xl md:text-2xl "> Movies </h1>{" "}
      <h1 className="heading text-xl md:text-2xl"> Favourites </h1>{" "}
    </div>
  );
}

export default Navbar;
