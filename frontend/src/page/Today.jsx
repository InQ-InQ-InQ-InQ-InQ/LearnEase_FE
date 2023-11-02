import React from 'react';
import Header from '../component/Header';
import SideBar from '../component/SideBar';
import styles from '../style/Today.module.css';

function Today() {
    return (
      <div className={styles.viewport}>
        <SideBar currentPage={1} />
        <div className={styles.container}>
          <Header />
          <div className={styles.contents}>
            <div className={styles.headwrap}>
              <p className={styles.date}>2023.11.02</p>
              <div className={styles.info}>
                <div className={styles.date}>D-45</div>
                <div className={styles.title}>정보처리기사실기</div>
              </div>
            </div>
            <div className={styles.midwrap}>
              <button type="button" className={styles.addbtn}>Add New Task</button>
            </div>
            <div className={styles.mainwrap}>
              <div className={styles.top}>
                <p>Category</p>
                <p>Task</p>
              </div>
              <div className={styles.taskwrap}>
                <input type="checkbox" className={styles.check} />
                <div className={styles.value}>자격증</div>
                <div className={styles.value}>Chapter1. 요구사항 확인하기</div>
              </div>
              <div className={styles.taskwrap}>
                <input type="checkbox" className={styles.check} />
                <div className={styles.value}>자격증</div>
                <div className={styles.value}>Chapter1. 요구사항 확인하기</div>
              </div>
              <div className={styles.taskwrap}>
                <input type="checkbox" className={styles.check} />
                <div className={styles.value}>자격증</div>
                <div className={styles.value}>Chapter1. 요구사항 확인하기</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Today;
