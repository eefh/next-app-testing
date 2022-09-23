import styles from '../styles/Home.module.css';
const Header = () => {
    return (
        <div className={styles.main}>
            <img src='http://24.media.tumblr.com/tumblr_m9xxjosWrT1rnwo2vo1_400.gif'/>
            <div className={styles.backdrop}>
                <p>blog blog blog</p>
            </div>
        </div>
    );
}

export default Header;