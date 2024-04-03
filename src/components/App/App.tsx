import './App.css';
import MainMenu from '../MainMenu/MainMenu';
import Game from '../Game/Game';
import { useState } from 'react';

export default function App() {

  const [game, setGame] = useState<boolean>(true);

  return (
    <div className='App'>
      {/* {!game && <MainMenu setGame={setGame} />} */}
      {game && <Game setGame={setGame} />}
    </div>
  )
};
