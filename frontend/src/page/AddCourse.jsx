import React from 'react';
import styles from '../style/AddCourse.module.css';

const AddCourse = () => (
  <div className={styles.screen}>
    <div className={styles.addscreen}>
      <button type="button" className={styles.out}>X</button>
      <div className={styles.box}>
        <p className={styles.text}>도서 및 강의명</p>
        <input type="text" className={styles.input1} placeholder="도서 및 강의명을 입력해주세요" />
        <div className={styles.innerbox}>
          <p className={styles.text}>챕터</p>
          <div className={styles.wrap}>
            <p className={styles.text}>Chapter 1</p>
            <input type="text" className={styles.input2} placeholder="소제목을 입력해주세요" />
            <button type="button">-</button>
          </div>
          <div className={styles.wrap}>
            <p className={styles.text}>Chapter 1</p>
            <input type="text" className={styles.input2} placeholder="소제목을 입력해주세요" />
            <button type="button">-</button>
          </div>
        </div>
        <button type="button">챕터 추가하기</button>
      </div>
    </div>
  </div>
    );
export default AddCourse;
