import React, { useState } from 'react';
import styles from '../style/EditAccount.module.css';

function EditAccount() {
  const [newPassword, setNewPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  const passwordHandler = () => {
    setNewPassword(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // const [outPage, setOutPage] = useState(true);
  // const outHandler = () => {
  //   setOutPage(true);
  // };

  return (
    <div>
      {modalVisible && (
        <div className={styles.screen}>
          <div className={styles.editscreen}>
            {newPassword
                  ? (

                    <>
                      <div className={styles.header}>
                        <p>비밀번호 재설정</p>
                        <button type="button" className={styles.out} onClick={closeModal}>
                          X
                        </button>
                      </div>
                      <div className={styles.wrapping}>
                        <div className={styles.box}>
                          <p className={styles.text}>현재 비밀번호</p>
                          <div className={styles.nicknamewrap}>*******</div>
                        </div>
                        <div className={styles.box}>
                          <p className={styles.text}>New Password</p>

                          <input type="password" className={styles.inputpw} />

                        </div>
                        <div className={styles.box}>
                          <p className={styles.text}>Password Check</p>

                          <input type="password" className={styles.inputpw} />

                        </div>
                        <button type="button" className={styles.okbtn}>비밀번호 변경</button>
                      </div>
                    </>

)
                  : (
                    <>
                      <div className={styles.header}>
                        <p>회원정보 변경</p>
                        <button type="button" className={styles.out} onClick={closeModal}>
                          X
                        </button>
                      </div>
                      <div className={styles.wrapping}>
                        <div className={styles.wrappp}>
                          <div className={styles.box}>
                            <p className={styles.text}>Email</p>
                            <div>sdfjj@gmail.com</div>
                          </div>
                          <div className={styles.box}>
                            <p className={styles.text}>닉네임</p>
                            <input type="text" className={styles.nicknamewrap} placeholder="nickname" />
                          </div>
                          <div className={styles.box}>
                            <p className={styles.text}>비밀번호</p>
                            <button type="button" className={styles.passwordbtn} onClick={passwordHandler}>
                              비밀번호 재설정
                            </button>
                          </div>
                          <button type="button" className={styles.okbtn}>변경사항 저장</button>
                        </div>
                      </div>
                    </>
)}
          </div>
        </div>
      )}
    </div>
  );
}

export default EditAccount;
