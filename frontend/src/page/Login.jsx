import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../style/Login.module.css';
import sample from '../img/sample.png';

function Login() {
  const [email1, setEmail1] = useState('');
  const [password1, setPassword1] = useState('');
  const [setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const setToken = (accessToken) => {
    sessionStorage.setItem('accessToken', accessToken);
    setIsLoggedIn(true);
  };

  const handleLogin = async () => {
    try {
      const account = {
        email: email1,
        password: password1,
      };

      const response = await axios.post('http://44.207.63.226:8080/login', account, {
        headers: {
          Authorization: 'USER',
        },
      });

      const { USER } = response.data;
      sessionStorage.setItem('userId', USER);
      setToken('USER');
      alert('로그인 성공');
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
              <p className={styles.pText1}> Don&apos;t have an account? </p>
              <a href="/api/signup">
                <button type="button" className={styles.signUpBtn}>
                  Sign Up
                </button>
              </a>
            </div>
          </div>
          <div className={styles.main}>
            <input
              type="email1"
              className={styles.input}
              onChange={(e) => setEmail1(e.target.value)}
              placeholder="Enter Your Email"
            />
            <input
              type="password1"
              className={styles.input}
              onChange={(e) => setPassword1(e.target.value)}
              placeholder="Enter Your Password"
            />
          </div>
          <div className={styles.footer}>
            <button type="button" className={styles.signInBtn} onClick={handleLogin}>
              Sign In
            </button>
            <p className={styles.pText2}>Forgot Password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
