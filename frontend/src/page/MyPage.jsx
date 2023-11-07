import React, { useState } from 'react';
import SideBar from '../component/SideBar';
import styles from '../style/MyPage.module.css';
import EditAccount from './EditAccount';
import Header from '../component/Header';

function MyPage() {
  const [editAccount, setEditAccount] = useState(false);
  const [goals, setGoals] = useState([
    { id: 1, name: '정보처리기사실기', date: '23/10/15~23/12/15' },
    { id: 2, name: '정보처리기사필기', date: '23/10/15~23/12/15' },
  ]); // 후에 백엔드에서 데이터 받아오도록 하기

  const editHandler = () => {
    setEditAccount(true);
  };

  const onRemove = (id) => {
    if (window.confirm('삭제하시겠습니까?')) {
      const updatedGoals = goals.filter((goal) => goal.id !== id);
      setGoals(updatedGoals);
      console.log(`${id}번 게시물 삭제 완료`);
    }
  };

    return (
      <div className={styles.viewport}>
        <SideBar currentPage={6} />
        <div className={styles.mainprofile}>
          <Header />
          <div className={styles.headprofile}>
            <div className={styles.userinfo}>
              <p className={styles.text}>홍길동</p>
              <p className={styles.mail}>gdflflk@gmail.com</p>
            </div>
            <button type="button" className={styles.profileeditbtn} onClick={editHandler}>Edit Account</button>
          </div>
          <div className={styles.bodyprofile}>
            <p className={styles.text1}>홍길동님의 목표</p>
            {' '}
            <br />
            <div className={styles.goalwrap}>
              {goals.map((goal) => (
                <div key={goal.id} className={styles.goalbox}>
                  <p>{goal.name}</p>
                  <p>{goal.date}</p>
                  <div className={styles.btnwrap}>
                    <button type="button" className={styles.deletebtn} onClick={() => onRemove(goal.id)}>Delete</button>
                    <button type="button" className={styles.goaleditbtn}>Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {editAccount && <EditAccount />}
      </div>
    );
}
export default MyPage;
