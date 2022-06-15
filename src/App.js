import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Movies from "./components/Movies";
import Pagination from "./components/Pagination";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <Movies></Movies>
      <Pagination></Pagination>
    </>
  );
}

export default App;
