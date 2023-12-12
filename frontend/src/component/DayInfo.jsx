import React from 'react';
import styles from '../style/DayInfo.module.css';

const DayInfo = () => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}`;
    return (
      <div className={styles.headwrap}>
        <p className={styles.date}>{formattedDate}</p>
        {/* 정보 가져오기 */}
        <div className={styles.info}>
          <div className={styles.date}>D-45</div>
          <div className={styles.title}>정보처리기사실기</div>
        </div>
      </div>
    );
};
export default DayInfo;
