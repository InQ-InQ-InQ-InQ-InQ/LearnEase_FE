import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from '../style/AddCourse.module.css';

const AddCourse = ({ onClose, onAddCourse }) => {
  const accessToken = sessionStorage.getItem('accessToken');
  const [courseName, setCourseName] = useState('');
  const [chapters, setChapters] = useState([
    { title: 'Chapter 1', subTitle: '' },
  ]);

  const addChapterHandler = () => {
    const newChapter = {
      title: `Chapter ${chapters.length + 1}`,
      subTitle: '',
    };
    setChapters([...chapters, newChapter]);
  };

  const saveCourseHandler = async () => {
    try {
      const response = await axios.post(
        '/api/goals',
        {
          courseName,
          chapters,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      onAddCourse(response.data);
      onClose();
    } catch (error) {
      console.error('Chapter 추가 실패', error.response);
      onClose();
    }
  };

  const deleteChapterHandler = (deleteIndex) => {
    const updatedChapters = [...chapters];
    updatedChapters.splice(deleteIndex, 1);
    const sortedChapters = updatedChapters.map((chapter, index) => ({
      ...chapter,
      title: `Chapter ${index + 1}`,
    }));
    setChapters(sortedChapters);
  };

  const outHandler = () => {
    onClose();
  };

  return (
    <div className={styles.screen}>
      <div className={styles.addscreen}>
        <button type="button" className={styles.out} onClick={outHandler}>
          X
        </button>
        <div className={styles.box}>
          <p className={styles.text1}>새 강의 등록하기</p>
          <p className={styles.text2}>강의명</p>
          <input
            type="text"
            className={styles.input1}
            placeholder="도서 및 강의명을 입력해주세요"
            onChange={(e) => setCourseName(e.target.value)}
          />
          <div className={styles.innerbox}>
            {chapters.map((chapter, index) => (
              <div key={`chapter-${chapter.id}`} className={styles.wrap}>
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
                <button
                  type="button"
                  className={styles.deleteChapterBtn}
                  onClick={() => deleteChapterHandler(index)}
                >
                  -
                </button>
              </div>
            ))}
          </div>
          <div className={styles.btnContainer}>
            <button
              type="button"
              className={styles.submitbtnWrapper}
              onClick={addChapterHandler}
            >
              챕터 추가
            </button>
            <button
              type="button"
              className={styles.submitbtn}
              onClick={saveCourseHandler}
            >
              강의 등록하기
            </button>
          </div>
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
