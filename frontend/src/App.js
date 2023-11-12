import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Register" exact element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
