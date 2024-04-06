import './Game.css';
import { useState } from 'react';
import PresidentData from '../../assets/data/PresidentData.json';
import President from '../President/President';
import { Link } from 'react-router-dom';


export default function Game() {

    //State Variables
    const [presidentsLeft, setPresidentsLeft] = useState<number[]>(Array.from({ length: 46 }, (_, index: number) => index));
    const [current, setCurrent] = useState<number>(Math.floor(Math.random() * 46));

    return (
        <div className='Game'>
            <div className='Spotlight'>
                <h1>{PresidentData[current].name}</h1>
                <h1>{current + 1}</h1>
            </div>
            <div className='Presidents'>
                {PresidentData.map((_, index) => (
                    <President
                        key={index}
                        index={index}
                        name={PresidentData[index].name}
                        current={current}
                        setCurrent={setCurrent}
                        presidentsLeft={presidentsLeft}
                        setPresidentsLeft={setPresidentsLeft}
                    />
                ))}

            </div>
            <button><Link to='/'>Home</Link></button>
        </div>
    )
}