import './President.css';
import { useState } from 'react';

interface Props {
    index: number;
    name: string;
    current: number;
    setCurrent: (value: number) => void;
    presidentsLeft: number[];
    setPresidentsLeft: (value: number[]) => void;
}

export default function President({ index, name, current, setCurrent, presidentsLeft, setPresidentsLeft }: Props) {

    const [flip, setflip] = useState<boolean>(false);


    function randomNumber(numbersArray: number[]): number {
        const randomIndex: number = Math.floor(Math.random() * numbersArray.length);
        return numbersArray[randomIndex];
    };



    function checkPresident(event: any, index: number): void {

        if (index === current) {
            console.log('correct', index + 1)
            handleClick();
            const updatedPresidents = presidentsLeft.filter(num => num !== current);
            setPresidentsLeft(updatedPresidents);
            setCurrent(randomNumber(updatedPresidents));
            const doneElements = document.querySelectorAll("#Wrong");
            doneElements.forEach(element => {
                element.removeAttribute("id");
            });
            (event.target as HTMLElement).id = "Done";
        } else {
            (event.target as HTMLElement).id = "Wrong";
            console.log('wrong', index)
        }

    }


    function handleClick() {
        setflip(true);

    };

    return (
        <div className={`President ${flip ? 'Flip' : ''}`} onClick={(event) => checkPresident(event, index)}>
            <div className="Front">{index + 1}</div>
            <div className="Back">{name}</div>
        </div>
    );
};