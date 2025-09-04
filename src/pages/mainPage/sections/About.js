import React from 'react';
import classes from '../MainPage.module.sass';
import ZoomableImage from "../../../components/other/zoomableImage/ZoomableImage";

const About = ({id = '', text}) =>
	(
		<section
			id={id}
			className={`${classes.about} container`}
		>
			<h2
				className={classes.about__title}
			>
				{text.title}
			</h2>
			<div className={classes.about__block2_mobile}>
				<h3>{text.geekTech.title}</h3>
				<p>{text.geekTech.caption[0]}</p>
				<p>{text.geekTech.caption[1]}</p>
				<ZoomableImage src={text.geekTech.images[1]} className={classes.about__image}/>
			</div>
			<figure className={classes.about__block1}>
				<ZoomableImage src={text.geekTech.images[0]} className={classes.about__image}/>
				<figcaption>{text.geekTech.figcaption}</figcaption>
			</figure>
			<div className={classes.about__block2}>
				<h3>{text.geekTech.title}</h3>
				<p>{text.geekTech.caption[0]}</p>
				<p>{text.geekTech.caption[1]}</p>
				<ZoomableImage src={text.geekTech.images[1]} className={classes.about__image}/>
			</div>
			<div className={classes.about__block2_mobile}>
				<h3>{text.noCode.title}</h3>
				<p>{text.noCode.caption[0]}</p>
				<p>{text.noCode.caption[1]}</p>
				<ZoomableImage src={text.noCode.images[1]} className={classes.about__image}/>
			</div>
			<figure className={classes.about__block1}>
				<ZoomableImage src={text.noCode.images[0]} className={classes.about__image}/>
				<figcaption>{text.noCode.figcaption ?text.noCode.figcaption :''}</figcaption>
			</figure>
			<div className={classes.about__block2}>
				<h3>{text.noCode.title}</h3>
				<p>{text.noCode.caption[0]}</p>
				<p>{text.noCode.caption[1]}</p>
				<ZoomableImage src={text.noCode.images[1]} className={classes.about__image}/>
			</div>
		</section>
	);

export default About;