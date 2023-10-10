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
        <Route path="/" element={<Navigate to="/api/signup" />} />
        <Route exact path="/api/login" element={<Login />} />
        <Route exact path="/api/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
