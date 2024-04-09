import './Spotlight.css';
import Timer from '../Timer/Timer';

interface Props {
    img: string;
    name: string;
    term: string;
    time: number;
    setTime: (value: number) => void;
}

export default function Spotlight({ img, name, term, time, setTime }: Props) {
    return (

        <div className='Spotlight'>
            <Timer time={time} setTime={setTime} />
            <img className='Portrait' src={img} />
            <h1 className='PresidentTitle'>{name}</h1>
            {/* <h1 className='PresidentTitle'>{term}</h1> */}

        </div>

    )
}