import MainPage from "./mainPage/MainPage";
import NotFoundPage from "./notFoundPage/NotFoundPage";

export const pagesConfig = {
    main:{
        path:'/',
        element:<MainPage/>,
    },
    notFound:{
        path:'*',
        element:<NotFoundPage/>,
    },
};
export const anchorsConfig = {
    about:{
        path:'#about',
        header:'Обо мне'
    },
    projects:{
        path:'#Projects.js',
        header:'Проекты'
    },
    contacts:{
        path:'#contacts',
        header:'Мои контакты'
    },
}
