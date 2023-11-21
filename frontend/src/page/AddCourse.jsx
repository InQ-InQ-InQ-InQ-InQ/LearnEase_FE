import React from 'react';
import styles from '../style/AddCourse.module.css';

const AddCourse = () => (
  <div className={styles.screen}>
    <div className={styles.addscreen}>
      <button type="button" className={styles.out}>X</button>
      <div>
        <p>도서 및 강의명</p>
        <input type="text" placeholder="도서 및 강의명을 입력해주세요" />
        <div>
          <p>챕터</p>
          <div>
            <p>Chapter 1</p>
            <input type="text" placeholder="소제목을 입력해주세요" />
            <button type="button">-</button>
          </div>
          <div>
            <p>Chapter 1</p>
            <input type="text" placeholder="소제목을 입력해주세요" />
            <button type="button">-</button>
          </div>
        </div>
        <button type="button">챕터 추가하기</button>
      </div>
    </div>
  </div>
    );
export default AddCourse;
