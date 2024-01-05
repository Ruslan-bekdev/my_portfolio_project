import React from 'react';
import classes from '../MainPage.module.sass';
import myPhoto from '../../../assets/images/img.png'
import {Tooltip} from "@mui/material";
import ImageModal from "../../../compnents/universal/other/imageModal/ImageModal";

const iconsSet = [
    {icons: 'html,css,sass', tooltip: 'HTML, CSS, Sass'},
    {icons: 'js,ts', tooltip: 'JavaScript, TypeScript'},
    {icons: 'react,redux', tooltip: 'React, Redux Toolkit', divider:true},
    {icons: 'git,github', tooltip: 'Git, GitHub'},
    {icons: 'bootstrap,materialui,figma', tooltip: 'Bootstrap, Material UI, Figma'},
];

const RenderIcons = () => (
    <>
        {iconsSet.map((icon, index) => (
            <React.Fragment key={index}>
                <Tooltip title={icon.tooltip} arrow placement='top'>
                    <img src={`https://skillicons.dev/icons?i=${icon.icons}`} alt={icon.tooltip}/>
                </Tooltip>
                {icon.divider && <hr/>}
            </React.Fragment>
        ))}
    </>
);

const Landing = () => {

    return (
        <div className={`${classes.landing} container`}>
            <div className={classes.landing_block__text}>
                <h1>Front-End React Разработчик</h1>
                <p>Привет! Меня зовут Руслан. Я начинающий Front-End разработчик из Кыргызстана</p>
                <div className={classes.skills}>
                    <span className={classes.skills__title}>Мои навыки:</span> <br/>
                    <div className={classes.skills__images}>
                        <RenderIcons/>
                    </div>
                </div>
            </div>
            <ImageModal className={classes.landing_block__image} src={myPhoto} alt="Моя фотография"/>
        </div>
    );
};

export default Landing;