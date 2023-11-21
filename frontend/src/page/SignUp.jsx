import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../style/SignUp.module.css';
import sample from '../img/sample.png';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [certificationNumber, setCertificationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [startButton, setStartButton] = useState(false);
  const [agreeTerm, setAgreeTerm] = useState(false);

  // 유효성
  const [EmailValid, setEmailValid] = useState(false);
  const [CertificationSent, setCertificationSent] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [nicknameValid, setNicknameValid] = useState(false);

  // 타이머
  const [timer, setTimer] = useState(300);
  const [TimerVisible, setTimerVisible] = useState(false);

  // 테두리 색상
  const [emailBorderColor, setEmailBorderColor] = useState('');
  const [certNumBorderColor, setCertNumBorderColor] = useState('');
  const [pwBorderColor, setPWBorderColor] = useState('');
  const [nicknameBorderColor, setNicknameBorderColor] = useState('');

  // 정규식 - 비밀번호 8-20자리, 영문자, 숫자, 특수 문자 최소 1개씩 포함
  const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()-_+=<>?]{8,20}$/;

  // 정규식 - 닉네임 한글, 영문, 숫자, 특수문자 제외, 2~7글자
  const nicknameRegex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]{2,7}$/;

  // 닉네임 입력 후 상태 업데이트
  const nicknameChange = (event) => {
    const newNickname = event.target.value;
    setNickname(newNickname);

    let newNicknameBorderColor = '';
    if (newNickname !== '') {
      const isValid = nicknameRegex.test(newNickname);
      setNicknameValid(isValid);
      newNicknameBorderColor = isValid ? 'limegreen' : 'red';
    }
    setNicknameBorderColor(newNicknameBorderColor);
  };

  const nicknameDuplicateCheck = async () => {
    if (nickname.trim() === '') {
      alert('닉네임을 입력해주세요.');
      setNicknameBorderColor('red');
      return;
    }

    const isNicknameValid = nicknameRegex.test(nickname);
    setNicknameValid(isNicknameValid);

    if (!isNicknameValid) {
      alert('올바른 닉네임 형식을 입력해주세요.');
      setNicknameBorderColor('red');
      return;
    }

    try {
      // 백엔드 닉네임 중복 검사(임시로 /checkNicknameDuplicate 설정)
      const response = await axios.post('/api/checkNicknameDuplicate', {
        nickname,
      });

      if (response.data.duplicate) {
        alert('이미 사용 중인 닉네임입니다.');
        setNicknameValid(false);
        setNicknameBorderColor('red');
      } else {
        setNicknameBorderColor('limegreen');
        alert('사용 가능한 닉네임입니다.');
      }
    } catch (error) {
      console.error('오류 발생:닉네임 중복 검사', error);
      alert('오류가 발생했습니다.');
    }
  };

  // 비밀번호 입력 후 상태 업데이트
  const passwordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    let newPWBorderColor = '';
    if (newPassword !== '') {
      const isValid = pwRegex.test(newPassword);
      setPasswordValid(isValid);
      newPWBorderColor = isValid ? 'limegreen' : 'red';
    }
    setPWBorderColor(newPWBorderColor);
  };

  // 이메일 입력 후 상태 업데이트
  const emailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    const isEmailValid = event.target.checkValidity();
    setEmailValid(isEmailValid);
    setEmailBorderColor(isEmailValid ? 'limegreen' : 'red');
  };

  const emailDuplicateCheck = async () => {
    if (email.trim() === '') {
      alert('이메일을 입력해주세요.');
      setEmailBorderColor('red');
      return;
    }

    try {
      // 백엔드 이메일 중복 검사(임시로 /checkEmailDuplicate 설정)
      const response = await axios.post('/api/checkEmailDuplicate', {
        email,
      });

      if (response.data.duplicate) {
        alert('이미 가입된 이메일입니다.');
        setEmailValid(false);
        setEmailBorderColor('red');
      } else {
        setEmailBorderColor('limegreen');
        alert('인증번호가 전송되었습니다.');
        setCertificationSent(true);
        setTimerVisible(true);
        setTimer(300);
      }
    } catch (error) {
      console.error('오류 발생:이메일 중복검사', error);
      alert('오류가 발생했습니다.');
    }
  };

  // 추후 노드메일러 사용 계획 중
  const checkCertificationNumber = () => {
    if (certificationNumber === '123456') {
      alert('인증번호가 확인되었습니다.');
      setTimerVisible(false);
      setCertNumBorderColor('limegreen');
      setCertificationSent(true);
    } else {
      alert('잘못된 인증번호입니다.');
      setCertNumBorderColor('red');
    }
  };

  // 타이머 갱신
  useEffect(() => {
    let interval;
    if (CertificationSent && TimerVisible) {
      interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 300));
      }, 1000);
    }

    if (!TimerVisible) {
      clearInterval(interval);
      setTimer(300);
    }

    return () => clearInterval(interval);
  }, [CertificationSent, TimerVisible]);

  const signUpRequest = async () => {
    try {
      const userData = {
        loginId: email,
        password,
        nickname,
      };

      const response = await axios.post('/api/user', userData);

      if (response.data.id) {
        alert('회원가입이 완료되었습니다.');
        navigate('/api/login');
      } else {
        alert('회원가입 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('오류 발생: 회원가입', error);
      alert('오류가 발생했습니다.');
    }
  };

  const startButtonClick = async () => {
    if (CertificationSent) {
      signUpRequest();
    } else {
      alert('인증이 완료되지 않았습니다.');
    }
  };

  // 체크박스 동의
  const agreeTermChange = () => {
    setAgreeTerm((prevAgreeTerm) => !prevAgreeTerm);
  };

  useEffect(() => {
    /* eslint-disable */
    const isValid =
      EmailValid &&
      CertificationSent &&
      passwordValid &&
      nicknameValid &&
      agreeTerm;
    setStartButton(isValid);
  }, [EmailValid, CertificationSent, passwordValid, nicknameValid, agreeTerm]);
  /* eslint-enable */
  return (
    <div className={styles.viewport}>
      <div className={styles.box}>
        <img src={sample} alt="" />
        <div className={styles.contents}>
          <div className={styles.wrap}>
            <p>닉네임</p>
            <input
              type="text"
              className={`${styles.input} ${
                !nicknameValid && nickname !== '' ? styles.invalid : ''
              }`}
              value={nickname}
              onChange={nicknameChange}
              style={{ borderColor: nicknameBorderColor }}
            />
            <button
              type="button"
              className={styles.button}
              onClick={nicknameDuplicateCheck}
            >
              확인
            </button>
            {!nicknameValid && nickname !== '' && (
              <div className={styles.invalidMessage}>
                닉네임은 공백없이 2~7자 한글, 영문, 숫자만 가능합니다.
              </div>
            )}
          </div>

          <div className={styles.wrap}>
            <p>비밀번호</p>
            <input
              type="password"
              className={`${styles.input2} ${
                !passwordValid && password !== '' ? styles.invalid : ''
              }`}
              value={password}
              onChange={passwordChange}
              style={{ borderColor: pwBorderColor }}
            />
            {!passwordValid && password !== '' && (
              <div className={styles.invalidMessage}>
                비밀번호는 공백 없이 8-20자의 영문, 숫자 or 특수 문자를 최소
                하나씩 포함해야합니다.
              </div>
            )}
          </div>

          <div className={styles.wrap}>
            <p>이메일</p>
            <div>
              <input
                type="email"
                className={styles.input}
                value={email}
                onChange={emailChange}
                style={{ borderColor: emailBorderColor }}
              />
              <button
                type="button"
                className={styles.button}
                onClick={emailDuplicateCheck}
              >
                보내기
              </button>
            </div>
          </div>

          <div className={styles.wrap}>
            <div className={styles.certification}>
              <p>인증번호</p>
              {TimerVisible && (
                <div className={styles.timer}>
                  {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                  {Math.floor(timer / 60)}:
                  {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
                </div>
              )}
            </div>
            <input
              type="number"
              className={styles.input}
              value={certificationNumber}
              onChange={(e) => setCertificationNumber(e.target.value)}
              disabled={!EmailValid || !CertificationSent}
              style={{ borderColor: certNumBorderColor }}
            />
            <button
              type="button"
              className={styles.button}
              onClick={checkCertificationNumber}
              disabled={!CertificationSent}
            >
              확인
            </button>
          </div>
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <div
            className={styles.wrap}
            style={{
              fontSize: 'small',
              marginTop: '10px',
            }}
          >
            <label htmlFor="agreeTerm">개인정보 제공에 동의합니다</label>
            <input
              type="checkbox"
              id="agreeTerm"
              checked={agreeTerm}
              onChange={agreeTermChange}
            />
          </div>
          {/* eslint-enable jsx-a11y/label-has-associated-control */}
          <button
            type="button"
            className={`${styles.startBtn} ${
              startButton ? '' : styles.disabled
            }`}
            onClick={startButtonClick}
            disabled={!startButton}
          >
            회원가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
