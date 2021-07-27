import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { isBrowser } from 'react-device-detect';

/***** COMPONENTS *****/
import Home from './routes/Home';
// import Graphs from './routes/Graphs';
import Settings from './routes/Settings';
import Help from './routes/Help';
import Login from './routes/Login';
import Header from './components/Header';
import Nav from './components/nav/index';

/***** SWIPER *****/
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.scss"
import "swiper/components/navigation/navigation.scss"

import './styles/styles.scss';

import HelpRollover from './components/helpRollover/index';

function App() {

  return (
    <div className={'App ' + (isBrowser ? 'App--desktop' : '')}>
      <Router>
        <Header></Header> 
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={ Home }/>
          {/* <Route exact path="/statistiques" component={ Graphs }/> */}
          <Route exact path="/systeme" component={ Settings }/>
          <Route exact path="/aide" component={ Help }/>
          <Route exact path="/login " component={ Login }/>
        </Switch>
        <HelpRollover />
      </Router>
    </div>
  );
}

export default App;
