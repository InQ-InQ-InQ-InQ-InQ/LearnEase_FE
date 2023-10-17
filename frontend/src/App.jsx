import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './App.css';
import './index.css';
import Login from './page/Login';
import SignUp from './page/SignUp';

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
=======
        <Route path="/" element={<Navigate to="/api/signup" />} />
        <Route exact path="/api/login" element={<Login />} />
        <Route exact path="/api/signup" element={<SignUp />} />
>>>>>>> 5487262f75ceddcea2f65b25e405da8432a8b105
      </Routes>
    </Router>
  );
}

export default App;
