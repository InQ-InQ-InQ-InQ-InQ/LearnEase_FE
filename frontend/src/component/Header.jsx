import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../style/Header.module.css';

function Header() {
  const accessToken = sessionStorage.getItem('accessToken');
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get('/api/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log('사용자 데이터 가져오기 성공:', response.data);
        setUserInfo(response.data);
      } catch (error) {
        console.log('사용자 데이터를 가져오기 실패', error);
      }
    };
    getUserInfo();
  }, [accessToken]);

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      sessionStorage.removeItem('accessToken');
      navigate('/api/login');
      console.log('로그아웃 되었습니다.');
    }
  };

  return (
    <div className={styles.miniinfo}>
      <div className={styles.headwrap}>
        <p className={styles.nickname}>
          {userInfo && userInfo.nickname ? userInfo.nickname : 'Guest'}
        </p>
        <button type="button" className={styles.pText2} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
