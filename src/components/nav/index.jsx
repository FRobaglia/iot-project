/***** COMPONENTS *****/
import NavItem from './NavItem';

const Nav = () =>  {

  return (
    <nav className="nav">
      <ul className="navList">
        <NavItem link="home" title="Home"></NavItem>
        <NavItem link="graphs" title="Graphs"></NavItem>
        <NavItem link="settings" title="Settings"></NavItem>
        <NavItem link="help" title="Help"></NavItem>
      </ul>
    </nav>
  ); 
}

export default Nav;