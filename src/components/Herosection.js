import React from "react";
import Banner from "../components/banner.jpg";
import "../App.css";

function HeroSection() {
  return (
    <div
      className={`bg-[url(${Banner})]  h-[75vh] bg-cover  bg-center  flex items-end justify-center`}
    >
      <div className="text-4xl text-white p-5 bg-gray-900 w-full flex justify-center bg-opacity-50 b-heading">
        Spiderman : No Way Home
      </div>
    </div>
  );
}

export default HeroSection;
