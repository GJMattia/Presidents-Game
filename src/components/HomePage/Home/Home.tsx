import { useEffect, useState } from 'react';
import './Home.css';
import Cities from '../../../assets/videos/Cities2.mov';
import HomeArticle from '../HomeArticle/HomeArticle';
import Jets from '../../../assets/images/jets.svg';

export default function Home() {
    const [scrollY, setScrollY] = useState<number>(0);
    const [spadeSize, setSpadeSize] = useState<number>(100);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            // Adjust the spade size based on the scroll position
            setSpadeSize(100 + scrollY * 2.5); // Adjust the factor as needed
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return (
        <div className='Home'>
            <video className='Cities' autoPlay loop muted>
                <source src={Cities} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <img
                className='Jets'
                src={Jets}
                alt='Spade'
                style={{ width: `${spadeSize}px`, height: `${spadeSize}px` }}
            />
            <HomeArticle />
        </div>
    );
}
