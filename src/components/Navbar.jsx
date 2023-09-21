import React from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <div>MindQuiz</div>
      <nav>
        <NavLink to={"/"}> Início </NavLink>
        <NavLink to={"quiz"}> Quizes </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
