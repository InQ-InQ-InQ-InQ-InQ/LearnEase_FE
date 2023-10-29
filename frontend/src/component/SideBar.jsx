import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsSun } from 'react-icons/bs';
import { AiOutlineCalendar, AiOutlineThunderbolt } from 'react-icons/ai';
import { TfiWorld } from 'react-icons/tfi';
import { FiSettings } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';
import styles from '../style/SideBar.module.css';

function SideBar({ currentPage }) {
  const [sideOpen, setSideOpen] = useState(false);

  const sideHandler = () => {
    setSideOpen(!sideOpen);
  };

    return (
      <div className={styles.frame}>
        <nav className={`${styles.sidebar}${sideOpen ? 'active' : ''}`}>
          <div className={styles.wrap}>
            <div className={styles.head}>
              <p className={styles.text}>LearEase</p>
              <button type="button" className={styles.arrowicon} onClick={sideHandler}>{sideOpen ? '>>' : '<<'}</button>
            </div>
            <nav className={styles.navigation}>
              <a href="/today" className={`${styles.menu} ${currentPage === 1 ? styles['font-semibold'] : ''}`}>
                <BsSun />
                <div className={styles.mtext}>Today</div>
              </a>
              <a href="/weekly" className={`${styles.menu} ${currentPage === 2 ? styles['font-semibold'] : ''}`}>
                <AiOutlineCalendar />
                <div className={styles.mtext}>Weekly</div>
              </a>
              <a href="/plan" className={`${styles.menu} ${currentPage === 3 ? styles['font-semibold'] : ''}`}>
                <AiOutlineThunderbolt />
                <div className={styles.mtext}>Make Plan</div>
              </a>
              <a href="/community" className={`${styles.menu} ${currentPage === 4 ? styles['font-semibold'] : ''}`}>

                <TfiWorld />
                <div className={styles.mtext}>Community</div>

              </a>
            </nav>
          </div>
          <hr />
          <div className={styles.wrap}>
            <nav className={styles.navigation}>
              <a href="/setting" className={`${styles.menu} ${currentPage === 5 ? styles['font-semibold'] : ''}`}>
                <FiSettings />
                <div className={styles.mtext}>Setting</div>
              </a>
              <a href="/profile" className={`${styles.menu} ${currentPage === 6 ? styles['font-semibold'] : ''}`}>
                <FaRegUser />
                <div className={styles.mtext}>My Page</div>
              </a>
            </nav>
          </div>
        </nav>
      </div>
    );
}
SideBar.propTypes = {
  currentPage: PropTypes.number.isRequired,
};
export default SideBar;
