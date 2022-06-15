import React from "react";
import Banner from "../components/banner.jpg";

import "../App.css";

function HeroSection() {
  return (
    <div
      className={`bg-[url(${Banner})] w-full  h-[60vh] md:h-[70vh] bg-cover  bg-center  flex items-end `}
    >
      <div className=" text-2xl md:text-4xl text-white p-2 bg-gray-900 w-full flex justify-center bg-opacity-50  font-serif">
        Spiderman: No Way Home{" "}
      </div>{" "}
    </div>
  );
}

export default HeroSection;
