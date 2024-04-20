import './PresidentMenu.css';
import { Link } from 'react-router-dom';
import Capital from '../../../assets/images/capital.jpg';
export default function PresidentMenu() {

    return (

        <div className='PresidentMenu'>
            <div className='PresidentInfo'>

                <div className='PresidentInfoBox'>
                    <h1>THE PRESIDENTS OF THE USA</h1>
                    <p>Learn about the presidents of the united states of america</p>
                    <Link className='GridBtn PresidentBtn' to='/play'>PLAY THE GAME</Link>
                </div>

                <div className='PresidentInfoBox'>

                    <img className='PresidentInfoImage' src={Capital} />
                </div>

            </div>

        </div>

    );
}
