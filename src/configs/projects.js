import landing from "../assets/images/projectsScreenshots/doppioCraft/landing.png";
import catalog from "../assets/images/projectsScreenshots/doppioCraft/catalog.png";
import catalogMobile from "../assets/images/projectsScreenshots/doppioCraft/catalog-mobile.png";
import cart from "../assets/images/projectsScreenshots/doppioCraft/cart.png";

import calculator from "../assets/images/projectsScreenshots/miniApps/calculator.png";
import weather from "../assets/images/projectsScreenshots/miniApps/weather.png";
import conventer from "../assets/images/projectsScreenshots/miniApps/converter.png";

import toptalentDesktop from "../assets/images/projectsScreenshots/toptalent/desktop.png";
import toptalentMobile from "../assets/images/projectsScreenshots/toptalent/mobile.png";

export const projectsConfig = {
    portfolio: {
        header: 'Портфолио',
        title: 'Портфолио',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, tortor eget ullamcorper convallis, ipsum metus gravida mauris. Nullam in ipsum a libero mollis condimentum vel ac nisi.',
        pie: [15,85],
        icons: 'html,css,sass,js,redux,materialui',
        url: 'https://ruslan-bekdev.github.io/DoppioCraft/',
        github: 'https://github.com/Ruslan-bekdev/my_portfolio_project',
    },
    doppioCraft: {
        header: 'Doppio Craft',
        title: 'Doppio Craft',
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
    miniApps: {
        header: 'Мини программы',
        title: 'Mini-Apps',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, tortor eget ullamcorper convallis, ipsum metus gravida mauris. Nullam in ipsum a libero mollis condimentum vel ac nisi.',
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
        header: 'Top Talent (no-code)',
        title: 'Top Talent company',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, tortor eget ullamcorper convallis, ipsum metus gravida mauris. Nullam in ipsum a libero mollis condimentum vel ac nisi.',
        icons: 'html,css',
        images: {
            desktop: toptalentDesktop,
            mobile: toptalentMobile,
        },
        url: 'https://toptalentcompany.tilda.ws/',
    },
};