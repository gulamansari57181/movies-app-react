import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Movies from "./components/Movies";
import Pagination from "./components/Pagination";
import Favourites from "./components/Favourites";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar> </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Herosection></Herosection>
              <Movies></Movies>
              <Pagination></Pagination>
            </>
          }
        ></Route>
        <Route path="/favourites" element={<Favourites></Favourites>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
