import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Router/Router.jsx';


function App() {
  return (
    <div className="App">
       < Link to="/">Welcome</Link>
             <br/>
            < Link to="/HouseA_Tropical">House A - Tropical</Link>
            <br/>
            < Link to="/HouseB_Aroids">House B - Aroids</Link>
      <Router>
      <Switch>
      <Navigation/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
