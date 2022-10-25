import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "60px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
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
            activeStyle={{ background: "darkblue", }} >
            Home
         </NavLink>
         <NavLink 
            to="/container"
            exact
            style={linkStyles}
            activeStyle={{ background: "darkblue", }}>
            Container
         </NavLink>
         <NavLink 
            to="/card"
            exact
            style={linkStyles}
            activeStyle={{ background: "darkblue", }}>
            Card
         </NavLink>
      </div>
      <h1>
        BEESPN
      </h1>
    </header>
  );
}


export default NavBar;