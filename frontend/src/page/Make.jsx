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
          <p>자동 플래닝 생성하기</p>
          <p>목표 자격증</p>
          <div>
            <input type="selectbox" placeholder="자격증 선택" />
            <button type="button" onClick={addgoalHandler}>새로 등록하기</button>
          </div>
          <p>추천 도서 및 강의</p>
          <div>
            <input type="selectbox" placeholder="추천 도서 및 강의 선택" />
            <button type="button" onClick={addcourseHandler}>새로 등록하기</button>
          </div>
          <div>
            <div>
              <p>시작일</p>
              <input type="date" placeholder="시작일 선택" />
            </div>
            <div>
              <p>종료일</p>
              <input type="date" placeholder="종료일 선택" />
            </div>
          </div>
          <div>
            <p>공부할 요일</p>
            <div>
              <button type="button">월</button>
              <button type="button">화</button>
              <button type="button">수</button>
              <button type="button">목</button>
              <button type="button">금</button>
              <button type="button">토</button>
              <button type="button">일</button>
            </div>
          </div>
          <button type="button">플래너 생성하기</button>
        </div>
        {addGoal && <addGoal />}
        {addCourse && <addCourse />}
      </div>
);
};
export default Make;
