import styles from './RankItem.module.css';

const RankItem = () => {
    return (
        <div className={styles.rankContainer}>
            <div className={styles.rankContent}>
                <img src="logo_bleu.svg"/>
                <p>Diamant</p>
            </div>
        </div>
    );
}
export default RankItem;