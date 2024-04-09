import './Results.css';
import { Link } from 'react-router-dom';

interface Props {
    time: number;
    wrong: number
};

export default function Results({ time, wrong }: Props) {
    return (
        <div className='Results'>

            <h1 className='ResultTitle'>results</h1>

            <h2 className='ResultStat'>you did it in {time / 1000} seconds.</h2>
            <h2 className='ResultStat'>you got {wrong} wrong.</h2>
            <Link className='GameBtn ReturnBtn' to='/'>Home</Link>
        </div>
    )
}