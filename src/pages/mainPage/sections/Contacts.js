import React from 'react';
import classes from '../MainPage.module.sass';
import IconButton from "../../../components/other/buttons/IconButton";
import {contactsConfig} from "../../../configs/contacts";

const Contacts = ({id = '',text}) => {
    const navigateTo = (url = '#') => {
        window.open(url,'_blank');
    };

    const RenderContacts = () => {
        return(
            <div
                id={id}
                className={classes.contacts__content}
            >
                <div className={classes.contacts__actions}>
                    {contactsConfig.actions.map((action,index) =>
                        <IconButton
                            onClick={()=>navigateTo(action.button.url)}
                            label={text.actions[action.button.label]}
                            icon={action.icon}
                            key={index}
                        />
                    )}
                </div>
                <div className={classes.links}>
                    <h3
                        className={classes.links__title}
                    >
                        {text.or}
                    </h3>
                    {contactsConfig.links.map((link,index) => {
                        const firstKey = Object.keys(link)[0];
                        return (
                            <b key={index}>
                                <a
                                    href={firstKey + ':' + link[firstKey]}
                                >
                                    {link.label}
                                </a>
                            </b>
                        )
                    })}
                </div>
            </div>
        );
    };

    return (
        <section
            className={`${classes.contacts} container`}
        >
            <div>
                <h2
                    className={classes.contacts__title}
                >
                    {text.title}
                </h2>
                <RenderContacts/>
            </div>
        </section>
    );
};

export default Contacts;