import { useState, useEffect } from 'react';

type LeaderboardEntry = {
    name: string;
    score: number;
};

const Leaderboard: React.FC = () => {
    const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);

    useEffect(() => {
        const fetchData = () => {
            const storedData = localStorage.getItem('leaderboard');
            if (storedData) {
                setLeaderboardData(JSON.parse(storedData));
            }
        };

        fetchData();
    }, []);

    const saveToLocalStorage = (data: LeaderboardEntry[]) => {
        localStorage.setItem('leaderboard', JSON.stringify(data));
    };

    const addEntry = () => {
        const newEntry: LeaderboardEntry = { name: 'Herman', score: Math.floor(Math.random() * 1000) };
        const updatedData = [...leaderboardData, newEntry];
        setLeaderboardData(updatedData);
        saveToLocalStorage(updatedData);
    };

    return (
        <div>
            <h1>Leaderboard</h1>
            <button onClick={addEntry}>Add Entry</button>
            <ul>
                {leaderboardData.map((entry, index) => (
                    <li key={index}>
                        <strong>{entry.name}</strong>: {entry.score}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
