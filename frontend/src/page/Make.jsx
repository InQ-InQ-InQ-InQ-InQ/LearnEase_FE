import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from '../component/SideBar';
import styles from '../style/Make.module.css';
import AddGoal from './AddGoal';
import AddCourse from './AddCourse';

const Make = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    const [goalList, setGoalList] = useState([]);
    const [addGoal, setAddGoal] = useState(false);
    const [courses, setCourses] = useState([]);
    const [addCourse, setAddCourse] = useState(false);
    const [buttonStates, setButtonStates] = useState([
        { day: '월', pressed: false },
        { day: '화', pressed: false },
        { day: '수', pressed: false },
        { day: '목', pressed: false },
        { day: '금', pressed: false },
        { day: '토', pressed: false },
        { day: '일', pressed: false },
      ]);
    const [plannerData] = useState({
        goal: '',
        course: '',
        startDate: '',
        endDate: '',
        studyDays: [],
    });

    useEffect(() => {
        const getGoalList = async () => {
            try {
                const response = await axios.get('/api/goals', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setGoalList(response.data);
                console.log('목표 자격증 데이터 가져오기 성공: ', response.data);
            } catch (error) {
                console.error('목표 자격증 데이터를 가져오지 못했습니다.', error.message);
            }
        };
        getGoalList();
    }, []);

    useEffect(() => {
        const getCourse = async () => {
            try {
                const response = await axios.get('/api/courses', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setCourses(response.data);
                console.log('추천 도서 및 강의 데이터 가져오기 성공: ', response.data);
            } catch (error) {
                console.error('추천 도서 및 강의 데이터를 가져오지 못했습니다: ', error.message);
            }
        };
        getCourse();
    }, []);

    const addgoalHandler = (goalName) => {
        setAddGoal(false);
        // 새로운 자격증 추가와 상태 업데이트
        setGoalList([...goalList, goalName]);
    };
    const addcourseHandler = (courseData) => {
        setAddCourse(false);
        // 새로운 코스 추가와 상태 업데이트
        setCourses([...courses, courseData]);
    };
    const openAddgoalHandler = () => {
        setAddGoal(true);
    };
    const openAddcourseHandler = () => {
        setAddCourse(true);
    };
    const closeGoalHandler = () => {
        setAddGoal(false);
    };
    const closeCourseHandler = () => {
        setAddCourse(false);
    };
    const btnclickHandler = (index) => {
        const updatedButtonStates = [...buttonStates];
        updatedButtonStates[index].pressed = !updatedButtonStates[index].pressed;
        setButtonStates(updatedButtonStates);
    };

    const createPlannerHandler = async () => {
        try {
            const selectedData = {
                goal: plannerData.goal,
                course: plannerData.course,
                startDate: plannerData.startDate,
                endDate: plannerData.endDate,
                studyDays: plannerData.studyDays,
            };
            const response = await axios.post('/api/createPlanners', selectedData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log('자동 플래닝 생성을 데이터를 전송하였습니다: ', response.data);
        } catch (error) {
            console.error('자동 플래닝 생성을 데이터를 전송하지 못하였습니다: ', error);
        }
    };

    return (

      <div className={styles.viewport}>
        <SideBar currentPage={3} />
        <div className={styles.container}>
          <p className={styles.text1}>자동 플래닝 생성하기</p>
          <div className={styles.wrapping}>
            <p className={styles.text2}>목표 자격증</p>
            <div className={styles.box1}>
              <select className={styles.input1}>
                <option value="" disabled selected hidden>자격증 선택</option>
                {goalList.map((goal) => (
                  <option key={goal.name} value={goal.name}>{goal.name}</option>
          ))}
              </select>
              <button type="button" className={styles.addbtn} onClick={openAddgoalHandler}>새로 등록하기</button>
            </div>
          </div>
          <div className={styles.wrapping}>
            <p className={styles.text2}>추천 도서 및 강의</p>
            <div className={styles.box1}>
              <select className={styles.input1}>
                <option value="" disabled selected hidden>추천 도서 및 강의 선택</option>
                {courses.map((course) => (
                  <option key={course.name} value={course.name}>{course.name}</option>
          ))}
              </select>
              <button type="button" className={styles.addbtn} onClick={openAddcourseHandler}>새로 등록하기</button>
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
              {buttonStates.map((button, index) => (
                <button
                  key={button.day}
                  type="button"
                  className={`${styles.datebtn} ${button.pressed ? styles.btnpressed : ''}`}
                  onClick={() => btnclickHandler(index)}
                >
                  {button.day}
                </button>
      ))}
            </div>
          </div>
          <div className={styles.box4}>
            <button type="submit" className={styles.submitbtn} onClick={createPlannerHandler}>플래너 생성하기</button>
          </div>
        </div>
        {addGoal && <AddGoal onClose={closeGoalHandler} onAddGoal={addgoalHandler} />}
        {addCourse && <AddCourse onClose={closeCourseHandler} onAddCourse={addcourseHandler} />}
      </div>
    );
};
export default Make;
