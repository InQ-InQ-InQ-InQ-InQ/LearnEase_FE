import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Login from './page/Login';
import SignUp from './page/SignUp';
import MyPage from './page/MyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/profile" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
