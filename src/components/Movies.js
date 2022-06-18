import React, { useState, useEffect } from "react";

import axios from "axios";
// Import to use Loader
import { Oval } from "react-loader-spinner";

import "../App.css";

function Movies() {
  // movies state
  const [movies, setMovies] = useState([0]);

  // After initial rendering if we want to manipulate rendering elements then we use "useEffect"

  useEffect(function () {
    // use axios to show content on console to easily deal API request
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=4e890a7ee45de6530e143a27e60087e1"
      )
      .then((res) => {
        console.table(res.data.results);
        setMovies(res.data.results);
      });
  });
  // End of useEffect

  return (
    // Movies Section
    <div>
      {/* Trendin movie text conatiner */}{" "}
      <div className=" text-center mt-8  text-3xl md:text-5xl  font-bold font-serif ">
        Trending Movies{" "}
      </div>{" "}
      {/* If movies array size is zero then we render loader  else we render array of movies  */}
      {movies.length === 0 ? (
        <div className="flex  justify-center m-8">
          <Oval
            height="100"
            width="100"
            color="indigo"
            secondaryColor="blue"
            ariaLabel="loading"
          />
        </div>
      ) : (
        // End of Loader
        <div className=" flex mb-8 mt-8 flex-wrap justify-center">
          {" "}
          {/* Cards */}
          {/* map function to render each movie  objects to render */}
          {movies.map((movie) => (
            // Movies card container
            <div className="flex  flex-wrap hover:scale-110 ease-out duration-300 font-italic">
              <div
                className={`bg-[url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")]  h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px] bg-cover  bg-center  flex items-end rounded-xl m-4 `}
              >
                <div
                  Helloiv
                  className=" text-white py-2 bg-gray-900 w-full text-center bg-opacity-50 b-heading rounded-b-xl "
                >
                  {movie.title}
                </div>
              </div>
            </div>
            // Ṃovies Card container ends
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;
