import { useState } from 'react';
import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        if (isOpen) {
            // If the menu is open, navigate back to the previous route
            navigate(-1);
        } else {
            // If the menu is closed, navigate to '/menu'
            navigate('/menu');
        }
        setIsOpen(!isOpen);
    };

    return (
        <nav className='NavBar'>
            <Link to='/' className='NavTitle'>USA WEBSITE</Link>
            <button className='NavBtn' onClick={toggleMenu}>
                <div className={`Slice ${isOpen ? 'Slice1' : ''}`}></div>
                <div className={`Slice ${isOpen ? 'Slice2' : ''}`}></div>
                <div className={`Slice ${isOpen ? 'Slice3' : ''}`}></div>
            </button>
        </nav>
    );
}
