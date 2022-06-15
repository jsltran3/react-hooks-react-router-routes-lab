import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navLinksList = [
    <NavLink to="/">Home</NavLink>,
    <NavLink to="/movies">Movies</NavLink>,
    <NavLink to="/directors">Directors</NavLink>,
    <NavLink to="/actors">Actors</NavLink>,
  ]


  return (
  <div className="navbar">
  
    <NavLink to="/">Home</NavLink>
    <NavLink to="/movies">Movies</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to="/actors">Actors</NavLink>
  
  </div>

  );
}

export default NavBar;

// {navLinksList.map((links) => (
//   <li>
//     {links}
//   </li>
// ))}
// *****
// <li>
// <NavLink to="/">Home</NavLink>
// <li>
// <NavLink to="/movies">Movies</NavLink>
// </li>

// <NavLink to="/directors">Directors</NavLink>
// <NavLink to="/actors">Actors</NavLink>
// </li>
// *****

// material ui 
// check out 
// listeitembutton
// material.io
// mui<--
// alibaba ent group