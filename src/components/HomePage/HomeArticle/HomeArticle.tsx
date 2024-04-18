import React, { useState, useEffect, useRef } from 'react';
import './HomeArticle.css';

export default function HomeArticle() {
    const [animate, setAnimate] = useState(false);
    const gridRef = useRef<HTMLDivElement>(null);

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

        const handleScroll = () => {
            const gridPosition = gridRef.current?.getBoundingClientRect();
            if (gridPosition) {
                if (gridPosition.top > window.innerHeight || gridPosition.bottom < 0) {
                    setAnimate(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (gridRef.current) {
                observer.unobserve(gridRef.current);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='HomeArticle'>
            <h1 className='WelcomeTitle'>WELCOME TO THE USA</h1>

            <div className='InfoGrid' ref={gridRef}>

                <div className={`GridItem GridItem1 ${animate ? 'Slide1' : ''}`}>
                    <h1>Presidents</h1>
                    <p>Learn about the presidents of the USA, and play a fun interactive game to test your knowledge.</p>
                    <button>Learn about Presidents</button>
                </div>
                <div className={`GridItem GridItem2 ${animate ? 'Slide2' : ''}`}>
                    <h1>States</h1>
                    <p>Learn about the 50 US states, and play a fun interactive game to test your knowledge.</p>
                    <button>Learn about the States</button>
                </div>
                <div className={`GridItem GridItem3 ${animate ? 'Slide3' : ''}`}>
                    <h1>History</h1>
                    <p>Learn about the 50 US states, and play a fun interactive game to test your knowledge.</p>
                    <button>Learn about US History</button>
                </div>
                <div className={`GridItem GridItem4 ${animate ? 'Slide4' : ''}`}>
                    <h1>Allies/Opposition</h1>
                    <p>Learn about the Allies/Opposition of the US, and play a fun interactive game to test your knowledge.</p>
                    <button>Learn about Allies/Opposition</button>
                </div>
            </div>
        </div>
    )
}
