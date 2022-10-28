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
            <a>Home Page</a>
         </NavLink>
         <NavLink 
            to="/championspage"
            exact
            style={linkStyles}
            activeStyle={{ background: "black", }}>
            <a>Champions Page</a>
         </NavLink>
         <NavLink 
            to="/newcontestantform"
            exact
            style={linkStyles}
            activeStyle={{ background: "black", }}>
            <a>Add New Champion</a>
         </NavLink>
         <NavLink 
            to="/wordsanddefinitions"
            exact
            style={linkStyles}
            activeStyle={{ background: "black", }}>
            <a>All winning words</a>
         </NavLink>
      </div>
    </header>
  );
}


export default NavBar;

