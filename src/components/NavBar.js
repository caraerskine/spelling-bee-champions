import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "240px",
  padding: "12px",
  margin: "0 8px 8px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <header>
      <div>
      <NavLink 
            to="/"
            exact
            style={linkStyles}
            activeStyle={{ background: "black", }}>
            Home Page
         </NavLink>
         <NavLink 
            to="/championspage"
            exact
            style={linkStyles}
            activeStyle={{ background: "black", }}>
            Champions Page
         </NavLink>
         <NavLink 
            to="/newcontestantform"
            exact
            style={linkStyles}
            activeStyle={{ background: "black", }}>
            Add New Champion
         </NavLink>
         <NavLink 
            to="/wordsanddefinitions"
            exact
            style={linkStyles}
            activeStyle={{ background: "black", }}>
            All winning words and definitions
         </NavLink>
      </div>
    </header>
  );
}


export default NavBar;

