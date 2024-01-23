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
            <div className={styles.header}>
              <span className={styles.new}>Add New Task</span>
              <button type="button" className={styles.out} onClick={closeModal}>
                X
              </button>
            </div>
            <div className={styles.wrapping}>
              <div className={styles.box}>
                <p className={styles.text}>할 일</p>
                <input type="text" className={styles.nicknamewrap} placeholder="일정을 입력해주세요" value={task} onChange={handleTaskChange} />
              </div>
              <div className={styles.box}>
                <p className={styles.text}>카테고리</p>
                <input type="text" className={styles.nicknamewrap} placeholder="카테고리를 입력해주세요" value={category} onChange={handleCategoryChange} />
              </div>
              <div className={styles.box}>
                <p className={styles.text}>일정</p>
                <input type="text" className={styles.nicknamewrap} placeholder="일정을 입력해주세요" />
              </div>
              <button type="button" className={styles.okbtn} onClick={saveTask}>
                일정 등록하기
              </button>
            </div>
            <input type="submit" className={styles.okbtn} onClick={saveTask} value="일정 등록하기" />
          </div>
        </div>
      )}
    </div>
  );
}

export default AddTask;
