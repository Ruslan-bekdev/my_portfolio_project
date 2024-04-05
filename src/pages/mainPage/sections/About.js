import React from 'react';
import classes from '../MainPage.module.sass';
import ZoomableImage from "../../../components/other/zoomableImage/ZoomableImage";

const About = ({id = '', text}) => {
    return (
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
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid earum nihil non provident. Asperiores assumenda repellendus ut! Deserunt, dolorum error eveniet ex facere fugiat id ipsa. Ad aliquam aliquid, cumque, dolores esse eveniet facere iste nihil porro praesentium quas rerum temporibus ullam ut vitae. A earum maiores mollitia unde?</p>
                <ZoomableImage src={text.images.geekTech[1]} className={classes.about__image}/>
                <p>1Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className={classes.about__block1}>
                <ZoomableImage src={text.images.geekTech[0]} className={classes.about__image}/>
                <p>2Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className={classes.about__block2}>
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid earum nihil non provident. Asperiores assumenda repellendus ut! Deserunt, dolorum error eveniet ex facere fugiat id ipsa. Ad aliquam aliquid, cumque, dolores esse eveniet facere iste nihil porro praesentium quas rerum temporibus ullam ut vitae. A earum maiores mollitia unde?</p>
                <ZoomableImage src={text.images.geekTech[1]} className={classes.about__image}/>
                <p>3Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className={classes.about__block2_mobile}>
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid earum nihil non provident. Asperiores assumenda repellendus ut! Deserunt, dolorum error eveniet ex facere fugiat id ipsa. Ad aliquam aliquid, cumque, dolores esse eveniet facere iste nihil porro praesentium quas rerum temporibus ullam ut vitae. A earum maiores mollitia unde?</p>
                <ZoomableImage src={text.images.noCode[0]} className={classes.about__image}/>
                <p>4Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className={classes.about__block1}>
                <ZoomableImage src={text.images.noCode[1]} className={classes.about__image}/>
                <p>5Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className={classes.about__block2}>
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid earum nihil non provident. Asperiores assumenda repellendus ut! Deserunt, dolorum error eveniet ex facere fugiat id ipsa. Ad aliquam aliquid, cumque, dolores esse eveniet facere iste nihil porro praesentium quas rerum temporibus ullam ut vitae. A earum maiores mollitia unde?</p>
                <ZoomableImage src={text.images.noCode[0]} className={classes.about__image}/>
                <p>6Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
        </section>
    );
};

export default About;