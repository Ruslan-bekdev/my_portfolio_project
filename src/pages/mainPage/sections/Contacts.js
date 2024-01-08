import React from 'react';
import classes from '../MainPage.module.sass';
import IconButton from "../../../compnents/universal/UI/buttons/IconButton";
import {contactsConfig} from "../../../configs/contacts";

const Contacts = ({id = ''}) => {
    const navigateTo = (url = '#') => {
        window.open(url,'_blank');
    };

    const RenderContacts = () => {
        return(
            <div id={id} className={classes.contacts__content}>
                <div className={classes.actions}>
                    {contactsConfig.actions.map((action,index) =>
                        <IconButton onClick={()=>navigateTo(action.button.url)} text={action.button.label} icon={action.icon} className={classes.actions__button}/>
                    )}
                </div>
                <div className={classes.links}>
                    <h3 className={classes.links__title}>Также звоните по следующим номерам</h3>
                    {contactsConfig.links.map((link,index) => {
                        const firstKey = Object.keys(link)[0];
                        return (
                            <b>
                                <a href={firstKey + ':' + link[firstKey]}>{link.label}</a>
                            </b>
                        )
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className={`${classes.contacts} container`}>
            <h2 className={classes.contacts__title}>Мои контакты</h2>
            <RenderContacts/>
        </div>
    );
};

export default Contacts;