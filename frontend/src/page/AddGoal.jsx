import React from 'react';
import styles from '../style/AddGoal.module.css';

const AddGoal = () => (
  <div className={styles.screen}>
    <div className={styles.addscreen}>
      <button type="button" className={styles.out}>X</button>
      <div>
        <p>자격증 새로 등록하기</p>
        <div>
          <p>자격증 명</p>
          <input type="text" />
        </div>
        <button type="button">자격증 등록하기</button>
      </div>
    </div>
  </div>
    );
export default AddGoal;
