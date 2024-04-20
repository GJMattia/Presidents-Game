import { useState, useEffect, useRef } from 'react';
import './HomeArticle.css';
import { Link } from 'react-router-dom';

export default function HomeArticle() {
    const [animate1, setAnimate1] = useState(false);
    const [animate2, setAnimate2] = useState(false);
    const [animateTitle, setAnimateTitle] = useState(false);
    const gridRef1 = useRef<HTMLDivElement>(null);
    const gridRef2 = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.target === gridRef1.current) {
                    setAnimate1(true);
                } else if (entry.isIntersecting && entry.target === gridRef2.current) {
                    setAnimate2(true);
                }
            });
        });

        if (gridRef1.current) {
            observer.observe(gridRef1.current);
        }

        if (gridRef2.current) {
            observer.observe(gridRef2.current);
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
            const gridPosition1 = gridRef1.current?.getBoundingClientRect();
            if (gridPosition1) {
                if (gridPosition1.top > window.innerHeight || gridPosition1.bottom < 0) {
                    setAnimate1(false);
                }
            }

            const gridPosition2 = gridRef2.current?.getBoundingClientRect();
            if (gridPosition2) {
                if (gridPosition2.top > window.innerHeight || gridPosition2.bottom < 0) {
                    setAnimate2(false);
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
            if (gridRef1.current) {
                observer.unobserve(gridRef1.current);
            }
            if (gridRef2.current) {
                observer.unobserve(gridRef2.current);
            }
            if (titleRef.current) {
                titleObserver.unobserve(titleRef.current);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='HomeArticle'>
            <div className='JetBuffer'></div>
            <h1 className={`WelcomeTitle ${animateTitle ? 'SlideTitle' : ''}`} ref={titleRef}>
                WELCOME TO THE USA
            </h1>

            <div className='InfoGrid' ref={gridRef1}>
                <div className={`GridItem GridItem1 ${animate1 ? 'Slide1' : ''}`}>
                    <h1 className='GridTitle'>PRESIDENTS</h1>
                    <p className='GridP'>Learn about the presidents of the USA, and play an interactive game to test your knowledge</p>
                    <Link className='GridBtn PresidentBtn' to='/presidents'>LEARN ABOUT PRESIDENTS</Link>
                </div>
                <div className={`GridItem GridItem2 ${animate1 ? 'Slide2' : ''}`}>
                    <img src='https://media.architecturaldigest.com/photos/6559735fb796d428bef00d25/16:9/w_1280,c_limit/GettyImages-1731443210.jpg' className='GridImage' alt='Presidents' />
                </div>
            </div>

            <div className='InfoGrid' ref={gridRef2}>
                <div className={`GridItem GridItem3 ${animate2 ? 'Slide3' : ''}`}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg/800px-Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg' className='GridImage' alt='Washington Crossing the Delaware' />
                </div>
                <div className={`GridItem GridItem4 ${animate2 ? 'Slide4' : ''}`}>
                    <h1 className='GridTitle'>US HISTORY</h1>
                    <p className='GridP'>Learn about the history of the USA, and play an interactive game to test your knowledge</p>
                    <Link className='GridBtn HistoryBtn' to='/history'>LEARN ABOUT US HISTORY</Link>
                </div>
            </div>
        </div>
    );
}