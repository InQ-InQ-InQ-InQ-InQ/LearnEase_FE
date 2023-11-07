import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../style/Header.module.css';

function Header() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/users/profile')
    .then((response) => {
      const user = response.data;
      setUserName(user.userName);
    })
    .catch((error) => {
      console.log('이름을 가져오지 못했습니다', error);
    });
  }, []);

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
          홍길동
          {userName}
        </p>
        <button type="button" className={styles.logout} onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
}
export default Header;
