import './App.css';
import HouseATropical from './components/greenhouse/single-houses/HouseATropical';
import Link from 'react-router-dom';

function App() {
  return (
    <div className="App">
      < Link to="/HouseA_Tropical">Greenhouse</Link>
    </div>
  );
}

export default App;
