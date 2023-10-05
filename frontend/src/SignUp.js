import styles from './SignUp.module.css';
import sample from './img/sample.png';

function SignUp(){
    return(
        <>
        <div className={styles.viewport}>
            <div className={styles.box}>
                <img src={sample} alt=''/>
                <div className={styles.contents}>
                    <div className={styles.wrap}>
                        <p>Email</p>
                        <div>
                        <input type='email' className={styles.input}/>
                        <button className={styles.button}>Send Email</button>
                        </div>
                    </div>
                    <div className={styles.wrap}>
                        <p>Certification Number</p>
                        <div>
                        <input type='number' className={styles.input}/>
                        <button className={styles.button}>Confirm</button>
                        </div>
                    </div>
                    <div className={styles.wrap}>
                        <p>Password</p>
                        <input type='password' className={styles.input2}/>
                    </div>
                    <div className={styles.wrap}>
                        <p>Nickname</p>
                        <input type='text' className={styles.input2}/>
                    </div>
                    <div>
                    <button className={styles.startBtn}>Get Started!</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default SignUp;