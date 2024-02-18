import React from 'react';
import classes from '../MainPage.module.sass';
import myPhoto from '../../../assets/images/img.png'
import ZoomableImage from "../../../components/other/zoomableImage/ZoomableImage";
import TooltipedImage from "../../../components/other/tooltopedImage/TooltipedImage";

const iconsSet = [
    {icons: 'js,ts', tooltip: 'JavaScript, TypeScript'},
    {icons: 'redux', tooltip: 'Redux, Redux Toolkit'},
    {icons: 'html,css,sass', tooltip: 'HTML, CSS, Sass'},
    {icons: 'bootstrap,materialui,styledcomponents', tooltip: 'Bootstrap, Material UI, Styled Components', divider:true},
    {icons: 'react', tooltip: 'React'},
    {icons: 'git,github', tooltip: 'Git, GitHub'},
    {icons: 'figma', tooltip: 'Figma'},
];

const Landing = ({id = ''}) => {

    const RenderIcons = () => (
        <div
            className={classes.skills__images}
        >
            {iconsSet.map((icon, index) => (
                <React.Fragment key={index}>
                    <TooltipedImage
                        title={icon.tooltip}
                        image={`https://skillicons.dev/icons?i=${icon.icons}`}
                        alt={icon.tooltip}
                    />
                    {icon.divider && <hr/>}
                </React.Fragment>
            ))}
        </div>
    );

    return (
        <div
            id={id}
            className={`${classes.landing} container`}
        >
            <div
                className={classes.landing_block__text}
            >
                <h1>Front-End React Разработчик</h1>
                <p>Меня зовут Руслан и я начинающий Front-End разработчик из Кыргызстана</p>
                <div
                    className={classes.skills}
                >
                    <span
                        className={classes.skills__title}
                    >
                        Мои навыки:
                    </span>
                    <br/>
                    <RenderIcons/>
                </div>
            </div>
            <ZoomableImage
                className={classes.landing_block__image}
                src={myPhoto}
                alt="Моя фотография"/>
        </div>
    );
};

export default Landing;