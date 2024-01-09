import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../style/Login.module.css';
import sample from '../img/sample.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const setToken = (accessToken) => {
    sessionStorage.setItem('accessToken', accessToken);
    setIsLoggedIn(true);
  };

  const handleLogin = async () => {
    try {
      const account = {
        loginEmail: email,
        loginPassword: password,
      };

      const response = await axios.post('/api/login/auth', account);
      const { accessToken, refreshToken } = response.data;
      setToken(accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);
      alert('로그인 성공');
      navigate('/api/home');
    } catch (error) {
      alert(error.response.data.errorMessage);
    }
  };

  return (
    <div className={styles.viewport}>
      <div className={styles.box}>
        <img src={sample} alt="" />
        <div className={styles.contents}>
          <div className={styles.header}>
            <div className={styles.headerwrap}>
              <p className={styles.pText}> Don&apos;t have an account? </p>
              <a href="/api/signup">
                <button type="button" className={styles.signUpBtn}>
                  Sign Up
                </button>
              </a>
            </div>
          </div>
          <div className={styles.main}>
            <input
              type="email"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
            <input
              type="password"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
            />
          </div>
          <div className={styles.footer}>
            <button type="button" className={styles.signInBtn} onClick={handleLogin}>
              Sign In
            </button>
            <p className={styles.pText}>Forgot Password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
