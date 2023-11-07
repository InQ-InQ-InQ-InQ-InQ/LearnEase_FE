import React, { useState } from 'react';
import SideBar from '../component/SideBar';
import styles from '../style/MyPage.module.css';
import EditAccount from './EditAccount';
import Header from '../component/Header';

function MyPage() {
  const [editAccount, setEditAccount] = useState(false);

  const editHandler = () => {
    setEditAccount(true);
  };
    return (
      <div className={styles.viewport}>
        <SideBar currentPage={6} />
        <div className={styles.mainprofile}>
          <Header />
          <div className={styles.headprofile}>
            {/* 정보 가져오기 */}
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
              {/* 정보 가져오기 */}
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
