import { useState } from "react";
import Header from "./Home/Home/Header";
import { Outlet } from "react-router-dom";
import bgLogo from "./assets/bg_logo.jpg";
import Footer from "./Home/Footer";

function App() {
  return (
    <div
      className=" max-w-7xl mx-auto borderbg-gray-600 bg-cover bg-fixed bg-opacity-50  bg-blend-multiply "
      style={{ backgroundImage: `url(${bgLogo})` }}
    >
      <Header></Header>
      <div className="my-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
