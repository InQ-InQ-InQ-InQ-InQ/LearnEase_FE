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
import MyPage from './page/MyPage';
import Today from './page/Today';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/api/login" />} />
        <Route exact path="/api/login" element={<Login />} />
        <Route exact path="/api/signup" element={<SignUp />} />
        <Route exact path="/profile" element={<MyPage />} />
        <Route exact path="/today" element={<Today />} />
      </Routes>
    </Router>
  );
}

export default App;
