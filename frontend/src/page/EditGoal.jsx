import React, { useState } from 'react';
import styles from '../style/EditGoal.module.css';

function EditGoal() {
    const [modalVisible, setModalVisible] = useState(true);

    const closeModal = () => {
        setModalVisible(false);
      };

    return (
      <div>
        {modalVisible && (
          <div className={styles.screen}>
            <div className={styles.editscreen}>
              <div className={styles.header}>
                자격증 수정
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
            </div>
          </div>
      )}
      </div>
    );
}
export default EditGoal;
