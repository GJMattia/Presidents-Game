import './Sauce.css';
import { useState } from 'react';
import RG from '../../assets/images/mk2.webp';


export default function Sauce() {

    const [flipped, setFlipped] = useState<boolean>(false);


    const handleClick = () => {
        if (!flipped) {
            setFlipped(true);
        }
    };

    return (
        <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="front">1</div>
            <div className="back">
                <img className='RG' src={RG} />
            </div>
        </div>
    );
};