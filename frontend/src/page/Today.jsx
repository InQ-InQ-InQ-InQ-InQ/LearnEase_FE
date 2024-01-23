import React, { useState } from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import Header from '../component/Header';
import SideBar from '../component/SideBar';
import styles from '../style/Today.module.css';
import AddTask from './AddTask';
import DayInfo from '../component/DayInfo';

const Remove = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  margin-right: 40px;
`;

const Value1 = styled.div`
  width: 100px;
  text-align: left;
`;

const Value2 = styled.div`
  width: 250px;
  text-align: left;
`;

function Today() {
  const [addTask, setAddTask] = useState(false);
  const [tasks] = useState([
    { id: 1, category: '자격증', content: 'Chapter1. 요구사항 확인하기' },
    { id: 2, category: '자격증', content: 'Chapter2. 설계하기' },
    { id: 3, category: '프로젝트', content: '프로젝트 A 완료하기' },
  ]);

  const taskHandler = () => {
    setAddTask(true);
  };

  return (
    <div className={styles.viewport}>
      <SideBar currentPage={1} />
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
            <div className={styles.top}>
              <p className={styles.toptext}>Category</p>
              <p className={styles.toptext}>Task</p>
            </div>
            {/* 정보 가져오기 */}
            {tasks.map((task) => (
              <div key={task.id} className={styles.taskwrap} style={{ position: 'relative' }}>
                <input type="checkbox" className={styles.check} />
                <Value1 className={styles.value}>{task.category}</Value1>
                <Value2 className={styles.value}>{task.content}</Value2>
                <Remove>
                  <MdDelete />
                </Remove>
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
