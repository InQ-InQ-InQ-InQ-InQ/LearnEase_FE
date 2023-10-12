import React from 'react';
import styles from '../style/Login.module.css';
import sample from '../img/sample.png';

function Login() {
  return (
    <div className={styles.viewport}>
      <div className={styles.box}>
        <img src={sample} alt="" />
        <div className={styles.contents}>
          <div className={styles.header}>
            <div className={styles.headerwrap}>
              <p>Don&apost have an account?</p>
              <a href="/signup">
                <button type="button" className={styles.signUpBtn}>
                  Sign Up
                </button>
              </a>
            </div>
          </div>
          <div className={styles.main}>
            <input
              type="emil"
              className={styles.input}
              placeholder="Enter Your Email"
            />
            <input
              type="password"
              className={styles.input}
              placeholder="Enter Your Password"
            />
          </div>
          <div className={styles.footer}>
            <button type="button" className={styles.signInBtn}>
              Sign In
            </button>
            <p>Forgot password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
