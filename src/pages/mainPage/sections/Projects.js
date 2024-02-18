import React, {useState,Fragment} from 'react';
import classes from '../MainPage.module.sass';
import {Tab,Tabs} from "@mui/material";
import ScrollableImage from "../../../components/other/scrollableImage/ScrollableImage";
import international from "../../../assets/icons/international.svg";
import IconButton from "../../../components/other/buttons/IconButton";
import {projectsConfig} from "../../../configs/projects";
import TooltipedImage from "../../../components/other/tooltopedImage/TooltipedImage";
import CustomPie from "../../../components/other/charts/Pie";

const Projects = ({id = ''}) => {
    const [projectTab,setProjectTab] = useState(0);

    const handleProjectChange = (e,newValue) => {
      setProjectTab(newValue);
    };
    const navigateTo = (url) => {
        window.open(url,'_blank');
    };

    const RenderImages = ({images}) => {
        const [imageTab,setImageTab] = useState(0);
        const handleImageChange = (e,newValue) => {
            setImageTab(newValue);
        };

        return images && (
            <div className={classes.images}>
                {
                    Object.entries(images).map(([key,value],index)=>{
                        return imageTab === index && (
                            <ScrollableImage
                                src={value}
                                alt='Фото сайта'
                                key={key}
                            />
                        );
                    })
                }
                <Tabs
                    variant="scrollable"
                    value={imageTab}
                    onChange={handleImageChange}
                    className={classes.tabs}
                >
                    {
                        Object.entries(images).map(([key]) =>
                            <Tab
                                label={key}
                                key={key}
                            />
                        )
                    }
                </Tabs>
            </div>
        );
    }

    const RenderTabs = () => {
      return(
        <Tabs
            variant="scrollable"
            value={projectTab}
            onChange={handleProjectChange}
            className={classes.tabs}
        >
            {projectsConfig.map((item,index)=>
                <Tab
                    label={item.header}
                    key={index}
                />
            )}
        </Tabs>
      );
    };
    const RenderContent = () => {
        return (
            <div
                className={classes.projects__content}
            >
                {projectsConfig.map((item,index) => {
                    const {title, caption, pie, icons, images, url, github} = item;
                    return projectTab === index && (
                        <Fragment key={index}>
                            <RenderImages images={images}/>
                            <div
                                className={classes.projects__caption}
                            >
                                <h3>{title}</h3>
                                <p>{caption}</p>
                                {pie && <CustomPie dataPercent={pie}/>}
                                {icons &&
                                    <TooltipedImage
                                        title={icons}
                                        image={`https://skillicons.dev/icons?i=${icons}`}
                                        alt={icons}
                                    />
                                }
                                <div className={classes.projects__actions}>
                                    <IconButton
                                        label='Взглянуть'
                                        icon={international}
                                        onClick={() => navigateTo(url)}
                                    />
                                    {github &&
                                        <IconButton
                                            icon={'https://skillicons.dev/icons?i=github'}
                                            onClick={() => navigateTo(github)}
                                        />
                                    }
                                </div>
                            </div>
                        </Fragment>
                    );
                })}
            </div>
        );
    };

    return (
        <div
            id={id}
            className={`${classes.projects} container`}
        >
            <h2
                className={classes.projects__title}
            >
                Мои проекты
            </h2>
            <div
                className={classes.projects__wrapper}
            >
                <RenderTabs/>
                <RenderContent/>
            </div>
        </div>
    );
};

export default Projects;