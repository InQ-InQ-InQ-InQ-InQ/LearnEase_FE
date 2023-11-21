import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../style/AddCourse.module.css';

const AddCourse = ({ onClose, onAddCourse }) => {
    const [courseName, setCourseName] = useState('');
    const [chapters, setChapters] = useState([]);

    const saveCourseHandler = () => {
        // 추가된 챕터를 chapters 배열에 추가
        const newChapter = { title: `Chapter ${chapters.length + 1}`, subTitle: '' };
        setChapters([...chapters, newChapter]);
        // 사용자가 추가한 코스 정보 Make 컴포넌트로 전달
        const courseData = { courseName, chapters };
        onAddCourse(courseData);
        onClose();
    };
    const outHandler = () => {
        onClose();
    };
    return (
      <div className={styles.screen}>
        <div className={styles.addscreen}>
          <button type="button" className={styles.out} onClick={outHandler}>X</button>
          <div className={styles.box}>
            <p className={styles.text}>도서 및 강의명</p>
            <input type="text" className={styles.input1} placeholder="도서 및 강의명을 입력해주세요" onChange={(e) => setCourseName(e.target.value)} />
            <div className={styles.innerbox}>
              <p className={styles.text}>챕터</p>
              <div className={styles.wrap}>
                <p className={styles.text}>Chapter 1</p>
                <input type="text" className={styles.input2} placeholder="소제목을 입력해주세요" />
                <button type="button" className={styles.deletebtn}>-</button>
              </div>
              <div className={styles.wrap}>
                <p className={styles.text}>Chapter 1</p>
                <input type="text" className={styles.input2} placeholder="소제목을 입력해주세요" />
                <button type="button" className={styles.deletebtn}>-</button>
              </div>
            </div>
            <button type="button" className={styles.submitbtn} onClick={saveCourseHandler}>챕터 추가하기</button>
          </div>
        </div>
      </div>
    );
};
AddCourse.propTypes = {
    onClose: PropTypes.func.isRequired,
    onAddCourse: PropTypes.func.isRequired,
};
export default AddCourse;
