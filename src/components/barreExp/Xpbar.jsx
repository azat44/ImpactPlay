import styles from './Xpbar.module.css'

const Xpbar = ({ amount, unit }) => {
    return (
        <div className={styles.xpbarContainer}>
            <div className={styles.apagnan}>
                <p className={styles.xpbarNumber}><span id="xpAmount">{amount}</span> {unit} </p>
                <div className={styles.xpbarContent}>
                    <div className={styles.xpbar}></div>
                </div>
            </div>
        </div>
    )
}
export default Xpbar;