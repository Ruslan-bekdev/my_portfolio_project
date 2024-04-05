import React, {useEffect,Fragment} from 'react';
import classes from './MainPage.module.sass';
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Header from "../../components/layout/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {
    setLanguage_EN,
    setLanguage_KG,
    setLanguage_RU,
    setNextLanguage,
} from "../../store/textSlice";

const MainPage = () => {
    const dispatch = useDispatch();
    const textReducer = useSelector(state => state.textReducer)
    const isTextReducerEmpty = () =>
        Object.entries(textReducer.content).length === 0;

    const setLanguageAction_KG = () => {
        dispatch(setLanguage_KG());
    };
    const setLanguageAction_RU = () => {
        dispatch(setLanguage_RU());
    };
    const setLanguageAction_EN = () => {
        dispatch(setLanguage_EN());
    };
    const setNextLanguageAction = () => {
        dispatch(setNextLanguage());
    };

    useEffect(()=>{
        setLanguageAction_RU();
    },[]);

    return isTextReducerEmpty() ?'' :(
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