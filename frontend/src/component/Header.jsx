import React from 'react';
import styles from '../style/Header.module.css';

function Header() {
    return (
      <div className={styles.miniinfo}>
        <div className={styles.headwrap}>
          <p className={styles.nickname}>닉네임</p>
          <p className={styles.logout}>Logout</p>
        </div>
      </div>
    );
}
export default Header;
