import React from "react";
import {Link} from "react-router-dom";
import Navbar from "./navbar";

function Layout({ children }) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>&copy; Ваше приложение, {new Date().getFullYear()}</footer>
    </div>
  );
}

export default Layout;
