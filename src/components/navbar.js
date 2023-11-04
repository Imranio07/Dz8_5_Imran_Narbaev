import React from "react";
import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => isActive ? 'active-link' : '';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/createForm" className={activeLink({ isActive: false })}>Create New Post</NavLink></li>
        <li><NavLink to="/postList" className={activeLink({ isActive: true })}>Post List</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
