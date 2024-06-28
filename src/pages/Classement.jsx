import LeaderboardItem from '../components/leaderboardItem/LeaderboardItem';
import styles from './Classement.module.css';

const Classement = () => {
  const users = [
    { name: "Lenny", Xp: 290 },
    { name: "Elias", Xp: 287 },
    { name: "Azat", Xp: 280 },
    { name: "Ethan", Xp: 279 },
    { name: "Julie", Xp: 275 },
    { name: "Marc", Xp: 279 },
    { name: "Elodie", Xp: 279 },
    { name: "Axel", Xp: 279 },
    { name: "Patrick", Xp: 279 },
    { name: "Titouan", Xp: 279 },
    { name: "Samir", Xp: 279 },
    { name: "Adil", Xp: 279 },
    { name: "Jean", Xp: 279 },
];
  return (
    <section>
      <div className={styles.leaderboard}>
      {users.map((user, index) => (
        <LeaderboardItem
          key={index}
          name={user.name}
          rankPosition={index + 1}
          Xp={user.Xp}
        />
      ))}
      </div>
    </section>
  );
};

export default Classement;
