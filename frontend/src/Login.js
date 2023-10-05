import styles from './Login.module.css';

function Login(){
    return(
        <>
        <div className={styles.viewport}>
            <div className={styles.box}>
                <img></img>
                <div className={styles.contents}>
                    <div className={styles.header}>
                        <p>Don't have an account?</p>
                        <button className={styles.signUpBtn}>Sign Up</button>
                    </div>
                    <div className={styles.main}>
                        <input type='emil' className={styles.email} />Enter Your Email
                        <input type='password' className={styles.password} />Enter Your Password
                    </div>
                    <div className={styles.footer}>
                        <button className={styles.signInBtn}>Sign In</button>
                        <p>Forgot password?</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Login;