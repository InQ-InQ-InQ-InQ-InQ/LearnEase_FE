import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../style/AddGoal.module.css';

const AddGoal = ({ onClose, onAddGoal }) => {
    const [goalName, setGoalName] = useState('');

    const saveGoalHandler = () => {
        onAddGoal(goalName);
        onClose();
    };
    const outHandler = () => {
        onClose();
    };
    return (
      <div className={styles.screen}>
        <div className={styles.addscreen}>
          <button type="button" className={styles.out} onClick={outHandler}>X</button>
          <div className={styles.box}>
            <p className={styles.text1}>자격증 새로 등록하기</p>
            <div className={styles.wrap}>
              <p className={styles.text2}>자격증 명</p>
              <input type="text" className={styles.input} onChange={(e) => setGoalName(e.target.value)} />
            </div>
            <input type="submit" className={styles.submitbtn} value="자격증 등록하기" onClick={saveGoalHandler} />
          </div>
        </div>
      </div>
    );
};
AddGoal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onAddGoal: PropTypes.func.isRequired,
};

export default AddGoal;
