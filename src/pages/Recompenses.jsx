import './Recompenses.css';

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
                        <div className="favReward">
                            <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"></path></svg>
                        </div>
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
