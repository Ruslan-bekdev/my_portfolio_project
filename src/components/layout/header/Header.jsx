import React from 'react';
import classes from './Header.module.sass';
import Navigation from "../../other/navigation/Navigation";
import {anchorsConfig} from "../../../configs/anchors";

const Header = ({language, setNextLanguage, languageTitle, linksText}) => {
    return (
        <header className={classes.header}>
            <div className={`${classes.header__content}`}>
                <div
                    onClick={setNextLanguage}
                    className={classes.language}
                >
                    <dl className={classes.language}>
                        <dt>
                            {languageTitle}:
                        </dt>
                        <dd>
                            {language}
                        </dd>
                    </dl>
                </div>
                <Navigation
                    config={anchorsConfig}
                    text={linksText}
                />
            </div>
        </header>
    );
};

export default Header;