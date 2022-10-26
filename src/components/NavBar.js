import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "90px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <header>
      <div>
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
            Words and definitions
         </NavLink>
         <NavLink 
            to="/untitled"
            exact
            style={linkStyles}
            activeStyle={{ background: "black", }}>
            Untitled
         </NavLink>
      </div>
    </header>
  );
}


export default NavBar;

