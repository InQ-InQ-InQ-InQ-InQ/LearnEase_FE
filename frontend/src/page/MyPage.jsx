import SideBar from '../component/SideBar';
import styles from '../style/MyPage.module.css';

function MyPage(){
    return(
        <>
        <div className={styles.viewport}>
        <SideBar/>
        <div className={styles.mainprofile}>
            <div className={styles.miniinfo}>
                <p className={styles.nickname}>닉네임</p>
                <p>Logout</p>
            </div>
        <div className={styles.headprofile}>
            <div className={styles.userinfo}>
                <p className={styles.nickname}>닉네임</p>
                <p className={styles.mail}>메일</p>
            </div>
            <button className={styles.profileeditbtn}>Edit Account</button>
        </div>
        <div className={styles.bodyprofile}>
            <p className={styles.text}>닉네임님의 목표</p> <br/>
            <div className={styles.goalwrap}>
                <div className={styles.goalbox}>
                    <p>정보처리기사실기</p>
                    <p>23/10/15~23/12/15</p>
                    <div className={styles.btnwrap}>
                        <button className={styles.deletebtn}>Delete</button>
                        <button className={styles.goaleditbtn}>Edit</button>
                    </div>
                </div>
                <div className={styles.goalbox}>
                    <p>정보처리기사실기</p>
                    <p>23/10/15~23/12/15</p>
                    <div className={styles.btnwrap}>
                        <button className={styles.deletebtn}>Delete</button>
                        <button className={styles.goaleditbtn}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    );
}
export default MyPage;