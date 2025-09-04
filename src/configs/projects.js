import landing from "../assets/images/projectsScreenshots/doppioCraft/landing.png";
import catalog from "../assets/images/projectsScreenshots/doppioCraft/catalog.png";
import catalogMobile from "../assets/images/projectsScreenshots/doppioCraft/catalog-mobile.png";
import cart from "../assets/images/projectsScreenshots/doppioCraft/cart.png";

import calculator from "../assets/images/projectsScreenshots/miniApps/calculator.png";
import weather from "../assets/images/projectsScreenshots/miniApps/weather.png";
import conventer from "../assets/images/projectsScreenshots/miniApps/converter.png";

import toptalentDesktop from "../assets/images/projectsScreenshots/toptalent/desktop.png";
import toptalentMobile from "../assets/images/projectsScreenshots/toptalent/mobile.png";

import jupiter from "../assets/images/projectsScreenshots/solarSystem/jupiter.png";
import jupiterInShadow from "../assets/images/projectsScreenshots/solarSystem/jupiterInShadow.png";

export const projectsConfig = {
    portfolio: {
        pie: [15,85],
        icons: 'html,css,sass,js,redux,materialui',
        github: 'https://github.com/Ruslan-bekdev/my_portfolio_project',
    },
    doppioCraft: {
        pie: [30,70],
        icons: 'html,css,js,redux,materialui,styledcomponents',
        images: {
            landing,
            catalog,
            'Catalog (mobile)': catalogMobile,
            cart,
        },
        url: 'https://ruslan-bekdev.github.io/DoppioCraft/',
        github: 'https://github.com/Ruslan-bekdev/DoppioCraft',
    },
    fitegCopy: {
        pie: [32,68],
        icons: 'html,css,js,redux,styledcomponents',
        url: 'https://ruslan-bekdev.github.io/Fiteg-copy/',
        github: 'https://github.com/Ruslan-bekdev/Fiteg-copy',
    },
	solarSystem:{
        pie: [85,15],
        icons: 'html,less,js,threejs,vite,ai',
		images: {
			jupiter,
			'Jupiter (shadow)': jupiterInShadow,
		},
        url: 'https://ruslan-bekdev.github.io/Solar-System-3D/',
        github: 'https://github.com/Ruslan-bekdev/Solar-System-3D',
    },
    miniApps: {
        pie: [90,10],
        icons: 'html,css,js,ts,redux,materialui,styledcomponents',
        images: {
            calculator,
            weather,
            conventer
        },
        url: 'https://ruslan-bekdev.github.io/mini_apps_for_portfolio/',
        github: 'https://github.com/Ruslan-bekdev/mini_apps_for_portfolio',
    },
    topTalent: {
        icons: 'html,css',
        images: {
            desktop: toptalentDesktop,
            mobile: toptalentMobile,
        },
        url: 'https://toptalentcompany.tilda.ws/',
    },
};