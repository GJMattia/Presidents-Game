import './App.css';
import MainMenu from '../MainMenu/MainMenu';
import Game from '../Game/Game';
import { Routes, Route } from 'react-router-dom';
// import Sauce from '../Sauce/Sauce';
import Timer from '../Timer/Timer';


export default function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/play' element={<Game />} />
        <Route path='/sauce' element={<Timer />} />
      </Routes>
    </div>
  )
};
