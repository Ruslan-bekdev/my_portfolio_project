import React, {useState} from 'react';
import classes from '../MainPage.module.sass';
import {Tab,Tabs,Box,Grow} from "@mui/material";
import ScrollableImage from "../../../compnents/universal/other/scrollableImage/ScrollableImage";
import international from "../../../assets/icons/international.svg";
import IconButton from "../../../compnents/universal/UI/buttons/IconButton";
import {projectsConfig} from "../../../configs/projects";

const Projects = ({id = ''}) => {
    const [value,setValue] = useState(0);

    const handleChange = (e,newValue) => {
      setValue(newValue);
    };
    const navigateTo = (url = '#') => {
        window.open(url,'_blank');
    };

    const RenderTabs = () => {
      return(
        <Tabs
            orientation="horizontal"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            className={classes.projects__tabs}
        >
            {projectsConfig.map((item,index)=>
                <Tab label={item.label} className={classes.tab}/>
            )}
        </Tabs>);
    };
    const RenderContent = () => {
        return (
            <Box sx={{flexGrow: 1}} className={classes.projects__content}>
                {projectsConfig.map((item,index) => {
                    const {title, caption, icons, image, actions} = item;
                    return value === index && (
                        <Grow in={value===index}>
                            <div className={classes.content__wrapper}>
                                <div className={classes.projects_block__image}>
                                    <ScrollableImage src={image} alt='Пример сайта'/>
                                </div>
                                <div className={classes.projects_block__text}>
                                    <h3>{title}</h3>
                                    <p>{caption}</p>
                                    {icons && <img src={`https://skillicons.dev/icons?i=${icons}`} alt={icons}/>}
                                    <IconButton text={actions.label} icon={international} onClick={() => navigateTo(actions.url)}/>
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
            <div id={id} className={classes.projects__wrapper}>
                <RenderTabs/>
                <RenderContent/>
            </div>
        </div>
    );
};

export default Projects;