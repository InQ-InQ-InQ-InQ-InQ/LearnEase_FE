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
            <button type="button" className={styles.out} onClick={closeModal}>
              X
            </button>
            <div className={styles.wrap}>
              <div className={styles.editscreen}>
                <button type="button" className={styles.out} onClick={closeModal}>
                  X
                </button>
                <div className={styles.wrap}>
                  <div className={styles.box}>
                    <p className={styles.text}>ID</p>
                    <div className={styles.mailwrap}>sdfjj@gmail.com</div>
                  </div>
                  <div className={styles.box}>
                    <p className={styles.text}>Nickname</p>
                    <div className={styles.nicknamewrap}>jenny1235</div>
                  </div>
                  {newPassword ? (
                    <>
                      <div className={styles.box}>
                        <p className={styles.text}>현재 비밀번호</p>
                        <div className={styles.nicknamewrap}>*******</div>
                      </div>
                      <div className={styles.box}>
                        <p className={styles.text}>New Password</p>
                        <div className={styles.nicknamewrap}>
                          <input type="password" className={styles.inputpw} />
                        </div>
                      </div>
                      <div className={styles.box}>
                        <p className={styles.text}>Password Check</p>
                        <div className={styles.nicknamewrap}>
                          <input type="password" className={styles.inputpw} />
                        </div>
                      </div>
                      <button type="button" className={styles.passwordbtn1}>
                        비밀번호 재설정
                      </button>
                    </>
                  ) : (
                    <div className={styles.box}>
                      <p className={styles.text}>Password</p>
                      <button type="button" className={styles.passwordbtn} onClick={passwordHandler}>
                        비밀번호 재설정
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditAccount;
