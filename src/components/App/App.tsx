import './App.css';
import MainMenu from '../MainMenu/MainMenu';
import Game from '../PresidentGame/Game/Game';
import { Routes, Route } from 'react-router-dom';
import Sauce from '../Sauce/Sauce';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';


export default function App() {

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<MainMenu />} />
        <Route path='/play' element={<Game />} />
        <Route path='/leaderboard' element={<Sauce />} />
      </Routes>
      <Footer />
    </div>
  )
};
