import { useEffect, useState } from 'react';
import './Home.css';
import Cities from '../../../assets/videos/Cities2.mov';
import HomeArticle from '../HomeArticle/HomeArticle';
import Jets from '../../../assets/images/jets.svg';
import Statue from '../../../assets/images/statue.jpg';

export default function Home() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='Home'>
            <img className='Statue' src={Statue} />
            <video className='Cities' autoPlay loop muted>
                <source src={Cities} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <img
                className='Jets'
                src={Jets}
                alt='Jets'
                style={{ transform: `translateY(-${scrollY}px)` }}
            />
            <HomeArticle />
        </div>
    );
}