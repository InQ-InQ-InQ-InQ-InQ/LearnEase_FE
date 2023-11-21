import React from 'react';
import styles from '../style/AddGoal.module.css';

const AddGoal = () => (
  <div className={styles.screen}>
    <div className={styles.addscreen}>
      <button type="button" className={styles.out}>X</button>
      <div className={styles.box}>
        <p className={styles.text1}>자격증 새로 등록하기</p>
        <div className={styles.wrap}>
          <p className={styles.text2}>자격증 명</p>
          <input type="text" className={styles.input} />
        </div>
        <input type="submit" className={styles.submitbtn} value="자격증 등록하기" />
      </div>
    </div>
  </div>
    );
export default AddGoal;
