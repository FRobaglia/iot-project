import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/styles.scss';

/***** COMPONENTS *****/
import Home from './routes/Home';
import Graphs from './routes/Graphs';
import Settings from './routes/Settings';
import Help from './routes/Help';
import Login from './routes/Login';
import Nav from './components/nav/index';
import Card from './components/cardDashboard/index';

function App() {
  return (
    <div className="App">
      <Card title="Température de l'air" currentValue={21}  optimalMinValue={15} optimalMaxValue={27} dayMinValue={17} dayMaxValue={23} sign="°C" off={false} />
      <Card title="Humidité du sol" currentValue={38}  optimalMinValue={20} optimalMaxValue={45} dayMinValue={18} dayMaxValue={30} sign="%" off={true} />
      <Card title="Luminosité" currentValue={38}  optimalMinValue={20} optimalMaxValue={45} dayMinValue={18} dayMaxValue={30} sign="lx" off={false} />
      <Router>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/graphs" component={ Graphs }/>
          <Route exact path="/settings" component={ Settings }/>
          <Route exact path="/help " component={ Help }/>
          <Route exact path="/login " component={ Login }/>
        </Switch>
        <Nav></Nav>
      </Router>
    </div>
  );
}

export default App;
