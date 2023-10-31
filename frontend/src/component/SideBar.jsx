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
              <button type="button" className={styles.arrowicon} onClick={sideHandler}>{sideOpen ? '<<' : '>>'}</button>
            </div>
            <nav className={styles.navigation}>
              <a href="/today" className={styles.menu}>
                <BsSun />
                <div className={`${styles.mtext}${currentPage === 1 ? styles['font-black'] : ''}`}>Today</div>
              </a>
              <a href="/weekly" className={styles.menu}>
                <AiOutlineCalendar />
                <div className={`${styles.mtext}${currentPage === 2 ? styles['font-black'] : ''}`}>Weekly</div>
              </a>
              <a href="/plan" className={styles.menu}>
                <AiOutlineThunderbolt />
                <div className={`${styles.mtext}${currentPage === 3 ? styles['font-black'] : ''}`}>Make Plan</div>
              </a>
              <a href="/community" className={styles.menu}>

                <TfiWorld />
                <div className={`${styles.mtext}${currentPage === 4 ? styles['font-black'] : ''}`}>Community</div>

              </a>
            </nav>
          </div>
          <hr />
          <div className={styles.wrap}>
            <nav className={styles.navigation}>
              <a href="/setting" className={styles.menu}>
                <FiSettings />
                <div className={`${styles.mtext}${currentPage === 5 ? styles['font-black'] : ''}`}>Setting</div>
              </a>
              <a href="/profile" className={styles.menu}>
                <FaRegUser />
                <div className={`${styles.mtext}${currentPage === 6 ? '' : 'active'}`}>My Page</div>
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
