import styles from '../style/SideBar.module.css';

function SideBar(){
    return(
        <>
        <div className={styles.sidebar}>
            <div className={styles.head}>
                <p className={styles.text}>LearEase</p>
                <i></i>
            </div>
            <nav className={styles.navigation}>
                <a href='/today'>
                    <i></i>
                    <p className={styles.text1}>Today</p>
                </a>
                <a href='/weekly'>
                    <i></i>
                    <p className={styles.text1}>Weekly</p>
                </a>
                <a href='/plan'>
                    <i></i>
                    <p className={styles.text1}>Make Plan</p>
                </a>    
                <a href='/community'>
                    <div className={styles.menu}>
                    <i></i>
                    <p className={styles.text1}>Community</p>
                    </div>
                </a>
            </nav>
            <hr></hr>
            <nav className={styles.navigation}>
                <a href='/setting'>
                    <i></i>
                    <p className={styles.text1}>Setting</p>
                </a>
                <a href='/profile'>
                    <i></i>
                    <p className={styles.text1}>My Page</p>
                </a>
            </nav>
        </div>
        </>
    );
}
export default SideBar;