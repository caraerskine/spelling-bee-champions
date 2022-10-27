import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
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
            Winning words and definitions
         </NavLink>
         <NavLink 
            to="/home"
            exact
            style={linkStyles}
            activeStyle={{ background: "black", }}>
            Champions Page
         </NavLink>
      </div>
    </header>
  );
}


export default NavBar;

