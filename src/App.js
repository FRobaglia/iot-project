import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/***** COMPONENTS *****/
import Home from './routes/Home';
import Graphs from './routes/Graphs';
import Settings from './routes/Settings';
import Help from './routes/Help';
import Nav from './components/nav/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home" component={ Home }/>
          <Route exact path="/graphs" component={ Graphs }/>
          <Route exact path="/settings" component={ Settings }/>
          <Route exact path="/help " component={ Help }/>
        </Switch>
        <Nav></Nav>
      </Router>
    </div>
  );
}

export default App;
