import React, { useState } from 'react';

/***** COMPONENTS *****/
import NavItem from './NavItem';
import Icon from '../Icon';
import LogOutCta from '../LogOutCta';

const Nav = () =>  {
  const [selected, setSelected] = useState('Accueil')

  function handleChange(selected) {
    setSelected(selected)
  }

  return (
    <nav className="nav">
      <Icon iconId='logoName' iconClass='navLogo'></Icon>
      <ul className="navList">
        <NavItem onChange={handleChange} selected={selected} link='' title='Accueil' iconId='home'></NavItem>
        <NavItem onChange={handleChange} selected={selected} link='statistiques' title='Statistiques' iconId='graphs'></NavItem>
        <NavItem onChange={handleChange} selected={selected} link='systeme' title='Système' iconId='settings'></NavItem>
        <NavItem onChange={handleChange} selected={selected} link='aide' title='Aide' iconId='help'></NavItem>
      </ul>
      <LogOutCta></LogOutCta>
    </nav>
  ); 
}

export default Nav;