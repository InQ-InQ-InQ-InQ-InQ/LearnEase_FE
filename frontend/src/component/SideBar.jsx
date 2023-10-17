import React from 'react';
import { RxDoubleArrowRight } from 'react-icons/rx';
import styles from '../style/SideBar.module.css';

function SideBar() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.wrap}>
          <div className={styles.head}>
            <p className={styles.text}>LearEase</p>
            <div className={styles.arrowicon}><RxDoubleArrowRight /></div>
          </div>
          <nav className={styles.navigation}>
            <a href="/today" className={styles.menu}>
              <i />
              <p>Today</p>
            </a>
            <a href="/weekly" className={styles.menu}>
              <i />
              <p>Weekly</p>
            </a>
            <a href="/plan" className={styles.menu}>
              <i />
              <p>Make Plan</p>
            </a>
            <a href="/community" className={styles.menu}>

              <i />
              <p>Community</p>

            </a>
          </nav>
        </div>
        <hr />
        <div>
          <nav className={styles.navigation}>
            <a href="/setting" className={styles.menu}>
              <i />
              <p>Setting</p>
            </a>
            <a href="/profile" className={styles.menu}>
              <i />
              <p>My Page</p>
            </a>
          </nav>
        </div>
      </div>
    );
}
export default SideBar;
