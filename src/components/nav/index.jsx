/***** COMPONENTS *****/
import NavItem from './NavItem';

const Nav = () =>  {

  return (
    <nav className="nav">
      <ul className="navList">
        <NavItem link="" title="Home" iconId="home"></NavItem>
        <NavItem link="graphs" title="Graphs" iconId="graphs"></NavItem>
        <NavItem link="settings" title="Settings" iconId="settings"></NavItem>
        <NavItem link="help" title="Help" iconId="help"></NavItem>
      </ul>
    </nav>
  ); 
}

export default Nav;