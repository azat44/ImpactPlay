import React, { useState } from 'react';
import styles from './Defi.module.css';

const Defi = () => {
    const [activeTab, setActiveTab] = useState('Quêtes en cours');

    return (
        <section className={styles.container}>
          <div className={styles.header}>
            <div className={styles.headerText}>
              <div className={styles.headerTime}>
                Les missions quotidiennes se terminent dans
              </div>
              <div className={styles.headerHour}>
                12 heures 30 minutes
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.progressBarContainer}>
              <div>50</div>
              <div className={styles.progressBar}>
                <div className={styles.progress}></div>
              </div>
              <div className={styles.orButton}>
                OR
                <img src="logo_or.svg" className={styles.orImage} />
              </div>
            </div>
            <div className={styles.tabContainer}>
              <div 
                className={`${styles.tab} ${activeTab === 'Quêtes en cours' ? styles.active : ''}`}
                onClick={() => setActiveTab('Quêtes en cours')}
              >
                Quêtes en cours
              </div>
              <div 
                className={`${styles.tab} ${activeTab === 'Historique' ? styles.active : ''}`}
                onClick={() => setActiveTab('Historique')}
              >
                Historique
              </div>
            </div>
          </div>
    
          <div className={styles.selectedMission}>
            <div style={{ marginRight: '10px' }}>Faire 3km en vélo et marcher 3 km</div>
            <div style={{ marginLeft: '10px' }}>50 XP</div>
          </div>
    
          <div className={styles.card}>
            <div className={styles.bonusItem}>
              <div style={{ fontSize: '14px' }}>Bienvenue dans l'app Play Impact.</div>
              <div>10 XP</div>
            </div>
            <div className={styles.bonusItem}>
              <div style={{ fontSize: '14px' }}>Sortir dans la rue et recycler les poubelles.</div>
              <div>32 XP</div>
            </div>
            <div className={styles.bonusItem}>
              <div style={{ fontSize: '14px' }}>Apportez un arbre ou une grande plante.</div>
              <div>104 XP</div>
            </div>
          </div>
        </section>
      );
};

export default Defi;
