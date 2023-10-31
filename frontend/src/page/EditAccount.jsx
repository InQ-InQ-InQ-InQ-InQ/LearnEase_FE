import React from 'react';
import styles from '../style/EditAccount.module.css';

function EditAccount() {
 /* const [outPage, setOutPage] = useState(true);

  const outHandler = () => {
    setOutPage(true);
  };
  */

    return (
      <div className={styles.screen}>
        <div className={styles.editscreen}>
          <button type="button" className={styles.out}>X</button>
          <div className={styles.wrap}>
            <div className={styles.mailbox}>
              <p className={styles.text}>ID</p>
              <div className={styles.mailwrap}>sdfjj@gmail.com</div>
            </div>
            <div className={styles.nicknamebox}>
              <p className={styles.text}>Nickname</p>
              <div className={styles.nicknamewrap}>jenny1235</div>
            </div>
            <div className={styles.passwordbox}>
              <p className={styles.text}>Password</p>
              <button type="button" className={styles.passwordbtn}>비밀번호 재설정</button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default EditAccount;
