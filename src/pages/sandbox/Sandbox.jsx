import React, { useEffect, useRef, useState } from 'react';
import classes from './Sandbox.module.css';

const Sandbox = () => {
    const containerRef = useRef();
    const [current, setCurrent] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const slidesCount = 4;

    const nextCurr = () => {
        setCurrent((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));
    };

    const prevCurr = () => {
        setCurrent((prev) => (prev === 0 ? slidesCount - 1 : prev - 1));
    };

    useEffect(() => {
        if (current === 3) {
            containerRef.current.style.transitionDuration = '0s';
            setTimeout(()=>{
                setCurrent(0);
            },200);
        }
        if (current === 0) {
            containerRef.current.style.transitionDuration = '0s';
            setTranslateX(containerRef.current.clientWidth * current);
        }
        else {
            containerRef.current.style.transitionDuration = '.2s';
            setTranslateX(containerRef.current.clientWidth * current);
        }
    }, [current]);

    const handleTransitionEnd = () => {
        if (current === slidesCount) {
            setCurrent(0);
        } else if (current === -1) {
            setCurrent(slidesCount - 1);
        }
    };

    useEffect(() => {
        containerRef.current.style.transitionDuration = '.2s';
        containerRef.current.addEventListener('transitionend', handleTransitionEnd);

        return () => {
            containerRef.current.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, []);

    return (
        <div className='container'>
            <div className={classes.Root}>
                <ul
                    ref={containerRef}
                    className={classes.Container}
                    style={{ transform: `translate3d(${-translateX}px,0,0)` }}
                >
                    <li className={classes.Slide}>
                        <img src="https://i.pinimg.com/originals/64/b5/81/64b58125e2b8cc840e0ee55ea7f4f818.jpg" alt="" />
                    </li>
                    <li className={classes.Slide}>
                        <img src="https://images.wallpaperscraft.ru/image/single/lodka_gory_ozero_135258_300x168.jpg" alt="" />
                    </li>
                    <li className={classes.Slide}>
                        <img src="https://i.artfile.ru/1920x1080_811362_[www.ArtFile.ru].jpg" alt="" />
                    </li>
                    <li className={classes.Slide}>
                        <img src="https://i.pinimg.com/originals/64/b5/81/64b58125e2b8cc840e0ee55ea7f4f818.jpg" alt="" />
                    </li>
                </ul>
                <button
                    style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        left: '4%'
                    }}
                    onClick={prevCurr}
                >
                    {'<'}
                </button>
                <button
                    style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        right: '4%'
                    }}
                    onClick={nextCurr}
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
};

export default Sandbox;