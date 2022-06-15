import React from "react";

function Pagination() {
  return (
    <div className="  w-full flex justify-center mb-12 ">
      <button className="border-2 p-2  text-indigo-400 border-indigo-400 border-r-0 rounded-l-xl ">
        {" "}
        Previous
      </button>
      <button className="border-2 p-2 text-indigo-400 border-indigo-400 p-2 border-r-0  bg-gray-100">
        1
      </button>
      <button className="border-2 p-2 pl-6 pr-6 text-indigo-400 border-indigo-400 p-2 rounded-r-xl">
        Next
      </button>
    </div>
  );
}

export default Pagination;
