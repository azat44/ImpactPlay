import Xpbar from "../components/barreExp/Xpbar";
import Conseil from "../components/conseils/Conseils";
import RankItem from "../components/rankItem/RankItem";
import styles from './Home.module.css';

const Home = () => {
    return (
      <section className={styles.sectionHome}>
        <Xpbar
        amount={50}
        unit="XP"
        />
        <RankItem/>
        <Conseil/>
        <Xpbar
        amount={3}
        unit="Impact Points"
        />
      </section>
    );
}
export default Home;