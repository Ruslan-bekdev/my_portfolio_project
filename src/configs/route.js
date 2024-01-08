import MainPage from "../pages/mainPage/MainPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

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
        header:'Обо мне',
    },
    projects:{
        path:'#projects',
        header:'Проекты',
    },
    contacts:{
        path:'#contacts',
        header:'Связаться со мной',
    },
};