import React, { useState } from 'react';
import axios from 'axios';
import styles from '../style/AddTask.module.css';

function AddTask() {
  const accessToken = sessionStorage.getItem('accessToken');
  const [category, setCategory] = useState('');
  const [task, setTask] = useState('');
  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const saveTask = async () => {
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      const formattedTime = currentDate.toLocaleTimeString();

      const response = await axios.post(
        '/task',
        {
          name: task,
          date: formattedDate,
          time: formattedTime,
          category,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log('Task 저장 성공: ', response.data);
      setModalVisible(false); // 성공적으로 저장되면 모달 닫는다.
    } catch (error) {
      console.log('Task 저장 실패', error);
      alert('Task 저장에 실패하였습니다');
    }
  };

  return (
    <div>
      {modalVisible && (
        <div className={styles.screen}>
          <div className={styles.addtaskscreen}>
            <button type="button" className={styles.out} onClick={closeModal}>
              X
            </button>
            <div className={styles.wrap}>
              <div className={styles.addtaskscreen}>
                <button type="button" className={styles.out} onClick={closeModal}>
                  X
                </button>
                <div className={styles.wrap}>
                  <div className={styles.box}>
                    <p className={styles.text}>Category</p>
                    <div className={styles.taskwrap}>
                      <input type="text" className={styles.inputtxt} onChange={handleCategoryChange} />
                    </div>
                  </div>
                  <div className={styles.box}>
                    <p className={styles.text}>Task</p>
                    <div className={styles.taskwrap}>
                      <input type="text" className={styles.inputtxt} onChange={handleTaskChange} />
                    </div>
                  </div>
                  <button type="button" className={styles.savebtn} onClick={saveTask}>저장</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddTask;
