import React, { useState } from 'react';
import axios from 'axios';
import Header from '../component/Header';
import SideBar from '../component/SideBar';
import styles from '../style/Today.module.css';
import AddTask from './AddTask';
import DayInfo from '../component/DayInfo';

function Today() {
  const accessToken = sessionStorage.getItem('accessToken');
  const [addTask, setAddTask] = useState(false); // task 추가
  const [tasks, setTasks] = useState([
    { id: 1, category: '자격증', content: 'Chapter1. 요구사항 확인하기' },
    { id: 2, category: '자격증', content: 'Chapter2. 설계하기' },
    { id: 3, category: '프로젝트', content: '프로젝트 A 완료하기' },
  ]);

  const taskHandler = () => {
    setAddTask(true);
  };

  const deleteTask = async (taskId) => {
    const isConfirmed = window.confirm('삭제하시겠습니까?');

    if (isConfirmed) {
      try {
        await axios.delete('/task', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
      } catch (error) {
        console.log('Task 삭제 실패', error);
      }
    }
  };

    return (
      <div className={styles.viewport}>
        <SideBar currentPage={1} />
        <div className={styles.container}>
          <Header />
          <div className={styles.contents}>
            <DayInfo />
            <div className={styles.midwrap}>
              <button type="button" className={styles.addbtn} onClick={taskHandler}>Add New Task</button>
            </div>
            <div className={styles.mainwrap}>
              <div className={styles.top}>
                <p className={styles.toptext}>Category</p>
                <p className={styles.toptext}>Task</p>
                <p className={styles.toptext}>Edit / Delete</p>
              </div>
              {/* 정보 가져오기 */}
              {tasks.map((task) => (
                <div key={task.id} className={styles.taskwrap}>
                  <input type="checkbox" className={styles.check} />
                  <div className={styles.value}>{task.category}</div>
                  <div className={styles.value}>{task.content}</div>
                  <div><input type="button" className={styles.editbtn} value="수정" /></div>
                  <div><input type="button" className={styles.removebtn} value="삭제" onClick={deleteTask} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {addTask && <AddTask />}
      </div>
    );
}
export default Today;
