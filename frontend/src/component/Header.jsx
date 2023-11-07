import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../style/Header.module.css';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      sessionStorage.removeItem('userId'); // 임시 변수
      navigate('/api/login');
      console.log('로그아웃 되었습니다.');
    }
  };
  return (
    <div className={styles.miniinfo}>
      <div className={styles.headwrap}>
        <p className={styles.nickname}>닉네임</p>
        <button type="button" className={styles.logout} onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
}
export default Header;
