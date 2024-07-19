import React, {useEffect,useRef, useState,Fragment} from 'react';
import classes from './MainPage.module.css';

const MainPage = () => {
    const cardTopPosition = 60;
    const cardMargin = 20;
    const backAnimationSpeed = 1800;
    const titleAnimationSpeed = backAnimationSpeed/10;
    const [title,setTitle] = useState('ГЛАВНАЯ');
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [isBackActive, setIsBackActive] = useState(false);
    const [bodyBackgroundIndex, setBodyBackgroundIndex] = useState(null);
    const titleIntervalRef = useRef(null);

    const bodyBacks = [
        'https://i.work.ua/article/579b.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOQwmYUq7RlG0e6dvr7KsXwo7l0Uur0bhL_BWFx3eeQ&s',
        'https://static.fotogora.ru/fotogora/wysiwyg/wp-content/uploads/2014/07/photo-new-tech.jpg',
    ];
    const titleTexts = [
        'Первый',
        'Второй',
        'Третий',
    ];

    const handleNextBodyBack = () => {
        setBodyBackgroundIndex(prevIndex => {
            if (prevIndex === null || prevIndex === bodyBacks.length - 1)
                return 0
            else
                return prevIndex + 1
        });
    };
    const startTitleAnimation = () => {
        setTitle('ГЛАВНАЯ');
        clearInterval(titleIntervalRef.current);
        if (bodyBackgroundIndex === null) return;

        setTitle('');
        titleIntervalRef.current = setInterval(() => {
            setTitle(prevTitle => {
                const nextChar = titleTexts[bodyBackgroundIndex][prevTitle.length];
                return prevTitle + nextChar;
            });
        }, titleAnimationSpeed);
    };
    const startInterval = () => {
        if (!intervalId) {
            setIsBackActive(true);
            handleNextBodyBack();
            const id = setInterval(() => {
                handleNextBodyBack();
            }, backAnimationSpeed);
            setIntervalId(id);
            startTitleAnimation();
        }
    };
    const stopInterval = () => {
        if (intervalId) {
            setIsBackActive(false);
            clearInterval(intervalId);
            clearInterval(titleIntervalRef.current)
            setIntervalId(null);
            setTitle('ГЛАВНАЯ')
        }
    };

    useEffect(() => {
        const listItems = document.querySelectorAll(`.${classes.wrapper__item}`);
        listItems.forEach((li, index) => {
            li.style.top = `${cardTopPosition + cardMargin * index}px`
            li.style.zIndex = 1000 * index
        });
        const wrapperText = document.querySelector(`.${classes.wrapper__text}`)
        wrapperText.style.top = `${cardTopPosition + cardMargin * activeCardIndex}px`;
    }, []);
    useEffect(() => {
        const wrapperText = document.querySelector(`.${classes.wrapper__text}`)
        wrapperText.style.top = `${cardTopPosition + cardMargin * activeCardIndex}px`;
    }, [activeCardIndex]);
    useEffect(()=>{
        const handleShowActiveText = () => {
            const listItems = document.querySelectorAll(`.${classes.wrapper__item}`);
            listItems.forEach((item,index) => {
                const itemRect = item.getBoundingClientRect();
                const itemTop = itemRect.top;
                if (index === listItems.length -1 && itemTop <= cardTopPosition + cardMargin * index) {
                    return setActiveCardIndex(index);
                }
                if (itemTop === cardTopPosition + cardMargin * index) {
                    return setActiveCardIndex(index)
                }
            });
        };

        window.addEventListener('scroll', handleShowActiveText);
        return () => {
            window.addEventListener('scroll', handleShowActiveText);
        }
    },[]);
    useEffect(()=>{
        startTitleAnimation();
    },[bodyBackgroundIndex]);
    useEffect(()=>{
        if (title === titleTexts[bodyBackgroundIndex]) {
            clearInterval(titleIntervalRef.current);
        }
    },[title]);

    return (
        <Fragment>
            <div
                className={classes.back}
            >
                {
                    bodyBacks.map((item,index)=>
                        <div
                            className={`${classes.back__item} ${bodyBackgroundIndex === index ?classes.back__item_active :classes.back__item_passive}`}
                            style={{backgroundImage: `url(${item})`,opacity: `${isBackActive ?1 :0}`}}
                        />
                    )
                }
            </div>
            <div className={`${classes.main} container`}>
                <h1>{title}</h1>
                <button
                    onClick={() => intervalId ?stopInterval() :startInterval()}
                >
                    {
                        isBackActive
                            ?'Стоп' :'Старт'
                    }
                </button>
                <div className={classes.marquee}>
                    <div>
                        <h2>КОНЕЦ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, nulla! НАЧАЛО</h2>
                        <h2>КОНЕЦ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, nulla! НАЧАЛО</h2>
                    </div>
                </div>
                <div className={classes.wrapper}>
                    <div>
                        <div className={`${classes.wrapper__item}`}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-RkOsheKSrq-lgCyjx0FGPxeAkgcISxzLic7s-zJ1Q&s" alt=""/>
                        </div>
                        <div className={`${classes.wrapper__item}`}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-RkOsheKSrq-lgCyjx0FGPxeAkgcISxzLic7s-zJ1Q&s" alt=""/>
                        </div>
                        <div className={`${classes.wrapper__item}`}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-RkOsheKSrq-lgCyjx0FGPxeAkgcISxzLic7s-zJ1Q&s" alt=""/>
                        </div>
                        <div className={`${classes.wrapper__item}`}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-RkOsheKSrq-lgCyjx0FGPxeAkgcISxzLic7s-zJ1Q&s" alt=""/>
                        </div>
                        <div className={`${classes.wrapper__item}`}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-RkOsheKSrq-lgCyjx0FGPxeAkgcISxzLic7s-zJ1Q&s" alt=""/>
                        </div>
                    </div>
                    <h2 className={classes.wrapper__text}>LOL</h2>
                </div>
            </div>
        </Fragment>
    );
};

export default MainPage;
