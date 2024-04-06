import './MainMenu.css';
import { Link } from 'react-router-dom';

export default function MainMenu() {
    return (
        <div className='MainMenu'>

            <h1>President Guessing Game</h1>
            <Link className='play-button' to='/play'>Play</Link>
        </div>
    );

}