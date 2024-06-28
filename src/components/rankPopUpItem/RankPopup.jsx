import styles from './RankPopup.module.css'

const RankPopup = ({rankName, rankImage, rankAmountMax, rankAmountMin}) => {
    return (
        <div className={styles.rankItemPopup}>
            <img src={rankImage}/>
            <div className={styles.rankInfo}>
                <p>{rankName}</p>
                <p>{rankAmountMin} à {rankAmountMax} XP</p>
            </div>
        </div>
    )
}
export default RankPopup