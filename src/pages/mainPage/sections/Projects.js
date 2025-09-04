import React, {useState, Fragment, useEffect} from 'react';
import classes from '../MainPage.module.sass';
import {Tab,Tabs} from "@mui/material";
import ScrollableImage from "../../../components/other/scrollableImage/ScrollableImage";
import international from "../../../assets/icons/international.svg";
import IconButton from "../../../components/other/buttons/IconButton";
import {projectsConfig} from "../../../configs/projects";
import TooltipedImage from "../../../components/other/tooltopedImage/TooltipedImage";
import CustomPie from "../../../components/other/charts/Pie";

const Projects = ({id = '', text}) => {
	const projectsText = text.content;
	const [projectTab,setProjectTab] = useState(0);

	const handleProjectChange = (e,newValue) => {
		setProjectTab(newValue);
	};
	const navigateTo = (url) => {
		window.open(url,'_blank');
	};
	useEffect(() => {
		console.log('--- Projects component mounted ---');

// Лог всех ключей и значений projectsConfig
		console.log('projectsConfig keys:', Object.keys(projectsConfig));
		console.log('projectsConfig full:', projectsConfig);

// Лог всех ключей и значений projectsText (текста)
		console.log('projectsText keys:', Object.keys(projectsText || {}));
		console.log('projectsText full:', projectsText);

	}, [projectsText]);

	const RenderImages = ({images}) => {
		const [imageTab,setImageTab] = useState(0);
		const handleImageChange = (e,newValue) => {
			setImageTab(newValue);
		};

		return (
			<div className={classes.images}>
				{
					Object.entries(images).map(([key,value],index)=>{
						return imageTab === index && (
							<ScrollableImage
								src={value}
								alt='Site screen'
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
		return (
			<Tabs
				variant="scrollable"
				value={projectTab}
				onChange={handleProjectChange}
				className={classes.tabs}
			>
				{Object.entries(projectsConfig).map(([key, value]) => {
					const textForKey = projectsText ? projectsText[key] : undefined;

					// --- Логи для проверки соответствия ---
					console.log(`Rendering tab for key: "${key}"`);
					console.log('projectsText[key]:', textForKey);
					console.log('Key exists in projectsText:', projectsText && projectsText.hasOwnProperty(key));
					console.log('projectsText key === projectsConfig key:', textForKey !== undefined && Object.keys(projectsText).includes(key));
					console.log(`Key "${key}" exists in projectsText:`, textForKey !== undefined);

					return (
						<Tab
							label={textForKey?.header || `NO HEADER FOR ${key}`}
							key={key}
						/>
					);
				})}
			</Tabs>
		);
	};
	const RenderContent = () => {
		return (
			<div
				className={classes.project}
			>
				{Object.entries(projectsConfig).map(([key,value],index) => {
					const {pie, icons, images, url, github} = value;
					const textForKey = projectsText ? projectsText[key] : undefined;

					console.log(`Rendering content for key: "${key}"`);
					console.log('projectsText[key]:', textForKey);

					if (!textForKey) {
						console.warn(`WARNING: No text found for project key "${key}"`);
					}

					return projectTab === index && (
						<Fragment key={key}>
							{images &&
								<RenderImages images={images}/>
							}
							<div
								className={images
									?classes.project__caption
									:classes.project__caption_center
								}
							>
								<h3>{textForKey?.title || `NO TITLE FOR ${key}`}</h3>
								<p>{textForKey?.caption || `NO CAPTION FOR ${key}`}</p>
								{pie && <CustomPie dataPercent={pie}/>}
								{icons &&
									<TooltipedImage
										title={icons}
										image={`https://skillicons.dev/icons?i=${icons}`}
										alt={icons}
									/>
								}
								<div className={classes.project__actions}>
									{url &&
										<IconButton
											label={text.action}
											icon={international}
											onClick={() => navigateTo(url)}
										/>
									}
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
		<section
			id={id}
			className={`${classes.projects} container`}
		>
			<div>
				<h2
					className={classes.projects__title}
				>
					{text.title} ({Object.entries(projectsConfig).length})
				</h2>
				<p
					className={classes.projects__caption}
				>{text.caption}</p>
				<div
					className={classes.projects__wrapper}
				>
					<RenderTabs/>
					<RenderContent/>
				</div>
			</div>
		</section>
	);
};

export default Projects;