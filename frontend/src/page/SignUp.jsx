import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../style/SignUp.module.css';
import sample from '../img/sample.png';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkNum, setCheckNum] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSendEmail = () => {
    axios.post('/api/signup/email', { email }) // 가상 api 주소
      .then((response) => {
        console.log('이메일 보내기 성공', response.data);
      })
      .catch((error) => {
        console.error('이메일 보내기 실패', error);
      });
  };

  const validatePw = () => {
    const pwRegExp = /^(?=.*?[a-zA-Z])(?=.*?[#?!@$ %^&*-]).{8,40}$/;
    if (!password) {
      alert('비밀번호를 입력하세요');
      return false;
    }
    if (!pwRegExp.test(password)) {
      alert('비밀번호가 형식에 맞지 않습니다.');
      return false;
    }
    if (!confirmPassword) {
      alert('비밀번호 확인을 입력하세요');
      return false;
    }
    if (password !== confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 같지 않습니다.');
      return false;
    }

    return true;
  };

  const handleSignUp = () => {
    if (!name) {
      alert('닉네임을 입력하세요');
      return false;
    }
    if (!email) {
      alert('이메일을 입력하세요');
      return false;
    }
    if (!checkNum) {
      alert('인증번호를 확인하세요');
      return false;
    }
    if (!validatePw()) {
      return false;
    }

    alert('가입이 완료되었습니다.');
    navigate('/api/login');
    return true;
  };

  const handleCheckNum = () => {
    axios.post('/api/signup/checkNum', { checkNum }) // 가상 api 주소
      .then((response) => {
        if (response.data === true) {
          alert('인증번호가 일치합니다.');
        } else {
          alert('인증번호가 일치하지 않습니다.');
        }
      })
      .catch((error) => {
        console.error('인증번호 보내기 실패', error);
      });
  };

  return (
    <div className={styles.viewport}>
      <div className={styles.box}>
        <img src={sample} alt="" />
        <div className={styles.contents}>
          <div className={styles.wrap}>
            <p>닉네임</p>
            <input type="text" className={styles.input2} onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div className={styles.wrap}>
            <p>이메일</p>
            <div>
              <input type="email" className={styles.input} onChange={(e) => setEmail(e.target.value)} value={email} />
              <button type="button" onClick={handleSendEmail}>
                보내기
              </button>
            </div>
          </div>
          <div className={styles.wrap}>
            <p>인증번호 확인</p>
            <div>
              <input type="text" className={styles.input} onChange={(e) => setCheckNum(e.target.value)} value={checkNum} />
              <button type="button" onClick={handleCheckNum}>
                확인
              </button>
            </div>
          </div>
          <div className={styles.wrap}>
            <p>비밀번호</p>
            <input type="text" className={styles.input2} onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          <div className={styles.wrap}>
            <p>비밀번호 확인</p>
            <input type="text" className={styles.input2} onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
          </div>
          <button type="button" onClick={handleSignUp}>
            Get Started!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
