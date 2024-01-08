import React from 'react';
import whatsapp from "../assets/icons/whatsapp.svg";
import telegram from "../assets/icons/telegram.svg";
import email from "../assets/icons/email.svg";

export const contactsConfig = {
    links: [
        {
            tel: '+996700526900',
            label: '+996(700)526-900',
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
                    url: 'https://wa.me/+996700526900',
                    label: 'Ватсап',
                }
            },
            {
                icon: telegram,
                button:{
                    url: 'https://t.me/RuslanbekDev',
                    label: 'Телеграм',
                }
            },
            {
                icon: email,
                button:{
                    url: 'mailto:ruslanDeveloper@gmail.com',
                    label: 'Эл почта',
                }
            },
        ],
};