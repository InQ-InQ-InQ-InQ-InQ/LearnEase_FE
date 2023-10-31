import React, { useState } from 'react';
import SideBar from '../component/SideBar';
import styles from '../style/MyPage.module.css';
import EditAccount from './EditAccount';

function MyPage() {
  const [editAccount, setEditAccount] = useState(false);

  const editHandler = () => {
    setEditAccount(true);
  };
    return (
      <div className={styles.viewport}>
        <SideBar currentPage={6} />
        <div className={styles.mainprofile}>
          <div className={styles.miniinfo}>
            <div className={styles.headwrap}>
              <p className={styles.nickname}>닉네임</p>
              <p className={styles.logout}>Logout</p>
            </div>
          </div>
          <div className={styles.headprofile}>
            <div className={styles.userinfo}>
              <p className={styles.text}>닉네임</p>
              <p className={styles.mail}>메일</p>
            </div>
            <button type="button" className={styles.profileeditbtn} onClick={editHandler}>Edit Account</button>
          </div>
          <div className={styles.bodyprofile}>
            <p className={styles.text1}>닉네임님의 목표</p>
            {' '}
            <br />
            <div className={styles.goalwrap}>
              <div className={styles.goalbox}>
                <p>정보처리기사실기</p>
                <p>23/10/15~23/12/15</p>
                <div className={styles.btnwrap}>
                  <button type="button" className={styles.deletebtn}>Delete</button>
                  <button type="button" className={styles.goaleditbtn}>Edit</button>
                </div>
              </div>
              <div className={styles.goalbox}>
                <p>정보처리기사실기</p>
                <p>23/10/15~23/12/15</p>
                <div className={styles.btnwrap}>
                  <button type="button" className={styles.deletebtn}>Delete</button>
                  <button type="button" className={styles.goaleditbtn}>Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {editAccount && <EditAccount />}
      </div>
    );
}
export default MyPage;
