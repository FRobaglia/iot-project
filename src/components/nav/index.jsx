import React, { useState } from "react";

/***** COMPONENTS *****/
import NavItem from './NavItem';

const Nav = () =>  {
  const [selected, setSelected] = useState("Home")

  function handleChange(selected) {
    setSelected(selected)
  }

  return (
    <nav className="nav">
      <ul className="navList">
        <NavItem onChange={handleChange} selected={selected} link="" title="Home" iconId="home"></NavItem>
        <NavItem onChange={handleChange} selected={selected} link="graphs" title="Graphs" iconId="graphs"></NavItem>
        <NavItem onChange={handleChange} selected={selected} link="settings" title="Settings" iconId="settings"></NavItem>
        <NavItem onChange={handleChange} selected={selected} link="help" title="Help" iconId="help"></NavItem>
      </ul>
    </nav>
  ); 
}

export default Nav;