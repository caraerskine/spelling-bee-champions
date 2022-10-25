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
      <div>
         <h1>Welcome to BEESPN: Scripps Spelling Bee Champions from the past 100 years</h1><img src="https://i.postimg.cc/C1fyLNkp/bee-banner.png" alt="My BEESPN logo"/>
      </div>
         <NavLink 
            to="/newchampionform"
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
      </div>
    </header>
  );
}


export default NavBar;

//exampls from PLantsy
//<span className="logo">🌱</span>