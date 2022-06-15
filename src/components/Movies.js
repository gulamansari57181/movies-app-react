import React from "react";
import Banner from "../components/banner.jpg";

import "../App.css";

function Movies() {
  return (
    // Movies Section
    <div>
      {/* Trendin movie text conatiner */}
      <div className=" text-center mt-8  text-3xl md:text-5xl  font-bold font-serif ">
        Trending Movies
      </div>
      {/* Card Container */}
      <div className=" flex mb-8 mt-8 flex-wrap justify-center">
        {/* Cards */}
        <div className="flex hover:scale-110 ease-out duration-300 font-italic">
          <div
            className={`bg-[url(${Banner})]  h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px] bg-cover  bg-center  flex items-end rounded-xl m-4 `}
          >
            <div className=" text-white py-2 bg-gray-900 w-full text-center bg-opacity-50 b-heading rounded-b-xl ">
              Spiderman : No Way Home
            </div>
          </div>
        </div>
        <div className="flex hover:scale-110 ease-out duration-300 font-italic">
          <div
            className={`bg-[url(${Banner})]  h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px] bg-cover  bg-center  flex items-end rounded-xl m-4 `}
          >
            <div className=" text-white py-2 bg-gray-900 w-full text-center bg-opacity-50 b-heading rounded-b-xl ">
              Spiderman : No Way Home
            </div>
          </div>
        </div>
        <div className="flex hover:scale-110 ease-out duration-300 font-italic">
          <div
            className={`bg-[url(${Banner})]  h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px] bg-cover  bg-center  flex items-end rounded-xl m-4 `}
          >
            <div className=" text-white py-2 bg-gray-900 w-full text-center bg-opacity-50 b-heading rounded-b-xl ">
              Spiderman : No Way Home
            </div>
          </div>
        </div>
        <div className="flex hover:scale-110 ease-out duration-300 font-italic">
          <div
            className={`bg-[url(${Banner})]  h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px] bg-cover  bg-center  flex items-end rounded-xl m-4 `}
          >
            <div className=" text-white py-2 bg-gray-900 w-full text-center bg-opacity-50 b-heading rounded-b-xl ">
              Spiderman : No Way Home
            </div>
          </div>
        </div>
        <div className="flex hover:scale-110 ease-out duration-300 font-italic">
          <div
            className={`bg-[url(${Banner})]  h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px] bg-cover  bg-center  flex items-end rounded-xl m-4 `}
          >
            <div className=" text-white py-2 bg-gray-900 w-full text-center bg-opacity-50 b-heading rounded-b-xl ">
              Spiderman : No Way Home
            </div>
          </div>
        </div>
        <div className="flex hover:scale-110 ease-out duration-300 font-italic">
          <div
            className={`bg-[url(${Banner})]  h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px] bg-cover  bg-center  flex items-end rounded-xl m-4 `}
          >
            <div className=" text-white py-2 bg-gray-900 w-full text-center bg-opacity-50 b-heading rounded-b-xl ">
              Spiderman : No Way Home
            </div>
          </div>
        </div>
        <div className="flex hover:scale-110 ease-out duration-300 font-italic">
          <div
            className={`bg-[url(${Banner})]  h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px] bg-cover  bg-center  flex items-end rounded-xl m-4 `}
          >
            <div className=" text-white py-2 bg-gray-900 w-full text-center bg-opacity-50 b-heading rounded-b-xl ">
              Spiderman : No Way Home
            </div>
          </div>
        </div>
        <div className="flex hover:scale-110 ease-out duration-300 font-italic">
          <div
            className={`bg-[url(${Banner})]  h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px] bg-cover  bg-center  flex items-end rounded-xl m-4 `}
          >
            <div className=" text-white py-2 bg-gray-900 w-full text-center bg-opacity-50 b-heading rounded-b-xl ">
              Spiderman : No Way Home
            </div>
          </div>
        </div>
        <div className="flex hover:scale-110 ease-out duration-300 font-italic">
          <div
            className={`bg-[url(${Banner})]  h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px] bg-cover  bg-center  flex items-end rounded-xl m-4 `}
          >
            <div className=" text-white py-2 bg-gray-900 w-full text-center bg-opacity-50 b-heading rounded-b-xl ">
              Spiderman : No Way Home
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
