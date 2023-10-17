<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../style/SignUp.module.css';
import sample from '../img/sample.png';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [EmailValid, setEmailValid] = useState(false);
  const [certificationNumber, setCertificationNumber] = useState('');
  const [CertificationSent, setCertificationSent] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [nickname, setNickname] = useState('');
  const [nicknameValid, setNicknameValid] = useState(false);
  const [startButton, setStartButton] = useState(false);

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

  // 닉네임 유효성 검사 - 한글, 영문, 특수문자 포함, 2~6글자
  const nicknameRegex = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,6}$/;

  // 이메일 입력 후 상태 업데이트
  const emailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setEmailValid(/^\S+@\S+\.\S+$/.test(inputEmail));
  };

  // 이메일 중복 확인 (실제로는 백엔드와 통신)
  const emailDuplicateCheck = () => {
    // 이메일이 비어있는지 확인
    if (email.trim() === '') {
      alert('이메일을 입력해주세요.');
      setEmailBorderColor('red');
      return;
    }

    // 이메일이 올바른 형식인지 검사
    const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
    setEmailValid(isEmailValid);

    // 이메일 형식이 올바르지 않으면 경고 표시
    if (!isEmailValid) {
      alert('올바른 이메일 형식을 입력해주세요.');
      setEmailBorderColor('red');
      return;
    }

    // 예제 이메일, 실제론 백엔드 통신으로 중복 검사 필요
    const emailDuplicate = email === 'example@example.com';
    if (!emailDuplicate) {
      setEmailBorderColor('limegreen');
      alert('인증번호가 전송되었습니다.');
      setCertificationSent(true);
      setTimerVisible(true);
      setTimer(300);
    } else {
      alert('이미 가입된 이메일입니다.');
      setEmailValid(false);
      setEmailBorderColor('red');
    }
  };

  // 인증번호 확인
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

  // 비밀번호 입력 후 상태 업데이트
  const passwordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // 비밀번호 입력란이 비었을 때
    let newPWBorderColor = '';
    if (newPassword !== '') {
      const isValid = pwRegex.test(newPassword);
      setPasswordValid(isValid);
      newPWBorderColor = isValid ? 'limegreen' : 'red';
    }
    setPWBorderColor(newPWBorderColor);
  };

  // 닉네임 입력 후 상태 업데이트
  const nicknameChange = (event) => {
    const newNickname = event.target.value;
    setNickname(newNickname);

    // 닉네임 입력란이 비었을 때
    let newNicknameBorderColor = '';
    if (newNickname !== '') {
      const isValid = nicknameRegex.test(newNickname);
      setNicknameValid(isValid);
      newNicknameBorderColor = isValid ? 'limegreen' : 'red';
    }
    setNicknameBorderColor(newNicknameBorderColor);
  };
  /*
    // 닉네임 중복 확인 (실제로는 백엔드와 통신)
    const nicknameDuplicateCheck = () => {
      // 닉네임 중복 여부 체크 필요
      const nicknameExam = nickname === '홍길동';
      if (!nicknameExam) {
        setEmailBorderColor('limegreen');
        setNicknameValid(true); // 중복되지 않을 경우 유효한 닉네임
      } else {
        setNicknameValid(false); // 중복될 경우
        setEmailBorderColor('red');
      }
    };
  */

  // Get Started! 버튼
  const startButtonClick = () => {
    if (CertificationSent) {
      alert('회원가입이 완료되었습니다.');
      // 회원가입 완료 후 할 동작
      navigate('/');
    } else {
      alert('인증이 완료되지 않았습니다.');
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
    const isValid =
      EmailValid && CertificationSent && passwordValid && nicknameValid;
    setStartButton(isValid);
    /* 유효성 테스트용
    console.log('EmailValid:', EmailValid);
    console.log('CertificationSent:', CertificationSent);
    console.log('passwordValid:', passwordValid);
    console.log('nicknameValid:', nicknameValid);
    console.log('isValid:', isValid);
    setStartButton(isValid);
    */
  }, [EmailValid, CertificationSent, passwordValid, nicknameValid]);

=======
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

>>>>>>> 5487262f75ceddcea2f65b25e405da8432a8b105
  return (
    <div className={styles.viewport}>
      <div className={styles.box}>
        <img src={sample} alt="" />
        <div className={styles.contents}>
          {/* Email */}
          <div className={styles.wrap}>
            <p>닉네임</p>
            <input type="text" className={styles.input2} onChange={(e) => setName(e.target.value)} value={name} />
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
                className={styles.emailbutton}
                onClick={emailDuplicateCheck}
              >
                Send
              </button>
            </div>
          </div>

          {/* Certification Number */}
          <div className={styles.wrap}>
            <div className={styles.certification}>
              <p>Certification Number</p>
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
              Confirm
            </button>
          </div>

          {/* Password */}
          <div className={styles.wrap}>
            <p style={{ marginTop: '30px' }}>Password</p>
            <input
              type="password"
              className={`${styles.input2} ${
                !passwordValid && password !== '' ? styles.invalid : ''
              }`}
              value={password}
              onChange={passwordChange}
              style={{ borderColor: pwBorderColor }}
              disabled={!CertificationSent}
            />
            {!passwordValid && password !== '' && (
              <div className={styles.invalidMessage}>
                비밀번호는 공백 없이 8-20자의 영문, 숫자 및 특수 문자를 최소
                하나씩 포함해야합니다.
              </div>
            )}
          </div>

          {/* Nickname */}
          <div className={styles.wrap}>
            <p>Nickname</p>
            <input
              type="text"
              className={`${styles.input2} ${
                !nicknameValid && nickname !== '' ? styles.invalid : ''
              }`}
              value={nickname}
              onChange={nicknameChange}
              style={{ borderColor: nicknameBorderColor }}
            />
          </div>

          {/* Start */}
          <button>
            type="button"
            className={`${styles.startBtn} ${
              startButton ? '' : styles.disabled
            }`}
            onClick={startButtonClick}
            disabled={!startButton}
          </button>
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
}
};

export default SignUp;
