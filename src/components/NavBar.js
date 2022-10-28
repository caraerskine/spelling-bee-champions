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
            <p>Home Page</p>
         </NavLink>
         <NavLink 
            to="/championspage"
            exact
            style={linkStyles}
            activeStyle={{ background: "black", }}>
            <p>Champions Page</p>
         </NavLink>
         <NavLink 
            to="/newcontestantform"
            exact
            style={linkStyles}
            activeStyle={{ background: "black", }}>
            <p>Add New Champion</p>
         </NavLink>
         <NavLink 
            to="/wordsanddefinitions"
            exact
            style={linkStyles}
            activeStyle={{ background: "black", }}>
            <p>All winning words</p>
         </NavLink>
      </div>
    </header>
  );
}


export default NavBar;

