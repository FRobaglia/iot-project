import { Link } from 'react-router-dom';

/***** COMPONENTS *****/
import NavIcon from './NavIcon';
import NavTitle from './NavTitle';

const NavItem = ({ link, title }) =>  {

  return (
    <li className="navItem">
      <Link to={ link } className="navItem__link">
        <NavIcon></NavIcon>
        <NavTitle title={ title }></NavTitle>
      </Link>
    </li>
  ); 
}

export default NavItem;