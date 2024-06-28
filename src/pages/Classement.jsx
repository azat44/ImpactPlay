import LeaderboardItem from '../components/leaderboardItem/LeaderboardItem';
import RankItem from '../components/rankItem/RankItem';
import RankPopup from '../components/rankPopUpItem/RankPopup';
import styles from './Classement.module.css';
import { useState } from 'react';

const Classement = () => {
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
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
    <section className={styles.sectionClassement}>
      <div className={styles.rankInfo} onClick={openPopup}>
        <img src="logo_original.svg"/>
      </div>
      {showPopup && (
        <div className={styles.popup} onClick={closePopup}>
          <div className={styles.popupContainer}>
            <div className={styles.closePopup} onClick={closePopup}>
              <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <RankPopup 
            rankImage= "logo_bronze.svg"
            rankName= "Bronze"
            rankAmountMin={16}
            rankAmountMax={36}
            />
                        <RankPopup 
            rankImage= "logo_gris.svg"
            rankName= "Argent"
            rankAmountMin={37}
            rankAmountMax={59}
            />
                        <RankPopup 
            rankImage= "logo_or.svg"
            rankName= "Or"
            rankAmountMin={60}
            rankAmountMax={119}
            />
                                    <RankPopup 
            rankImage= "logo_vert.svg"
            rankName= "Platine"
            rankAmountMin={120}
            rankAmountMax={204}
            />
                                    <RankPopup 
            rankImage= "logo_bleu.svg"
            rankName= "Diamant"
            rankAmountMin={205}
            rankAmountMax={399}
            />
                                    <RankPopup 
            rankImage= "logo_rouge.svg"
            rankName= "Ultra"
            rankAmountMin={400}
            rankAmountMax={649}
            />
          </div>
        </div>
      )}
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
