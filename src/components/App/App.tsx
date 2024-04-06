import './App.css';
import MainMenu from '../MainMenu/MainMenu';
import Game from '../Game/Game';
import { Routes, Route } from 'react-router-dom';


export default function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/play' element={<Game />} />
      </Routes>
    </div>
  )
};
