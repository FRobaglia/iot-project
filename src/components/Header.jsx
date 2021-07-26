import { BrowserRouter as Router, Link } from 'react-router-dom';

/***** COMPONENTS *****/
import Icon from './Icon';

const Header = () =>  {

  return (
    <header className="header">
      <Router>
        <Link to="">
          <Icon iconId="logo" iconClass="header__logo" />
        </Link>
      </Router>
    </header>
  ); 
}

export default Header;