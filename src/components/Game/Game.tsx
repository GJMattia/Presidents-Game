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
        <div className='GameBox'>
            <div className='Game'>
                <div className='Spotlight'>
                    <img className='Portrait' src={PresidentData[current].img} />
                    <div className='PresidentInfo'>
                        <h1 className='PresidentTitle'>{PresidentData[current].name}</h1>
                        <h1>Term: {PresidentData[current].termSpan}</h1>
                    </div>
                    {/* <h1>{current + 1}</h1> */}
                </div>
                <div className='Presidents'>
                    {PresidentData.map((_, index) => (
                        <President
                            key={index}
                            index={index}
                            name={PresidentData[index].name}
                            img={PresidentData[index].img}
                            current={current}
                            setCurrent={setCurrent}
                            presidentsLeft={presidentsLeft}
                            setPresidentsLeft={setPresidentsLeft}
                        />
                    ))}

                </div>
                <Link className='ReturnBtn' to='/'>Home</Link>
            </div>
        </div>
    )
}