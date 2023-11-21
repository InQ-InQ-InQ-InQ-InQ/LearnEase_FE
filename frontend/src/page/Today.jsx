import React, { useState } from 'react';
import axios from 'axios';
import Header from '../component/Header';
import SideBar from '../component/SideBar';
import styles from '../style/Today.module.css';
import AddTask from './AddTask';

function Today() {
  const accessToken = sessionStorage.getItem('accessToken');
  const today = new Date();
  const [addTask, setAddTask] = useState(false); // task 추가
  const [tasks, setTasks] = useState([
    { id: 1, category: '자격증', content: 'Chapter1. 요구사항 확인하기' },
    { id: 2, category: '자격증', content: 'Chapter2. 설계하기' },
    { id: 3, category: '프로젝트', content: '프로젝트 A 완료하기' },
  ]);

  const formattedDate = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}`;

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
