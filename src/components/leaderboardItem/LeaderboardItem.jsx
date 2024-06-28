import styles from './LeaderboardItem.module.css';
const LeaderboardItem = ({name, rankPosition, Xp}) => {
    return (
        <div id="tt" className={styles.LeaderboardContainer}>
            <div className={styles.LeaderboardLeft}>
                <div id="LeaderboardTop">
                    <p>{rankPosition}</p>
                </div>
                <p>{name}</p>
            </div>
            <div className={styles.LeaderboardRight}>
                <p className={styles.LeaderboardXp}>{Xp} XP</p>
            </div>
        </div>
    )
}
export default LeaderboardItem