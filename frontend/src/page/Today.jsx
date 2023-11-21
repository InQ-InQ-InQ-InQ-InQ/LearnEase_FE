import React, { useState } from 'react';
import Header from '../component/Header';
import SideBar from '../component/SideBar';
import styles from '../style/Today.module.css';
import AddTask from './AddTask';

function Today() {
  const today = new Date();
  const [addTask, setAddTask] = useState(false);

  const formattedDate = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}`;

  const taskHandler = () => {
    setAddTask(true);
  };

    return (
      <div className={styles.viewport}>
        <SideBar currentPage={1} />
        <div className={styles.container}>
          <Header />
          <div className={styles.contents}>
            <div className={styles.headwrap}>
              <p className={styles.date}>{formattedDate}</p>
              {/* 정보 가져오기 */}
              <div className={styles.info}>
                <div className={styles.date}>D-45</div>
                <div className={styles.title}>정보처리기사실기</div>
              </div>
            </div>
            <div className={styles.midwrap}>
              <button type="button" className={styles.addbtn} onClick={taskHandler}>Add New Task</button>
            </div>
            <div className={styles.mainwrap}>
              <div className={styles.top}>
                <p className={styles.toptext}>Category</p>
                <p className={styles.toptext}>Task</p>
              </div>
              {/* 정보 가져오기 */}
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
        {addTask && <AddTask />}
      </div>
    );
}
export default Today;
