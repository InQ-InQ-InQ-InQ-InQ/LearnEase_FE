import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../style/AddCourse.module.css';

const AddCourse = ({ onClose, onAddCourse }) => {
  const [courseName, setCourseName] = useState('');
  const [chapters, setChapters] = useState([{ title: 'Chapter 1', subTitle: '' }]);

  const addChapterHandler = () => {
    const newChapter = { title: `Chapter ${chapters.length + 1}`, subTitle: '' };
    setChapters([...chapters, newChapter]);
  };

  const saveCourseHandler = () => {
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
          <input
            type="text"
            className={styles.input1}
            placeholder="도서 및 강의명을 입력해주세요"
            onChange={(e) => setCourseName(e.target.value)}
          />
          <div className={styles.innerbox}>
            {chapters.map((chapter, index) => (
              <div key={`chapter-${index}`} className={styles.wrap}>
                <p className={styles.text}>{chapter.title}</p>
                <input
                  type="text"
                  className={styles.input2}
                  placeholder="소제목을 입력해주세요"
                  onChange={(e) => {
                    const updatedChapters = [...chapters];
                    updatedChapters[index].subTitle = e.target.value;
                    setChapters(updatedChapters);
                  }}
                />
              </div>
            ))}
            <button type="button" className={styles.addChapterBtn} onClick={addChapterHandler}>+</button>
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
