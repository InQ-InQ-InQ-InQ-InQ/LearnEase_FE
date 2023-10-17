import styles from '../style/SideBar.module.css';

function SideBar(){
    return(
        <>
        <div className={styles.sidebar}>
            <div className={styles.wrap}>
            <div className={styles.head}>
                <p className={styles.text}>LearEase</p>
                <i></i>
            </div>
            <nav className={styles.navigation}>
                <a href='/today' className={styles.menu}>
                    <i></i>
                    <p>Today</p>
                </a>
                <a href='/weekly' className={styles.menu}>
                    <i></i>
                    <p>Weekly</p>
                </a>
                <a href='/plan' className={styles.menu}>
                    <i></i>
                    <p>Make Plan</p>
                </a>    
                <a href='/community' className={styles.menu}>
    
                    <i></i>
                    <p>Community</p>
                    
                </a>
            </nav>
            </div>
            <hr></hr>
            <div className={styles.wrap}>
            <nav className={styles.navigation}>
                <a href='/setting' className={styles.menu}>
                    <i></i>
                    <p>Setting</p>
                </a>
                <a href='/profile' className={styles.menu}>
                    <i></i>
                    <p>My Page</p>
                </a>
            </nav>
            </div>
        </div>
        </>
    );
}
export default SideBar;