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
                <p>자격증 수정</p>
                <button type="button" className={styles.out} onClick={closeModal}>
                  X
                </button>
              </div>
              <div className={styles.wrapping}>
                <div className={styles.box}>
                  <p className={styles.text}>자격증 명</p>
                  <input type="text" className={styles.inputpw} />
                </div>
                <div className={styles.box}>
                  <p className={styles.text}>시작일</p>

                  <input type="date" className={styles.inputpw} />

                </div>
                <div className={styles.box}>
                  <p className={styles.text}>종료일</p>

                  <input type="date" className={styles.inputpw} />

                </div>
                <button type="button" className={styles.okbtn}>자격증 등록하기</button>
              </div>
            </div>
          </div>
      )}
      </div>
    );
}
export default EditGoal;
