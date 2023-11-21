import React, { useState } from 'react';
import SideBar from '../component/SideBar';
import styles from '../style/Make.module.css';

const Make = () => {
    const [addGoal, setAddGoal] = useState(false);
    const [addCourse, setAddCourse] = useState(false);

    const addgoalHandler = () => {
        setAddGoal(true);
    };
    const addcourseHandler = () => {
        setAddCourse(true);
    };
    return (

      <div className={styles.viewport}>
        <SideBar currentPage={3} />
        <div className={styles.container}>
          <p className={styles.text1}>자동 플래닝 생성하기</p>
          <div className={styles.wrapping}>
            <p className={styles.text2}>목표 자격증</p>
            <div className={styles.box1}>
              <input
                type="selectbox"
                className={styles.input1}
                placeholder="자격증 선택"
              />
              <button type="button" className={styles.addbtn} onClick={addgoalHandler}>새로 등록하기</button>
            </div>
          </div>
          <div className={styles.wrapping}>
            <p className={styles.text2}>추천 도서 및 강의</p>
            <div className={styles.box1}>
              <input type="selectbox" className={styles.input1} placeholder="추천 도서 및 강의 선택" />
              <button type="button" className={styles.addbtn} onClick={addcourseHandler}>새로 등록하기</button>
            </div>
          </div>
          <div className={styles.box0}>
            <div className={styles.box2}>
              <p className={styles.text2}>시작일</p>
              <input type="date" className={styles.input2} placeholder="시작일 선택" />
            </div>
            <div className={styles.box2}>
              <p className={styles.text2}>종료일</p>
              <input type="date" className={styles.input2} placeholder="종료일 선택" />
            </div>
          </div>
          <div className={styles.box3}>
            <p className={styles.text2}>공부할 요일</p>
            <div className={styles.wrap}>
              <button type="button" className={styles.datebtn}>월</button>
              <button type="button" className={styles.datebtn}>화</button>
              <button type="button" className={styles.datebtn}>수</button>
              <button type="button" className={styles.datebtn}>목</button>
              <button type="button" className={styles.datebtn}>금</button>
              <button type="button" className={styles.datebtn}>토</button>
              <button type="button" className={styles.datebtn}>일</button>
            </div>
          </div>
          <div className={styles.box4}>
            <input type="submit" className={styles.submitbtn} value="플래너 생성하기" />
          </div>
        </div>
        {addGoal && <addGoal />}
        {addCourse && <addCourse />}
      </div>
);
};
export default Make;
