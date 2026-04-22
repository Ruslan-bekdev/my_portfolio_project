import noCode from '../assets/images/about/noCode.JPG';
import noCode_me from '../assets/images/about/noCode_me.jpg';
import geekTech_ru from '../assets/images/about/geektech_ru.JPG';
import geekTech_kg from '../assets/images/about/geektech_kg.JPG';
import geekTech_en from '../assets/images/about/geektech_en.JPG';
import geekTech_me from '../assets/images/about/geektech_me.jpg';

export const texts_ru = {
    language: 'ru',
    content: {
        header: {
            title: 'Язык',
            links: {
                about: 'Обо мне',
                projects: 'Проекты',
                contacts: 'Контакты',
            },
        },
        landing: {
            h3: 'Привет!',
            h1: ['Я', 'Русланбек'],
            h2: 'Front-End Разработчик',
            p: 'Создаю современные веб-интерфейсы, фокусируясь на чистоте кода и производительности.',
            small: 'Портфолио разработано с использованием легких решений для обеспечения максимальной скорости загрузки.',
            skillsTitle: 'Мои основные навыки'
        },
        about: {
            title: 'Коротко о себе:',
            geekTech: {
                images: [geekTech_ru,geekTech_me],
                title: 'Обучение в GeekTech (Geeks)',
                caption: ['Мой путь в IT начался с фундаментального обучения в GeekTech. За полгода я освоил базу Frontend-разработки и применил её в реальных задачах.' +
                'В процессе обучения я также выступал в роли ментора, помогая студентам разбираться со сложными архитектурными темами и отладкой кода.',
                    'Этот опыт научил меня не только писать код, но и эффективно объяснять технические концепции.'],
            },
            noCode: {
                images: [noCode_me, noCode],
                title: 'Развитие в Muras Academy',
                caption: ['После курсов я продолжил углубляться в смежные области, включая специализированное обучение No-Code разработке. ' +
                'Это позволило мне расширить взгляд на построение логики приложений и UX/UI дизайн.',
                    'Опыт работы с визуальными редакторами помог мне быстрее прототипировать интерфейсы и глубже понять принципы адаптивности и семантики.'],
            },
        },
        projects: {
            title: 'Мои проекты',
            caption: 'В этом разделе представлены мои ключевые проекты, созданные с упором на практику новых технологий. ' +
                'Для каждого кейса приведена диаграмма соотношения логики и верстки, а также подробный стек технологий. ' +
                'Вы можете перейти к просмотру живой демо-версии или изучить исходный код в моем репозитории на GitHub.',
            content: {
                portfolio:{
                    header: 'Портфолио',
                    title: 'Портфолио',
                    caption: 'Движок портфолио с кастомной логикой локализации и обработки изображений. ' +
                        'Все модальные окна и функции увеличения фото реализованы на чистом JS без сторонних библиотек. ' +
                        'Это демонстрирует мой навык создания легковесных и независимых решений для фронтенда.',
                },
                doppioCraft:{
                    header: 'Doppio Craft',
                    title: 'Doppio Craft',
                    caption: 'Прототип интернет-магазина с динамическим каталогом товаров. В проекте отработана структура данных, ' +
                        'методы фильтрации и принципы построения масштабируемой компонентной архитектуры.',
                },
                fitegCopy:{
                    header: 'Fiteg copy',
                    title: 'Fiteg copy',
                    caption: 'Премиальный многостраничный сайт, созданный по принципу "Code-First". Ноль UI-библиотек - ' +
                        'каждая сетка, переход и анимация прописаны вручную для достижения максимальной плавности и точности верстки.',
                },
                solarSystem:{
                    header: 'Солнечная система',
                    title: 'Солнечная система',
                    caption: 'Интерактивная 3D-модель, сфокусированная на производительности отрисовки и работе с анимациями в пространстве. ' +
                        'В ходе разработки я использовал продвинутый Prompt Engineering для оптимизации сложных структур данных и логики перемещения объектов.'
                },
                miniApps:{
                    header: 'Мини программы',
                    title: 'Mini-Apps',
                    caption: 'Сборник приложений со сложной бизнес-логикой, написанный на TypeScript. Главная особенность - ' +
                        'калькулятор с кастомным парсингом выражений и защитой от математических ошибок. Проект демонстрирует уверенное владение состоянием через Redux Toolkit.',
                },
                topTalent:{
                    header: 'Top Talent (no-code)',
                    title: 'Top Talent company',
                    caption: 'Экспериментальный проект по созданию комплексной платформы без написания кода. ' +
                        'Кейс подчеркивает мои навыки в дизайне, проектировании пользовательских путей и понимании структуры HTML/CSS вне зависимости от инструментов разработки.',
                },
            },
            pie: ['Верстка','Логика'],
            action: 'Вглянуть',
        },
        contacts: {
            title: 'Мои контакты',
            actions: {
                whatsApp: 'Ватсап',
                telegram: 'Телеграм',
                eMail: 'Почта',
            },
            or: 'или'
        },
    },
};

export const texts_kg = {
    language: 'kg',
    content: {
        header: {
            title: 'Тил',
            links: {
                about: 'Мен тууралуу',
                projects: 'Проекттер',
                contacts: 'Байланыш',
            },
        },
        landing: {
            h3: 'Салам!',
            h1: ['Мен', 'Русланбекмин'],
            h2: 'Front-End Разработчик',
            p: 'Веб-проекттерди жасоону үйрөнүп жатам жана өз портфолиомду топтойм.',
            small: 'Сайт жөнөкөй кылып жасалган, керексиз нерселер жок, негизги максатты сактоо үчүн - өзүм тууралуу айтып берүү.',
            skillsTitle: 'Менин негизги жеткиликтерим:'
        },
        about: {
            title: 'Мен туралуу кыскача',
            geekTech: {
                images: [geekTech_kg, geekTech_me],
                title: 'GeekTech (Geeks) да окуу',
                caption: ['Мендүү IT саласына кирүүм GeekTech (Бугунгү күнө Geeks). Жарым жылдын ичинде мен негизги көндүмдөрдү өздөштүрдүм жана IT тармагында биринчи тажрыйбамды алдым.' +
                'Окуга жана окуудан кийин мен кандай жеңил учуучуларга ментор болдум жана ашык темаларды жандырабым.',
                    'Мен бул мүмкүнчүлүгү үчүн GeekTechке күтүлгөн боломмун. Рахмат!'],
            },
            noCode: {
                images: [noCode_me, noCode],
                title: 'Muras Academyда окуу',
                caption: ['GeekTechдеги окуудан кийин мен болдук бирок мен окууга жакшы бир жол табдым. Жаңы темаларды самакчы көчүп жаткан жок болгондо. ' +
                'Бир жана туруктагы боюнча кантип-кандай темаларды окууга жакшы бир жол табдым. Бул маанада мен No-Code программалоо мамлекетинде окуу алгандым.',
                    'No-Code программалоо бул код жазбаган болгону менен тым жакшы аракеттердин мамлекетинде программалоо болуп саналат. ' +
                    'Бул кызыктуу тажрыйба менен мени катуу темаларды манасы жакшы мүмкүндүктөр менен түшүнүштү. Бул чыгармада веб дизайнды меңгерүүдө эле жакшы көмөгүм болду.'],
            },
        },
        projects: {
            title: 'Менин проектерим',
            caption: 'Курстардын окуусунан кийин токтобой, дээрлик бардык убактымды практика менен жаңы куралдарды үйрөнүүгө жана өзүмдүн Пет Проекттеримди түзүүгө жумшадым. ' +
                'Экинчи жактан менин эң кызыктуу пет-проекттерим менчек аныктамалар менен жана сүрөттөмөлөр менен көрсөтүлгөн. ' +
                'Бунун жана коддогу Логика мен Жабдуулардын үлгүлөрүнү көрсөтүү диаграмма бар. Акыркы жерде, проектте колдонулган башка технологиялардын тизмеси берилген. ' +
                'Акыркыда эки баскыч бар: бири, проект сайтына өтүүгө уруксат берет, жана башкасы - менин Github шаалымдагы шаалымды жана артка кодду көрө аласыздар, жакшы.',
            content: {
                portfolio:{
                    header: "Портфолио",
                    title: "Портфолио",
                    caption: "Бул жерде мен өз сабактык технологияларды жана программалоо тилилерин көргөзүү аясында жасалган менчек көз тапкырларды көрсөтө алам. " +
                        "Баскыч скрипттердин кийиндиги жок, кичине абалдуу веб-колдонмолорга чейинки. Өзүмдүн жеңиштерин практикалаштырма жана жеткиликтүү билимдерин жеткиликтүү этилүүгө багыт кылган сапатын көрсөтөт." +
                        "Көрүүчүдүн көчүрмөсүн жана чоңойтолууга болот жеек көпчүлүгү менен. Бул библиотекаларсыз, чисто код менен колдонулгандыкта жасалган."
                },
                doppioCraft:{
                    header: 'Doppio Craft',
                    title: 'Doppio Craft',
                    caption: "Менин биринчи пет-проектим, анда мен товарлар каталогун менен иштөөнү практика кылдым. Дизайнга чоң басым болгон жок, бирок маалыматтар менен верстка боюнча жакшы тажрыйба алдым."
                },
                fitegCopy:{
                    header: 'Fiteg',
                    noImageAlert: 'Анимациялар беттик көрүнүштү түзөтүп, суроолордон сайттын көрүнүшүн ачуу укугу болот. Көрүүдү көңүлдүңүз :)',
                    title: 'Fiteg copy',
                    caption: "Баардык кирүү системасындагы эң ачык жумушум. Анын аталымынан тартышкан компания. Бул веб-сайт толук жасалган, стилизациялоо китептери колдонулган жок, " +
                        "менин кирүү менен анимация кабарлуулугумду көрсөтөт. Анимациялар веб-сайтты жандырат, фотодон бөлүшүлбөйт. Веб-сайтты жеке караңыз, төмөнкү баскы басып."
                },
                solarSystem:{
                    header: 'Күн Системасы',
                    title: 'Күн Системасы',
                    caption: 'Бул долбоордун баштапкы максаты - толугу менен башка менин сайттарымдан айырмаланган кейс түзүү.' +
                        'Андан тышкары, мен 3D, анимациялар менен иштөөнү практика кылып, башка көптөгөн куралдарды колдонуп көрдүм.' +
                        'Сайтты түзүү учурунда мен чатбот - ChatGPT менен иштөөнү үйрөнүүнү чечтим.' +
                        'Адистешпеген колдонуучунун көз карашынан алганда, сайт жөн гана Күн системасынын макетин көрсөтөт жана планеталар тууралуу аз гана маалымат берет.',
                },
                miniApps:{
                    header: 'Менин баракчаларым',
                    title: 'Mini-Apps',
                    caption: "Лейаут боюнча менин жеңишкөр пет-проектим, үмүттө. Бул, көптөгөн жүзгү болуп, жаңы приложениялар менен өнүүлүп чыкат. " +
                        "Бул проект Type Script деген жаңы жана менчикке жөнөтүү тилинде жазылган. Бул менен практика жарашалып, анын ыңгай болгондукун көрсөттү жана ал кем де жеңил эмес эле."
                },
                topTalent:{
                    header: 'Top Talent (no-code)',
                    title: 'Top Talent company',
                    caption: "Топ биле - бул менин абдан эксперименталдуу биринчи пет-проектим, no-code технологиясын колдонуу аркылуу жасалган. " +
                        "Бул тажрибе менчиктүү менин креативдүүлүк, фантазия мен дизайнге кызмат кылган башка көзгө баткычтарды колдонууга өтүлүп, программалаштыруу көзгө алууга өткөн жок. Мөчүлүк, программалаштуу жок, бул проекттин жаратуу үчүн HTML жана CSS катарында гипертексттөөлөштүрүү жана стилизация тилин колдонулду."
                }
            },
            pie: ['Верстка','Логика'],
            action: 'Көрүү',
        },
        contacts: {
            title: 'Менин контакттарым',
            actions: {
                whatsApp: 'Ватсап',
                telegram: 'Телеграм',
                eMail: 'Почта',
            },
            or: 'же'
        },
    },
};

export const texts_en = {
    language: 'en',
    content: {
        header: {
            title: 'language',
            links: {
                about: 'About me',
                projects: 'Projects',
                contacts: 'Contacts',
            },
        },
        landing: {
            h3: 'Hello!',
            h1: ['I\'m', 'Ruslanbek'],
            h2: 'Front-End Developer',
            p: 'Building modern web interfaces with a strong focus on clean code and performance.',
            small: 'Portfolio designed with a lightweight approach to ensure maximum loading speed.',
            skillsTitle: 'My main skills'
        },
        about: {
            title: 'About me',
            geekTech: {
                images: [geekTech_en, geekTech_me],
                title: 'Learning at GeekTech (Geeks)',
                caption: ['My journey into IT began with fundamental training at GeekTech. In six months, I mastered the core of Frontend development and applied it to real-world tasks.' +
                'During my training, I also acted as a mentor, helping students with complex architectural topics and code debugging.',
                    'This experience taught me not only how to write code but also how to effectively communicate technical concepts.'],
            },
            noCode: {
                images: [noCode_me, noCode],
                title: 'Development at Muras Academy',
                caption: ['After my courses, I continued to dive into related fields, including specialized training in No-Code development. ' +
                'This allowed me to broaden my perspective on building application logic and UX/UI design.',
                    'Experience with visual editors helped me prototype interfaces faster and gain a deeper understanding of responsiveness and semantics.'],
            },
        },
        projects: {
            title: 'My projects',
            caption: 'This section presents my key projects, created with an emphasis on practicing new technologies. ' +
                'For each case, a diagram of the logic-to-markup ratio and a detailed technology stack are provided. ' +
                'You can proceed to view the live demo or explore the source code in my GitHub repository.',
            content: {
                portfolio:{
                    header: "Portfolio",
                    title: "Portfolio",
                    caption: "Portfolio engine with custom localization and image processing logic. " +
                        "All modal windows and photo zoom functions are implemented in vanilla JS without third-party libraries. " +
                        "This demonstrates my skill in creating lightweight and independent frontend solutions."
                },
                doppioCraft:{
                    header: "Doppio Craft",
                    title: "Doppio Craft",
                    caption: "E-commerce catalog prototype with a dynamic product list. The project covers data structures, " +
                        "filtering methods, and principles of building a scalable component architecture."
                },
                fitegCopy:{
                    header: "Fiteg",
                    title: "Fiteg copy",
                    caption: 'Premium multi-page website developed with a "Code-First" approach. Zero UI libraries - ' +
                        'every grid, transition, and animation is custom-coded to achieve maximum smoothness and layout precision.'
                },
                solarSystem:{
                    header: 'Solar System',
                    title: 'Solar System',
                    caption: 'Interactive 3D model focused on rendering performance and working with animations in space. ' +
                        'During development, I used advanced Prompt Engineering to optimize complex data structures and object movement logic.',
                },
                miniApps:{
                    header: "Mini-Apps",
                    title: "Mini-Apps",
                    caption: "A collection of applications with complex business logic built with TypeScript. The main feature is " +
                        "a calculator with custom expression parsing and protection against mathematical errors. Demonstrates strong state management with Redux Toolkit."
                },
                topTalent:{
                    header: "Top Talent (no-code)",
                    title: "Top Talent company",
                    caption: "An experimental project to create a comprehensive platform without writing code. " +
                        "This case highlights my skills in design, user path engineering, and understanding HTML/CSS structure regardless of the development tools."
                }
            },
            pie: ['Markup','Logic'],
            action: 'View',
        },
        contacts: {
            title: 'My contacts',
            actions: {
                whatsApp: 'WhatsApp',
                telegram: 'Telegram',
                eMail: 'Mail',
            },
            or: 'or'
        },
    },
};

export const defaultLanguage = texts_en;
const allTexts = [texts_ru,texts_kg,texts_en];
export default allTexts;