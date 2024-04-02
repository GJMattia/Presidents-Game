import './MainMenu.css';

interface MainMenuProps {
    setGame: (value: boolean) => void;
}

export default function MainMenu({ setGame }: MainMenuProps) {
    return (
        <div className='MainMenu'>
            <h1>President Guessing Game</h1>
            <button onClick={() => setGame(true)}>Play</button>
            <button>Info</button>
        </div>
    );
}
