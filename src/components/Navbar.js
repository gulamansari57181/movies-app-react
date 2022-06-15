import React from "react";
import Logo from "../components/logo.png";
import "../App.css";

function Navbar() {
  return (
    <div className=" border flex  pl-12 space-x-8 items-center py-1 nav-container">
      <img src={Logo} alt="app-icon" height={80} width={80} />
      <h1 className="nav-heading ">Movies</h1>
      <h1 className="nav-heading ">Favourites</h1>
    </div>
  );
}

export default Navbar;
