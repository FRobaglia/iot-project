import { Link } from 'react-router-dom';
import { isBrowser } from 'react-device-detect';

/***** COMPONENTS *****/
import NavIcon from './NavIcon';
import NavTitle from './NavTitle';

const NavItem = ({ link, title, iconId}) =>  {
  return (
    <li className="navItem">
      <Link to={ link } className="navItem__link">
        <NavIcon iconId={ iconId }></NavIcon>
        { isBrowser ? <NavTitle title={ title }></NavTitle> : "" }
      </Link>
    </li>
  ); 
}

export default NavItem;