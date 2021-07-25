import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { isBrowser } from 'react-device-detect';

/***** COMPONENTS *****/
import Home from './routes/Home';
import Graphs from './routes/Graphs';
import Settings from './routes/Settings';
import Help from './routes/Help';
import Login from './routes/Login';
import Nav from './components/nav/index';

/***** SWIPER *****/
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.scss"

import './styles/styles.scss';

function App() {
  return (
    <div className={'App ' + (isBrowser ? 'App--desktop' : '')}>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/graphs" component={ Graphs }/>
          <Route exact path="/settings" component={ Settings }/>
          <Route exact path="/help" component={ Help }/>
          <Route exact path="/login " component={ Login }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
