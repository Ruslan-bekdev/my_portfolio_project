import React from 'react';
import whatsapp from "../assets/icons/whatsapp.svg";
import telegram from "../assets/icons/telegram.svg";
import email from "../assets/icons/email.svg";

export const contactsConfig = {
    links: [
        {
            tel: '+996504004104',
            label: '+996(504)004-104',
        },
        {
            tel: '+996225671567',
            label: '+996(225)671-567',
        },
    ],
    actions: [
            {
                icon: whatsapp,
                button:{
                    url: 'https://wa.me/+996504004104',
                    label: 'whatsApp',
                }
            },
            {
                icon: telegram,
                button:{
                    url: 'https://t.me/RuslanBekdev',
                    label: 'telegram',
                }
            },
            {
                icon: email,
                button:{
                    url: 'mailto:ruslanbekdev@gmail.com',
                    label: 'eMail',
                }
            },
        ],
};