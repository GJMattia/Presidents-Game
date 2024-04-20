import './App.css';
import MainMenu from '../MainMenu/MainMenu';
import Game from '../PresidentGame/Game/Game';
import { Routes, Route } from 'react-router-dom';
import Sauce from '../Sauce/Sauce';
import Home from '../HomePage/Home/Home';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import History from '../History/History';
import NavMenu from '../NavMenu/NavMenu';

export default function App() {

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<NavMenu />} />
        <Route path='/presidents' element={<MainMenu />} />
        <Route path='history' element={<History />} />
        <Route path='/play' element={<Game />} />
        <Route path='/leaderboard' element={<Sauce />} />
      </Routes>
      <Footer />
    </div>
  )
};
