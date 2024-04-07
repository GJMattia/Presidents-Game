import './Timer.css';
import { useEffect } from 'react';

interface Props {
    time: number;
    setTime: (value: number) => void;
    gameStatus: boolean;
}

export default function Timer({ time, setTime }: Props) {


    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(time + 10);
        }, 10);

        return () =>
            clearInterval(intervalId);
    }, [time, setTime]);

    return (
        <div className='Timer'>
            <h1>{time / 1000}</h1>
        </div>
    );
}
