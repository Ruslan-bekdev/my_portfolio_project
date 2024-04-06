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
    const setNextLanguageAction = () => {
        dispatch(setNextLanguage());
    };
    const saveLanguageToLocalStorage = () => {
        localStorage.setItem('portfolio-config', JSON.stringify(textReducer));
    };
    const getLanguageFromLocalStorage = () => {
        const storedConfig = localStorage.getItem('portfolio-config');
        return storedConfig ?JSON.parse(storedConfig) :defaultLanguage;
    };

    useEffect(()=>{
        dispatch(setDefaultLanguage(getLanguageFromLocalStorage()));
    },[]);
    useEffect(() => {
        textReducer.language && saveLanguageToLocalStorage();
    }, [textReducer.language]);

    if (!textReducer.language) {
        return <></>;
    }

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
            </main>
        </Fragment>
    );
};

export default MainPage;