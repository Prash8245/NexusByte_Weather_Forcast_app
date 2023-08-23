import { Route, Routes } from 'react-router-dom';
import './App.css';
import Forcastinfo from './Components/Forcastinfo';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}  />
          <Route path="info" element={<Forcastinfo />} />
        </Routes>   
    </div>
  );
}

export default App;
