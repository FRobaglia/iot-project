import { BrowserRouter as Router, Link } from 'react-router-dom';

/***** COMPONENTS *****/
import Icon from './Icon';

const LogOut = ({ iconId, iconClass }) =>  {

  return (
    <Router>
      <Link to="/login" className="navLogOut">
        <Icon iconId='logOut' iconClass='navLogOut__icon'></Icon>
        <p className="navLogOut__text">Se déconnecter</p>
      </Link>
    </Router>
  ); 
}

export default LogOut;