import React, { useState } from "react";

function Pagination() {
  function goBehind() {
    if (pageNo > 0) {
      setPageNo(pageNo - 1);
    }
  }
  let [pageNo, setPageNo] = useState(10);
  return (
    <div className="  w-full flex justify-center mb-12 ">
      <button
        className="border-2 p-2  text-indigo-400 border-indigo-400 border-r-0 rounded-l-xl"
        onClick={goBehind}
      >
        {" "}
        Previous
      </button>
      <button className="border-2 p-2 text-indigo-400 border-indigo-400 p-2 border-r-0  bg-gray-100">
        {pageNo}
      </button>
      <button
        className="border-2 p-2 pl-6 pr-6 text-indigo-400 border-indigo-400 p-2 rounded-r-xl"
        onClick={() => setPageNo(pageNo + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
