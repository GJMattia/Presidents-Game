import './Game.css';
import { useState } from 'react';
import PresidentData from '../../assets/data/PresidentData.json';

interface GameProps {
    setGame: (value: boolean) => void;
};


export default function Game({ setGame }: GameProps) {

    function check(index: number): void {
        if (index === current) {
            console.log('Match');
            setCurrent(Math.floor(Math.random() * 46) + 1);
        } else {
            console.log('No Match');
        }
    };



    const [current, setCurrent] = useState<number>(1);
    const presidents: number[] = new Array(46).fill(null);

    return (
        <div className='Game'>

            <div className='Spotlight'>
                <h1>{PresidentData[current].name}</h1>
                <h1>{current + 1}</h1>
            </div>

            <div className='Presidents'>
                {presidents.map((_, index) => (
                    <div
                        onClick={() => check(index)}
                        key={index} className="PresidentDiv">{index + 1}
                        {PresidentData[index].name}
                    </div>
                ))}
            </div>
            <button onClick={() => setGame(false)}>Return to Menu, I fucking Quit</button>
        </div>
    )
}