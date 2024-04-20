import './Timer.css';
import { useEffect } from 'react';

interface Props {
    time: number;
    setTime: (value: number) => void;
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
            {time / 1000}
        </div>
    );
}
