import './President.css';
import { useState } from 'react';

interface Props {
    index: number;
    name: string;
    img: string;
    current: number;
    wrong: number;
    presidentsLeft: number[];
    setCurrent: (value: number) => void;
    setPresidentsLeft: (value: number[]) => void;
    setGameStatus: (value: boolean) => void;
    setWrong: (value: number) => void;
}

export default function President({ index, name, img, current, wrong, presidentsLeft, setPresidentsLeft, setGameStatus, setCurrent, setWrong }: Props) {

    const [flip, setflip] = useState<boolean>(false);


    function randomNumber(numbersArray: number[]): number {
        const randomIndex: number = Math.floor(Math.random() * numbersArray.length);
        return numbersArray[randomIndex];
    };



    function checkPresident(event: any, index: number): void {
        if (presidentsLeft.length === 1 && index === current) {
            setGameStatus(false);
        }

        if (index === current) {
            handleClick();
            const updatedPresidents = presidentsLeft.filter(num => num !== current);
            setPresidentsLeft(updatedPresidents);
            setCurrent(randomNumber(updatedPresidents));
            const doneElements = document.querySelectorAll("#Wrong");
            doneElements.forEach(element => {
                element.removeAttribute("id");
            });
        } else {
            setWrong(wrong + 1);
            (event.target as HTMLElement).id = "Wrong";
        }

    }


    function handleClick() {
        setflip(true);

    };

    return (
        <div className={`President ${flip ? 'Flip' : ''}`} onClick={(event) => checkPresident(event, index)}>
            <div className="Front">{index + 1}</div>
            <div className="Back">
                <p className='PresidentName'>{name}</p>
                <img src={img} />
            </div>
        </div>
    );
};