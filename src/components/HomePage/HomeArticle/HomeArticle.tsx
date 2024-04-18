import { useState, useEffect, useRef } from 'react';
import './HomeArticle.css';
import { Link } from 'react-router-dom';

export default function HomeArticle() {
    const [animate, setAnimate] = useState(false);
    const [animateTitle, setAnimateTitle] = useState(false);
    const gridRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                } else {
                    setAnimate(false);
                }
            });
        });

        if (gridRef.current) {
            observer.observe(gridRef.current);
        }

        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setAnimateTitle(true);
                } else {
                    setAnimateTitle(false);
                }
            });
        });

        if (titleRef.current) {
            titleObserver.observe(titleRef.current);
        }

        const handleScroll = () => {
            const gridPosition = gridRef.current?.getBoundingClientRect();
            if (gridPosition) {
                if (gridPosition.top > window.innerHeight || gridPosition.bottom < 0) {
                    setAnimate(false);
                }
            }

            const titlePosition = titleRef.current?.getBoundingClientRect();
            if (titlePosition) {
                if (titlePosition.top > window.innerHeight || titlePosition.bottom < 0) {
                    setAnimateTitle(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (gridRef.current) {
                observer.unobserve(gridRef.current);
            }
            if (titleRef.current) {
                titleObserver.unobserve(titleRef.current);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='HomeArticle'>
            <h1 className={`WelcomeTitle ${animateTitle ? 'SlideTitle' : ''}`} ref={titleRef}>
                WELCOME TO THE USA
            </h1>

            <div className='InfoGrid' ref={gridRef}>

                <div className={`GridItem GridItem1 ${animate ? 'Slide1' : ''}`}>
                    <h1 className='GridTitle'>PRESIDENTS</h1>
                    <p className='GridP'>Learn about the presidents of the USA, and play a interactive game to test your knowledge</p>
                    <Link className='GridBtn PresidentBtn' to='/presidents'>LEARN ABOUT PRESIDENTS </Link>
                </div>
                <div className={`GridItem GridItem2 ${animate ? 'Slide2' : ''}`}>
                    <img src='https://media.architecturaldigest.com/photos/6559735fb796d428bef00d25/16:9/w_1280,c_limit/GettyImages-1731443210.jpg' className='GridImage' />
                </div>
                <div className={`GridItem GridItem3 ${animate ? 'Slide3' : ''}`}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg/800px-Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg' className='GridImage' />
                </div>
                <div className={`GridItem GridItem4 ${animate ? 'Slide4' : ''}`}>
                    <h1 className='GridTitle'>US HISTORY</h1>
                    <p className='GridP'>Learn about history of the USA, and play a interactive game to test your knowledge</p>
                    <Link className='GridBtn HistoryBtn' to='/presidents'>LEARN ABOUT US HISTORY </Link>
                </div>
            </div>
        </div>
    )
}
