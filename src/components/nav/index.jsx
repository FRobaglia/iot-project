import React, { useState } from 'react';
import { isBrowser } from 'react-device-detect';

/***** COMPONENTS *****/
import NavItem from './NavItem';
import Icon from '../Icon';
import LogOutCta from '../LogOutCta';

const Nav = () =>  {
  const [selected, setSelected] = useState('Home')

  function handleChange(selected) {
    setSelected(selected)
  }

  return (
    <nav className="nav">
      { isBrowser ? <Icon iconId='logoName' iconClass='navLogo'></Icon> : '' }
      <ul className="navList">
        <NavItem onChange={handleChange} selected={selected} link='' title='Home' iconId='home'></NavItem>
        <NavItem onChange={handleChange} selected={selected} link='graphs' title='Graphs' iconId='graphs'></NavItem>
        <NavItem onChange={handleChange} selected={selected} link='settings' title='Settings' iconId='settings'></NavItem>
        <NavItem onChange={handleChange} selected={selected} link='help' title='Help' iconId='help'></NavItem>
      </ul>
      { isBrowser ? <LogOutCta></LogOutCta> : '' }
    </nav>
  ); 
}

export default Nav;