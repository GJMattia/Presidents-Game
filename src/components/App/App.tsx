import './App.css';
import Game from '../Presidents/Game/Game';
import { Routes, Route } from 'react-router-dom';
import Sauce from '../Sauce/Sauce';
import Home from '../HomePage/Home/Home';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import History from '../History/History';
import PresidentMenu from '../Presidents/PresidentMenu/PresidentMenu';

export default function App() {

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/presidents' element={<PresidentMenu />} />
        <Route path='history' element={<History />} />
        <Route path='/play' element={<Game />} />
        <Route path='/leaderboard' element={<Sauce />} />
      </Routes>
      <Footer />
    </div>
  )
};
