import "./App.scss";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Geo from "./Components/Geo";
import React from "react";


function App() {


  return (
    <div className="App">
      <Home />
      <About />
        <Geo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
