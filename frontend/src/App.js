import logo from './logo.svg';
import './App.css';
import Login from './Login';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
