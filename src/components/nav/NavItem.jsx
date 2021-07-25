import { Link } from 'react-router-dom';

/***** COMPONENTS *****/
import Icon from '../Icon';
import NavTitle from './NavTitle';
 
const NavItem = ({ link, title, iconId, selected, onChange }) =>  {

  function handleChange(title) {
    onChange(title)
  }

  let selectedClass = (selected === title) ? " navItem--selected" : ""

  return (
    <li className={ "navItem" + selectedClass } onClick={() => { handleChange(title) }}>
      <Link to={ link } className="navItem__link">
        <Icon iconId={ iconId } iconClass='navItem__icon'></Icon>
        <NavTitle title={ title } ></NavTitle>
      </Link>
    </li>
  ); 
}

export default NavItem;