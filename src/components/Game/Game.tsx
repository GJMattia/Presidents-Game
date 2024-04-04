import './Game.css';
import { useState, useEffect } from 'react';
import PresidentData from '../../assets/data/PresidentData.json';
import Results from '../Results/Results';

interface GameProps {
    setGame: (value: boolean) => void;
};


export default function Game({ setGame }: GameProps) {


    //State Variables
    const [numbers, setNumbers] = useState<number[]>(Array.from({ length: 46 }, (_, index: number) => index));
    const [current, setCurrent] = useState<number>(randomNumber(numbers));
    const [right, setRight] = useState<number>(0);
    const [wrong, setWrong] = useState<number>(0);
    const [results, setResults] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);

    //UseEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        // Clear interval when 'right' equals 45
        if (right === 45) {
            clearInterval(intervalId);
        }

        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(intervalId);
    }, [right]);

    //regular variables
    const presidents: number[] = new Array(46).fill(null);

    //Functions
    function randomNumber(numbersArray: number[]): number {
        const randomIndex: number = Math.floor(Math.random() * numbersArray.length);
        return numbersArray[randomIndex];
    }


    function check(event: any, index: number): void {

        if (index === current) {

            setRight(right + 1);

            if (right === 45) {
                setResults(true)
            }

            const updatedNumbers = numbers.filter(num => num !== current);
            setNumbers(updatedNumbers);
            setCurrent(randomNumber(updatedNumbers));
            const doneElements = document.querySelectorAll("#Wrong");
            doneElements.forEach(element => {
                element.removeAttribute("id");
            });
            (event.target as HTMLElement).id = "Done";

        } else {
            setWrong(wrong + 1);
            (event.target as HTMLElement).id = "Wrong";
        }
    }


    return (
        <div className='Game'>

            <div className='Spotlight'>
                {numbers.length > 0 ? (
                    <h1>{PresidentData[current].name}</h1>
                ) : (
                    <h1>You won</h1>
                )}
                <h1>{current + 1}</h1>
                <h1>{time}</h1>
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

            {results && <Results wrong={wrong} time={time} />
            }
        </div>
    )
}