import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../style/Header.module.css';

function Header() {
  const accessToken = sessionStorage.getItem('accessToken');
  const [userInfo, setUserInfo] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = async () => {
      try {
        const response = await axios.get('/api/me');
        setUserInfo(response.data);
      } catch (error) {
        console.log('사용자 정보를 가져오지 못했습니다', error);
      }
    };
    user();
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
          {userInfo && userInfo.nickname}
        </p>
        <button type="button" className={styles.logout} onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
}
export default Header;
