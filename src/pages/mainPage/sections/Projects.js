import React, {useState} from 'react';
import classes from '../MainPage.module.sass';
import {Tab,Tabs,Box,Grow} from "@mui/material";
import ScrollableImage from "../../../compnents/universal/other/scrollableImage/ScrollableImage";

const tabContent = [
    {
        label: 'Первая вкладка',
        title: 'Заголовок 1',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, tortor eget ullamcorper convallis, ipsum metus gravida mauris. Nullam in ipsum a libero mollis condimentum vel ac nisi.',
        icons: 'Иконки 1',
        image: 'https://www.stefantopalovic.com/static/media/coindom-full.c5fef9ca2f47e52897f8.png',
        functions: {
            onClick: ()=>console.log('Кнопка нажата'),
            label: 'Нажми на меня',
        },
    },
    {
        label: 'Вторая вкладка',
        title: 'Заголовок 2',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, tortor eget ullamcorper convallis, ipsum metus gravida mauris. Nullam in ipsum a libero mollis condimentum vel ac nisi.',
        icons: 'Иконки 2',
        image: 'https://www.stefantopalovic.com/static/media/coindom-full.c5fef9ca2f47e52897f8.png',
        functions: {
            onClick: ()=>console.log('Кнопка нажата'),
            label: 'Нажми на меня',
        },
    },
    {
        label: 'Третья вкладка',
        title: 'Заголовок 3',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, tortor eget ullamcorper convallis, ipsum metus gravida mauris. Nullam in ipsum a libero mollis condimentum vel ac nisi.',
        icons: 'Иконки 3',
        image: 'https://www.stefantopalovic.com/static/media/coindom-full.c5fef9ca2f47e52897f8.png',
        functions: {
            onClick: ()=>console.log('Кнопка нажата'),
            label: 'Нажми на меня',
        },
    },
    {
        label: 'Четвертая вкладка',
        title: 'Заголовок 4',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, tortor eget ullamcorper convallis, ipsum metus gravida mauris. Nullam in ipsum a libero mollis condimentum vel ac nisi.',
        icons: 'Иконки 4',
        image: 'https://www.stefantopalovic.com/static/media/coindom-full.c5fef9ca2f47e52897f8.png',
        functions: {
            onClick: ()=>console.log('Кнопка нажата'),
            label: 'Нажми на меня',
        },
    },
    {
        label: 'Пятая вкладка',
        title: 'Заголовок 5',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, tortor eget ullamcorper convallis, ipsum metus gravida mauris. Nullam in ipsum a libero mollis condimentum vel ac nisi.',
        icons: 'Иконки 5',
        image: 'https://www.stefantopalovic.com/static/media/coindom-full.c5fef9ca2f47e52897f8.png',
        functions: {
            onClick: ()=>console.log('Кнопка нажата'),
            label: 'Нажми на меня',
        },
    },
];

const Projects = () => {
    const [value,setValue] = useState(0);
    const handleChange = (e,newValue) => {
      setValue(newValue);
    }

    const RenderTabs = () => {
      return(
        <Tabs
            orientation="horizontal"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            className={classes.projects__tabs}
        >
            {tabContent.map((item,index)=>
                <Tab label={item.label} className={classes.tab}/>
            )}
        </Tabs>);
    };
    const RenderContent = () => {
        return (
            <Box sx={{flexGrow: 1}} className={classes.projects__content}>
                {tabContent.map((item,index) => {
                    const {title, caption, icons, image, functions} = item;
                    return value === index && (
                        <Grow in={value===index}>
                            <div className={classes.content__wrapper}>
                                <div className={classes.projects_block__image}>
                                    <ScrollableImage src={image} alt='Пример сайта'/>
                                </div>
                                <div className={classes.projects_block__text}>
                                    <h3>{title}</h3>
                                    <p>{caption}</p>
                                    <span>{icons}</span>
                                    <br/>
                                    <button onClick={functions.onClick}>
                                        {functions.label}
                                    </button>
                                </div>
                            </div>
                        </Grow>
                    );
                })}
            </Box>
        );
    };


    return (
        <div className={`${classes.projects} container`}>
            <h2 className={classes.projects__title}>Мои проекты</h2>
            <div className={classes.projects__wrapper}>
                <RenderTabs/>
                <RenderContent/>
            </div>
        </div>
    );
};

export default Projects;