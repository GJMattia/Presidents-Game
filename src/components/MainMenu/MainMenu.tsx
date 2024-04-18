import './MainMenu.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function MainMenu() {
    const [hover, sethover] = useState(false);

    return (
        <div className='MainMenu'>
            <div className='Menu' style={{ backgroundColor: hover ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.2)' }}>
                <h1 className='GameTitle'>usa presidents trivia</h1>
                <Link
                    className='MenuBtn PlayBtn'
                    to='/play'
                    onMouseEnter={() => sethover(true)}
                    onMouseLeave={() => sethover(false)}
                >
                    Play
                </Link>
                <Link
                    className='MenuBtn LeaderboardBtn'
                    to='/'
                    onMouseEnter={() => sethover(true)}
                    onMouseLeave={() => sethover(false)}
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}
