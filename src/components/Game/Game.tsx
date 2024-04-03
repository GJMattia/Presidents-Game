import './Game.css';
import { useState } from 'react';
import PresidentData from '../../assets/data/PresidentData.json';

interface GameProps {
    setGame: (value: boolean) => void;
};


export default function Game({ setGame }: GameProps) {


    //State Variables
    const [numbers, setNumbers] = useState<number[]>(Array.from({ length: 46 }, (_, index: number) => index))
    const [current, setCurrent] = useState<number>(randomNumber(numbers));

    //regular variables
    const presidents: number[] = new Array(46).fill(null);

    //Functions

    function randomNumber(numbersArray: number[]): number {
        const randomIndex: number = Math.floor(Math.random() * numbersArray.length);
        return numbersArray[randomIndex];
    }


    function check(event: any, index: number): void {
        if (index === current) {
            const updatedNumbers = numbers.filter(num => num !== current);
            setNumbers(updatedNumbers);

            setCurrent(randomNumber(updatedNumbers));

            (event.target as HTMLElement).id = "Done";
        } else {
            console.log('No Match');
        }
    }


    return (
        <div className='Game'>

            <div className='Spotlight'>
                <h1>{PresidentData[current].name}</h1>
                {/* <h1>{current + 1}</h1> */}

            </div>

            <div className='Presidents'>
                {presidents.map((_, index) => (
                    <div
                        onClick={(event) => check(event, index)}
                        key={index} className="PresidentDiv">{index + 1}

                    </div>
                ))}
            </div>
            <button onClick={() => setGame(false)}>Return to Menu, I fucking Quit</button>
        </div>
    )
}