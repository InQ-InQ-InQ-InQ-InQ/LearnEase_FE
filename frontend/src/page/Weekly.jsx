import React, { useState } from 'react';
import styles from '../style/Weekly.module.css';
import SideBar from '../component/SideBar';
import Header from '../component/Header';
import DayInfo from '../component/DayInfo';
import AddTask from './AddTask';

const Weekly = () => {
  const [addTask, setAddTask] = useState(false);

  const taskHandler = () => {
    setAddTask(true);
  };

  const closeAddTaskHandler = () => {
    setAddTask(false);
  };

  const days = [
    { name: 'Mon', tasks: ['4과목-서버프로그램 구현', '4과목-프로그래밍언어 활용'] },
    { name: 'Tue', tasks: [] },
    { name: 'Wed', tasks: ['4과목-응용SW 기초기술 활용', '5과목-소프트웨어 개발방법론 활용'] },
    { name: 'Thu', tasks: [] },
    { name: 'Fri', tasks: ['5과목-IT프로젝트 정보시스템 구축관리', '5과목-시스템 보안 구축'] },
    { name: 'Sat', tasks: [] },
    { name: 'Sun', tasks: [] },
  ];

  return (
    <div className={styles.viewport}>
      <SideBar currentPage={2} />
      <div className={styles.container}>
        <Header />
        <div className={styles.contents}>
          <DayInfo />
          <div className={styles.midwrap}>
            <button type="button" className={styles.addbtn} onClick={taskHandler}>
              Add New Task
            </button>
          </div>
          <div className={styles.mainwrap}>
            {days.map((day) => (
              <div key={day.name} className={styles.day}>
                <div className={styles.dayhead}>{day.name}</div>
                <div className={styles.daycontents}>
                  {day.tasks.map((task, index) => (
                    <div key={`${day.name}-${index}`} className={styles.taskbox}>
                      <input type="checkbox" />
                      <div>{task}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {addTask && <AddTask onClose={closeAddTaskHandler} />}
    </div>
  );
};

export default Weekly;
