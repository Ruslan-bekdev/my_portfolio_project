import React, {useEffect,Fragment} from 'react';
import classes from './MainPage.module.sass';
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Header from "../../components/layout/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {
    setDefaultLanguage,
    setNextLanguage,
} from "../../store/textSlice";
import {defaultLanguage} from "../../configs/texts";

const MainPage = () => {
    const dispatch = useDispatch();
    const textReducer = useSelector(state => state.textReducer)
    const getLanguageFromLocalStorage = () => {
        const storedConfig = localStorage.getItem('portfolio-config');
        return storedConfig ?JSON.parse(storedConfig) :defaultLanguage;
    };
    const saveLanguageToLocalStorage = () =>
        localStorage.setItem('portfolio-config', JSON.stringify(textReducer));
    const setNextLanguageAction = () =>
        dispatch(setNextLanguage());

    useEffect(()=>{
        dispatch(setDefaultLanguage(getLanguageFromLocalStorage()));
    },[]);
    useEffect(() => {
        textReducer.language && saveLanguageToLocalStorage();
    }, [textReducer.language]);

    if (!textReducer.language)
        return <></>;

	useEffect(()=>{
		const langData = getLanguageFromLocalStorage();
		console.log('Loaded language from localStorage:', langData);
		dispatch(setDefaultLanguage(langData));
	},[]);

	useEffect(() => {
		console.log('textReducer updated:', textReducer);
		textReducer.language && saveLanguageToLocalStorage();
	}, [textReducer.language]);


	return (
        <Fragment>
            <Header
                language={textReducer.language}
                languageTitle={textReducer.content.header.title}
                linksText={textReducer.content.header.links}
                setNextLanguage={setNextLanguageAction}
            />
            <main className={classes.main}>
                <Landing
                    text={textReducer.content.landing}
                />
                <About
                    id='about'
                    text={textReducer.content.about}
                />
                <Projects
                    id='projects'
                    text={textReducer.content.projects}
                />
                <Contacts
                    id='contacts'
                    text={textReducer.content.contacts}
                />

	            {/*Секретная личная ссылка, не влияет на работу сайта*/}
	            <a
		            href="https://ruslan-bekdev.github.io/codenote/"
		            style={{width: '4vh', aspectRatio: 1, position: "absolute", left: 0, bottom: 0}}
		            aria-label="codenote"
	            />
            </main>
        </Fragment>
    );
};

export default MainPage;