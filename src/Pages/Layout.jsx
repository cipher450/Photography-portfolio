import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <>
    
      <Navbar />
     
      <Outlet />
      <footer>
        <h1>
          coded & designed by{" "}
          <a href="https://cipher450.github.io/Personal-website/">Mustapha</a>
        </h1>
      </footer>
    </>
  );
};

export default Layout;
