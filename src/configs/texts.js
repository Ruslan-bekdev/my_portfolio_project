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
            p: [
                'Начинающий веб разработчик из Кыргызстана без опыта работы.',
                'Практикуюсь в создании веб проектов и вот мое Портфолио.'
            ],
            skillsTitle: 'Мои навыки'
        },
        about: {
            title: 'Коротко о себе:',
            geekTech: {
                images: [geekTech_ru,geekTech_me],
                title: 'Обучение в GeekTech (Geeks)',
                caption: ['Мой путь в сферу IT начался с GeekTech (Geeks на данный момент). За полгода я освоил базовые навыки, знаниям и получил свой первый опыт в этой области. ' +
                    'Во время и после обучения я также подрабатывал в качестве наставника (был ментором) и помогал непоспевающим ученикам освоить сложные темы.',
                    'Я благодарен GeekTech за такую возможность. Спасибо!'],
                figcaption: 'Доступны варианты на трёх языках. Измените язык сайта, чтобы увидеть другие',
            },
            noCode: {
                images: [noCode_me, noCode],
                title: 'Обучение в Muras Academy',
                caption: ['После окончания обучения в GeekTech я не остановился на достигнутом. Я начал самостоятельно изучать новые темы. ' +
                    'Не ограничиваясь одним направлением, я изучал разнообразные области. Это привело меня к специализации в области программирования без кода (No-Code).',
                    'Программирование без кода по сути означает создание программ без написания кода, используя визуальный интерфейс редактора. ' +
                    'Этот опыт значительно помог мне в понимании абсолютно новых для меня тем и играл ключевую роль в освоении навыков веб-дизайна.'],
            },
        },
        projects: {
            title: 'Мои проекты',
            caption: 'Здесь представлены мои лучшие пет-проекты с подробными описаниями и фотографиями. ' +
                'Также есть диаграмма, иллюстрирующая соотношение Логики и Верстки в коде. ' +
                'Ниже приведен список основных технологий, использованных в проекте. ' +
                'И в конце размещены 2 кнопки: одна позволяет перейти на сайт проекта, ' +
                'а другая - перейти в мой личный репозиторий на GitHub, где можно увидеть весь код проекта',
            content: {
                portfolio:{
                    header: 'Портфолио',
                    title: 'Портфолио',
                    caption: 'Здесь собраны мои небольшие практические задания, созданные в процессе изучения различных технологий и языков программирования. ' +
                        'От простых скриптов до небольших веб-приложений - каждый проект отражает мой опыт и умение применять полученные знания на практике.',
                },
                doppioCraft:{
                    header: 'Doppio Craft',
                    title: 'Doppio Craft',
                    caption: 'Мой первый пет-проект, в котором я практиковался работать с каталогом товаров. Сильного упора в дизайн здесь не было, но я все равно очень доаволен результатом',
                },
                fitegCopy:{
                    header: 'Fiteg copy',
                    title: 'Fiteg copy',
                    caption: 'Мой лучший проект в плане верстки. Этот дизайн вдохнавлен существующей одноименной компанией. И этот опыт был очень важен для ' +
                        'прокачки моих способностей к верстке и анимаций. Некоторый детали изменены по моему усмотрению. ' +
                        'Наличие анимаций мешает передать вид сайта через фотографии. НЖмите на кнопку ниже и асладитесь видом лично :)',
                },
                miniApps:{
                    header: 'Мини программы',
                    title: 'Mini-Apps',
                    caption: 'Мой лучший пет-проект в плане логики, нежели верстки. Он постоянно будет обновляется новыми приложениями. ' +
                        'Этот проект написан на Type Script, новом для меня языке. Практика с ним была полезной и показала, насколько же он удобен, но в то же время непрост',
                },
                topTalent:{
                    header: 'Top Talent (no-code)',
                    title: 'Top Talent company',
                    caption: 'Top Talent - мой первый пет-проект, разработанный с использованием no-code технологии. Этот опыт был для меня чрезвычайно экспериментальным и выделяется среди остальных. ' +
                        'В проекте отсутствует код, но для его создания мне пришлось применить другие важные навыки, такие как творчество, фантазия и дизайн. ' +
                        'Кроме того, несмотря на отсутствие программирования, для этого проекта потребовалось использовать языки гипертекстовой разметки и стилизации - HTML и CSS.',
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
            p: [
                'Кыргызстандан катаган жеткиликтүү веб-өнөктөш, иштебаасыз.',
                'Веб проекттерди түзөтүүгө жүрүштүүнө жатам, бул менин портфолиом'
            ],
            skillsTitle: 'Менин жеткиликтерим:'
        },
        about: {
            title: 'Мен туралуу кыскача',
            geekTech: {
                images: [geekTech_kg, geekTech_me],
                title: 'GeekTech (Geeks) да окуу',
                caption: ['Мендүү IT саласына кирүүм GeekTech (Бугунгү күнө Geeks). Полгекте мен базалык навактарды, билимдерди манасы жана бул мамлекетте менин биринчи тажрыйбамды алдым. ' + 'Окуга жана окуудан кийин мен кандай жеңил учуучуларга ментор болдум жана ашык темаларды жандырабым.',
                    'Мен бул мүмкүнчүлүгү үчүн GeekTechке күтүлгөн боломмун. Рахмат!'],
                figcaption: '3 тилдеги варианттар жеткиликтүү. Сайттын тилин өзгөртүңүз, башкаларды көрсөңүз',
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
            caption: 'Экинчи жактан менин эң кызыктуу пет-проекттерим менчек аныктамалар менен жана сүрөттөмөлөр менен көрсөтүлгөн. ' +
                'Бунун жана коддогу Логика мен Жабдуулардын үлгүлөрүнү көрсөтүү диаграмма бар. Акыркы жерде, проектте колдонулган башка технологиялардын тизмеси берилген. ' +
                'Акыркыда эки баскыч бар: бири, проект сайтына өтүүгө уруксат берет, жана башкасы - менин Github шаалымдагы шаалымды жана артка кодду көрө аласыздар, жакшы.',
            content: {
                portfolio:{
                    header: "Портфолио",
                    title: "Портфолио",
                    caption: "Бул жерде мен өз сабактык технологияларды жана программалоо тилилерин көргөзүү аясында жасалган менчек көз тапкырларды көрсөтө алам. " +
                        "Баскыч скрипттердин кийиндиги жок, кичине абалдуу веб-колдонмолорга чейинки. Өзүмдүн жеңиштерин практикалаштырма жана жеткиликтүү билимдерин жеткиликтүү этилүүгө багыт кылган сапатын көрсөтөт."
                },
                doppioCraft:{
                    header: 'Doppio Craft',
                    title: 'Doppio Craft',
                    caption: "Менин жеңишкөр пет проектим, мен маалыматтардын каталогу менен иштөөдө көрсөтүүм. Дизайнга абал берилген жок, бирок мен натыйжасы менен анын өзүмдүн ичинде тийиндилгенмин."
                },
                fitegCopy:{
                    header: 'Fiteg',
                    noImageAlert: 'Анимациялар беттик көрүнүштү түзөтүп, суроолордон сайттын көрүнүшүн ачуу укугу болот. Көрүүдү көңүлдүңүз :)',
                    title: 'Fiteg copy',
                    caption: "Менин көздүн катыштык проектим, лейаут боюнча. Бул дизайн катар аткаруучу компаниялардын бардыктык алдында чыгарылган. " +
                        "Бул тажрибе менчиктүү менин катышуу менен анимацияларды жасоо багытын көбүрөөк маңыздыкты. Кыймыл анимациялар фотоараларды аркылуу веб-сайттын көрүнүшүн анын аны кайрап алуу. Алдындагы чиркени алдын алуу баскычына басып, көрүңүз жана бирок чыгыңыз :)"
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
            h1: ['I\'m a', 'Ruslanbek'],
            h2: 'Front-End Developer',
            p: [
                'An aspiring web developer from Kyrgyzstan without experience.',
                'Practicing web project creation, here is my Portfolio.'
            ],
            skillsTitle: 'My skills'
        },
        about: {
            title: 'About me',
            geekTech: {
                images: [geekTech_en, geekTech_me],
                title: 'Learning at GeekTech (Geeks)',
                caption: ['My journey into the IT field began with GeekTech (currently Geeks). Over six months, I acquired basic skills, knowledge, and gained my first experience in this field. ' +
                'During and after my training, I also worked as a mentor and helped struggling students master complex topics.',
                    'I am grateful to GeekTech for this opportunity. Thank you!'],
                figcaption: 'Variants are available in three languages. Change the website language to see others.',
            },
            noCode: {
                images: [noCode_me, noCode],
                title: 'Training at Muras Academy',
                caption: ['After completing my training at GeekTech, I didn\'t stop there. I began self-studying new topics. ' +
                'I didn\'t confine myself to one direction; instead, I explored diverse subjects. This led me to specialize in the field of No-Code programming.',
                'No-Code programming essentially involves coding without writing code, using a visual interface editor. ' +
                    'This experience greatly aided my understanding of entirely new topics for me and proved to be crucial in mastering web design.'],
            },
        },
        projects: {
            title: 'My projects',
            caption: 'Here are my best pet projects with detailed descriptions and photos. ' +
                'Additionally, there is a diagram illustrating the ratio of Logic to Markup in the code. ' +
                'Below is a list of the main technologies used in the project. At the end, there are two buttons: ' +
                'one allows you to go to the project website, and the other - to go to my personal GitHub repository, where you can see all the project code.',
            content: {
                portfolio:{
                    header: "Portfolio",
                    title: "Portfolio",
                    caption: "Here are my small practical tasks, created during the study of various technologies and programming languages. " +
                        "From simple scripts to small web applications - each project reflects my experience and ability to apply acquired knowledge in practice."
                },
                doppioCraft:{
                    header: "Doppio Craft",
                    title: "Doppio Craft",
                    caption: "My first pet project, where I practiced working with a product catalog. There wasn't a strong emphasis on design here, " +
                        "but I am still very happy with the result."
                },
                fitegCopy:{
                    header: "Fiteg",
                    title: "Fiteg copy",
                    caption: "My best project in terms of layout. This design is inspired by an existing company with the same name. " +
                        "And this experience was very important for improving my layout and animation skills. Some details were changed at my discretion. The presence of animations makes it difficult to convey the appearance of the site through photos. Click the button below and enjoy the view in person :)"
                },
                miniApps:{
                    header: "Mini programs",
                    title: "Mini-Apps",
                    caption: "My best pet project in terms of logic rather than layout. It will constantly be updated with new applications. " +
                        "This project is written in Type Script, a new language for me. Practice with it was useful and showed how convenient it is, but at the same time not easy."
                },
                topTalent:{
                    header: "Top Talent (no-code)",
                    title: "Top Talent company",
                    caption: "Top Talent - my first pet project developed using no-code technology. This experience was extremely experimental for me and stands out among the others. " +
                        "There is no code in the project, but to create it, I had to apply other important skills such as creativity, imagination, and design. " +
                        "In addition, despite the absence of programming, this project required the use of markup and styling languages - HTML and CSS."
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

export const defaultLanguage = texts_ru;
const allTexts = [texts_ru,texts_kg,texts_en];
export default allTexts;
