import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from '../component/SideBar';
import styles from '../style/MyPage.module.css';
import EditAccount from './EditAccount';
import Header from '../component/Header';

function MyPage() {
  const accessToken = sessionStorage.getItem('accessToken');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [editAccount, setEditAccount] = useState(false);
  const [goals, setGoals] = useState([
    { id: 1, name: '정보처리기사실기', date: '23/10/15~23/12/15' },
    { id: 2, name: '정보처리기사필기', date: '23/10/15~23/12/15' },
  ]);

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await axios.get('/api/users/profile', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log('사용자 데이터 가져오기 성공:', response.data);

        const user = response.data;
        setUserName(user.userName);
        setUserEmail(user.userEmail);
      } catch (error) {
        console.error('프로필 가져오기 실패', error);
      }
    }
    getProfile();
  }, [accessToken]);

  const editHandler = () => {
    setEditAccount(true);
  };

  const onRemove = async (id) => {
    if (window.confirm('삭제하시겠습니까?')) {
      try {
        await axios.delete(`/api/goals/${id}`);
        const updatedGoals = goals.filter((goal) => goal.id !== id);
        setGoals(updatedGoals);
        console.log(`${id}번 게시물 삭제 완료`);
      } catch (error) {
        console.error('목표 삭제 실패', error);
      }
    }
  };

  return (
    <div className={styles.viewport}>
      <SideBar currentPage={6} />
      <div className={styles.mainprofile}>
        <Header />
        <div className={styles.headprofile}>
          <div className={styles.userinfo}>
            <p className={styles.text}>
              홍길동
              {userName}
            </p>
            <p className={styles.mail}>
              gdflflk@gmail.com
              {userEmail}
            </p>
          </div>
          <button type="button" className={styles.profileeditbtn} onClick={editHandler}>Edit Account</button>
        </div>
        <div className={styles.bodyprofile}>
          <p className={styles.text1}>
            홍길동
            {userName}
            님의 목표
          </p>
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
