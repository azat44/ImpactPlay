import styles from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={styles.headerContainer}>
                <img className={styles.avatarProfile} src="avatar.jpg"/>
                <p>Bonjour <span>Julie</span> !</p>
            </div>
        </header>
    )
}

export default Header;