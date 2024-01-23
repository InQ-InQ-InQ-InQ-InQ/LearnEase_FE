import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsSun } from 'react-icons/bs';
import { AiOutlineCalendar, AiOutlineThunderbolt } from 'react-icons/ai';
import { TfiWorld } from 'react-icons/tfi';
import { FiSettings } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';
import styles from '../style/SideBar.module.css';

function SideBar() {
  const sidebar = 'absolute top-0 border-1 border-lightgray shadow-xl bg-white w-300';
  const activeMenu = {
    color: '#834741',
    fontWeight: 700,
  };

  return (
    <div className={styles.frame}>
      <div className={styles.wrapping}>
        <nav className={sidebar}>
          <div className={styles.wrap}>
            <div className={styles.head}>
              <p className={styles.text}>LearnEase</p>
            </div>
            <nav className={styles.navigation}>
              <a href="/api/today" className={styles.menu}>
                <NavLink style={({ isActive }) => (isActive ? activeMenu : {})} to="/api/today" className="flex items-center">
                  <BsSun />
                  <div className="ml-5 -mt-1">Today</div>
                </NavLink>
              </a>
              <a href="/api/weekly" className={styles.menu}>
                <NavLink style={({ isActive }) => (isActive ? activeMenu : {})} to="/api/weekly" className="flex items-center">
                  <AiOutlineCalendar />
                  <div className="ml-5 -mt-1">Weekly</div>
                </NavLink>
              </a>
              <a href="/api/plan" className={styles.menu}>
                <NavLink style={({ isActive }) => (isActive ? activeMenu : {})} to="/api/plan" className="flex items-center">
                  <AiOutlineThunderbolt />
                  <div className="ml-5 -mt-1">Make Plan</div>
                </NavLink>
              </a>
              <a href="/api/community" className={styles.menu}>
                <NavLink style={({ isActive }) => (isActive ? activeMenu : {})} to="/api/community" className="flex items-center">
                  <TfiWorld />
                  <div className="ml-5 -mt-1">Community</div>
                </NavLink>
              </a>
            </nav>
          </div>
          <hr />
          <div className={styles.wrap}>
            <nav className={styles.navigation}>
              <a href="/api/setting" className={styles.menu}>
                <NavLink style={({ isActive }) => (isActive ? activeMenu : {})} to="/api/setting" className="flex items-center">
                  <FiSettings />
                  <div className="ml-5 -mt-1">Setting</div>
                </NavLink>
              </a>
              <a href="/api/profile" className={styles.menu}>
                <NavLink style={({ isActive }) => (isActive ? activeMenu : {})} to="/api/profile" className="flex items-center">
                  <FaRegUser />
                  <div className="ml-5 -mt-1">My Page</div>
                </NavLink>
              </a>
            </nav>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
