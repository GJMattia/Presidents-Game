import { Link } from 'react-router-dom';
import './Sauce.css';

export default function Sauce() {

    const BASE_URL: string = 'http://localhost:4741/scores';


    async function getScores() {
        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }



    return (
        <div className='Sauce'>
            <button className='GameBtn ReturnBtn' onClick={getScores}>Get Scores</button>
            <Link className='GameBtn ReturnBtn' to='/'>Home</Link>
        </div>
    )
}