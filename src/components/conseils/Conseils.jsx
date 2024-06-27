import styles from './Conseil.module.css'

const Conseil = () => {
    return (
        <div className={styles.conseilContainer}>
            <div className={styles.conseilContent}>
                <p className={styles.conseilTitle}><img className={styles.logoConseil}src="logo_original.svg"/>Conseil du jour </p>
                <p>N`oubliez pas t’éteindre la console ou l`ordinateur quand vous ne jouez pas, baisser la luminosité de l`écran, ou utiliser des appareils énergétiquement efficaces.</p>
            </div>
        </div>
    )
}
export default Conseil;