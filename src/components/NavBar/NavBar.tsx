import './NavBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import Flag from '../../assets/images/Flag.webp';

export default function NavBar() {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
        document.documentElement.style.overflowY = menu ? 'auto' : 'hidden';
    };

    return (
        <>
            <nav className='NavBar'>
                <div className='NavFrame'>
                    <img className='FlagIcon' src={Flag} />
                    <Link to='/' className='NavTitle'>USA WEBSITE</Link>
                </div>
                <button className='NavBtn' onClick={toggleMenu}>
                    <div className={`Slice ${menu ? 'Slice1' : ''}`}></div>
                    <div className={`Slice ${menu ? 'Slice2' : ''}`}></div>
                    <div className={`Slice ${menu ? 'Slice3' : ''}`}></div>
                </button>
            </nav>
            <NavMenu menu={menu} />

        </>
    );
}
