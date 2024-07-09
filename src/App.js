import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import backgroundImage from "../src/Image/background-image1.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Academy from "./Components/Academy/Academy";
import DropDownContent from "./Components/Article/DropDownContent";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="Header-fixed">
            <Header />
          </div>
          <img src={backgroundImage} className="background-image" alt="" />
          <Routes>
            <Route path="/" element={<Academy />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
