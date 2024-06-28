import React from 'react';
import './Recompenses..css';

const rewards = [
    { id: 1, title: "50€", image: "steam.svg", points: 400 },
    { id: 2, title: "200 Impact point", image: "google.svg", points: 200 },
    { id: 3, title: "120€", image: "apexpoint.svg", points: 100 },
    { id: 4, title: "50€", image: "xbox.svg", points: 200 },
    { id: 5, title: "100 Impact point", image: "vbuck.svg", points: 100 },
    { id: 6, title: "2000 V-Bucks", image: "riot.svg", points: 200 },
    { id: 7, title: "50 R$", image: "psn.svg", points: 400 },
    { id: 8, title: "1000 Coins", image: "apexpoint.svg", points: 100 }
];

function Recompenses() {
    return (
        <div className="reward-container">
            <div className="reward-button">
                Récompense
            </div>
            <div className="reward-list">
                {rewards.map(reward => (
                    <div key={reward.id} className="reward-card">
                        <img src={`/${reward.image}`} alt={reward.title} className="reward-image" />
                        <div className="reward-info">
                            <div className="reward-title">{reward.title}</div>
                            <div className="reward-points">{reward.points} points</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recompenses;
