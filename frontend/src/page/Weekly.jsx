import React, { useState } from 'react';
import styles from '../style/Weekly.module.css';
import SideBar from '../component/SideBar';
import Header from '../component/Header';
import DayInfo from '../component/DayInfo';
import AddTask from './AddTask';

const Weekly = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    const [addTask, setAddTask] = useState(false); // task 추가
    const [days, setDays] = useState([
        { name: 'Mon', tasks: ['a', 'b'] },
        { name: 'Tue', tasks: ['c', 'd'] },
        { name: 'Wed', tasks: ['e', 'f'] },
        { name: 'Thu', tasks: ['g', 'h'] },
        { name: 'Fri', tasks: ['i', 'j'] },
        { name: 'Sat', tasks: ['k', 'l'] },
        { name: 'Sun', tasks: ['m', 'n'] },
    ]);

  const taskHandler = () => {
    setAddTask(true);
  };
    return (
      <div className={styles.viewport}>
        <SideBar currentPage={2} />
        <div className={styles.container}>
          <Header />
          <div className={styles.contents}>
            <DayInfo />
            <div className={styles.midwrap}>
              <button type="button" className={styles.addbtn} onClick={taskHandler}>Add New Task</button>
            </div>
            <div className={styles.mainwrap}>
              {days.map((day) => (
                <div key={day.name} className={styles.day}>
                  <div className={styles.dayhead}>{day.name}</div>
                  <div className={styles.daycontents}>
                    {day.tasks.map((task, taskIndex) => (
                      <>
                        <div className={styles.taskbox}>
                          <input type="checkbox" />
                          <div key={taskIndex}>{task}</div>
                        </div>
                        <br />
                      </>
                        ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {addTask && <AddTask />}
      </div>
    );
};
export default Weekly;
