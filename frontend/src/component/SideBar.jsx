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

  const sidebar = `absolute top-0 border-1 border-lightgray shadow-xl bg-white w-300 transition-transform duration-500 transform ${sideOpen ? '-translate-x-300' : ''}`;

    return (
      <div className={styles.frame}>
        <div className={styles.wrapping}>
          <nav className={sidebar}>
            <div className={styles.wrap}>
              <div className={styles.head}>
                <p className={styles.text}>LearEase</p>
                <button type="button" className={styles.arrowicon} onClick={sideHandler}>{sideOpen ? '<<' : '>>'}</button>
              </div>
              <nav className={styles.navigation}>
                <a href="/today" className={styles.menu}>
                  <BsSun />
                  <div className={`ml-5 -mt-1 ${currentPage === 1 ? 'text-red' : ''}`}>Today</div>
                </a>
                <a href="/weekly" className={styles.menu}>
                  <AiOutlineCalendar />
                  <div className={`ml-5 -mt-1 ${currentPage === 2 ? 'text-red' : ''}`}>Weekly</div>
                </a>
                <a href="/plan" className={styles.menu}>
                  <AiOutlineThunderbolt />
                  <div className={`ml-5 -mt-1 ${currentPage === 3 ? 'text-red' : ''}`}>Make Plan</div>
                </a>
                <a href="/community" className={styles.menu}>

                  <TfiWorld />
                  <div className={`ml-5 -mt-1 ${currentPage === 4 ? 'text-red' : ''}`}>Community</div>

                </a>
              </nav>
            </div>
            <hr />
            <div className={styles.wrap}>
              <nav className={styles.navigation}>
                <a href="/setting" className={styles.menu}>
                  <FiSettings />
                  <div className={`ml-5 -mt-1 ${currentPage === 5 ? 'text-red' : ''}`}>Setting</div>
                </a>
                <a href="/profile" className={styles.menu}>
                  <FaRegUser />
                  <div className={`ml-5 -mt-1 ${currentPage === 6 ? 'text-red' : ''}`}>My Page</div>
                </a>
              </nav>
            </div>
          </nav>
        </div>
      </div>
    );
}
SideBar.propTypes = {
  currentPage: PropTypes.number.isRequired,
};
export default SideBar;
