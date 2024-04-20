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
                        'От простых скриптов до небольших веб-приложений - каждый проект отражает мой опыт и умение применять полученные знания на практике. ' +
                        'Хотелось бы заметить, что каждая моя фотография на этом сайте кликабельна и умеет увеличиваться. Это сделано на чистом коде вручную без библиотек ',
                },
                doppioCraft:{
                    header: 'Doppio Craft',
                    title: 'Doppio Craft',
                    caption: 'Мой первый пет-проект, в котором я практиковался работать с каталогом товаров. Сильного упора в дизайн здесь не было, но я все равно очень доаволен результатом',
                },
                fitegCopy:{
                    header: 'Fiteg copy',
                    title: 'Fiteg copy',
                    caption: 'Мой лучший проект в области верстки, вдохновленный одноименной компанией. Этот сайт написан полностью вручную, ' +
                        'без использования библиотек для стилизации, что отлично показывает мои навыки верстки и анимации.' +
                        'Анимации делают сайт живым, не передаваемым через фото. Посмотрите на сайт лично, нажав на кнопку ниже.',
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
              contacts: 'Байланыштар',
            },
        },
        landing: {
            h3: 'Салам!',
            h1: ['Мен', 'Русланбекмин'],
            h2: 'Front-End Разработчик',
            p: [
                'Иш тажрыйбасы жок Кыргызстандан башталгыч веб-иштеп чыгуучу.',
                'Мен веб-долбоорлорду түзүү боюнча машыгып жатам жана бул менин Портфолио.'
            ],
            skillsTitle: 'Менин жөндөмдөрүм:'
        },
        about: {
            title: 'Мен туралуу кыскача:',
            geekTech: {
                images: [geekTech_kg, geekTech_me],
                title: 'GeekTech-те (Geeks) окуу',
                caption: [
                    'Менин IT тармагына болгон сапарым GeekTech (учурда Geeks) менен башталды. Алты айдын ичинде мен негизги көндүмдөрдү, билимдерди өздөштүрүп, бул жаатта биринчи тажрыйбамды алдым. ' +
                    'Окуу учурунда жана андан кийин мен тарбиячы (ментор) болуп да иштедим жана кыйналган студенттерге татаал темаларды өздөштүрүүсүнө жардам бердим.',
                    'Мен GeekTech компаниясына бул мүмкүнчүлүк үчүн ыраазымын. Рахмат!'],
                figcaption: 'Үч тилде бар. Башкаларды көрүү үчүн сайттын тилин өзгөртүңүз',
            },
            noCode: {
                images: [noCode_me, noCode],
                title: 'Muras Academy-да окуу',
                caption: [
                    'GeekTech аяктагандан кийин, мен ушуну менен токтоп калган жокмун. Жаңы темаларды өз алдынча үйрөнө баштадым. ' +
                    'Бир багыт менен чектелбестен, ар кандай багыттарды изилдедим. Бул мени кодсуз программалоо боюнча адистештирүүмө алып келди.',
                    'Кодсуз программалоо, негизинен, визуалдык редактор интерфейсин колдонуу менен код жазуусуз программаларды түзүү дегенди билдирет. ' +
                    'Бул тажрыйба мага жаңы темаларды түшүнүүгө чоң жардам берди жана веб-дизайн көндүмдөрүн өздөштүрүүдө негизги ролду ойноду.'
                ],
            },
        },
        projects: {
            title: 'Менин проектерим',
            caption: 'Бул жерде толук сүрөттөлүшү жана сүрөттөрү менен менин мыкты пет проектерим бар. ' +
                'Ошондой эле коддо Логика менен Макеттин ортосундагы байланышты чагылдырган диаграмма бар. ' +
                'Төмөндө долбоордо колдонулган негизги технологиялардын тизмеси келтирилген. ' +
                'Жана аягында 2 баскыч бар: бири долбоордун веб-сайтына өтүүгө мүмкүндүк берет, ' +
                'жана экинчиси менин жеке GitHub репозиторийине баруу, анда сиз долбоордун бардык кодун көрө аласыз',
            content: {
                portfolio:{
                    header: 'Портфолио',
                    title: 'Портфолио',
                    caption: 'Бул жерде ар кандай технологияларды жана программалоо тилдерин үйрөнүү процессинде түзүлгөн менин кичинекей практикалык тапшырмаларым. ' +
                        'Жөнөкөй скрипттерден баштап кичинекей веб-тиркемелерге чейин ар бир долбоор менин тажрыйбамды жана алган билимимди иш жүзүндө колдонуу жөндөмүмдү чагылдырат. ' +
                        'Бул сайттагы менин сүрөттөрүмдүн ар бири чыкылдатылып, чоңойтсо болот деп белгилегим келет. Бул китепканаларсыз кол менен таза код менен жасалат.',
                },
                doppioCraft:{
                    header: 'Doppio Craft',
                    title: 'Doppio Craft',
                    caption: 'Менин биринчи пет проектим, анда мен продукт каталогу менен иштөөнү үйрөндүм. Бул жерде дизайнга катуу басым жасалган жок, бирок мен дагы эле натыйжага абдан ыраазымын.'
                },
                fitegCopy:{
                    header: 'Fiteg',
                    noImageAlert: 'Анимациялар беттик көрүнүштү түзөтүп, суроолордон сайттын көрүнүшүн ачуу укугу болот. Көрүүдү көңүлдүңүз :)',
                    title: 'Fiteg copy',
                    caption: 'Менин эң мыкты дизайн долбоорум, ошол эле аталыштагы компаниянын шыктандыруусу. Бул сайт толугу менен кол менен жазылган, '+
                        'Стилдөө үчүн китепканаларды колдонбостон, бул менин макет жана анимация жөндөмүмдү эң сонун көрсөтөт.' +
                        'Анимациялар сайтты сүрөттөр аркылуу эмес, жандуу кылат. Төмөнкү баскычты чыкылдатуу менен сайтты өзүңүз карап көрүңүз.',
},
                miniApps:{
                    header: 'Мини программалар',
                    title: 'Mini-Apps',
                    caption: 'Макетин эмес, логика жагынан менин эң мыкты пет-проектим. Ал дайыма жаңы тиркемелер менен толукталат. ' +
                        'Бул долбоор Type Script менен жазылган, мен үчүн жаңы тил. Аны менен машыгуу пайдалуу болду жана анын канчалык ыңгайлуу экенин көрсөттү, бирок ошол эле учурда оңой эмес.'
                },
                topTalent:{
                    header: 'Top Talent (no-code)',
                    title: 'Top Talent company',
                    caption: 'Top Talent - кодсуз технологияны колдонуу менен иштелип чыккан менин биринчи пет-проектим. Бул тажрыйба мен үчүн өтө эксперименталдык болду жана башкалардан өзгөчөлөндү. ' +
                        'Долбоордо код жок, бирок аны түзүү үчүн мен чыгармачылык, фантазия жана дизайн сыяктуу башка маанилүү көндүмдөрдү колдонууга туура келди. ' +
                        'Мындан тышкары, программалоонун жоктугуна карабастан, бул долбоор гипертекстти белгилөө жана стилдөө тилдерин - HTML жана CSS колдонууну талап кылды.'
                }
            },
            pie: ['Верстка','Логика'],
            action: 'Көрүү',
        },
        contacts: {
            title: 'Менин байланыштарым',
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
                    header: 'Portfolio',
                    title: 'Portfolio',
                    caption: 'Here are my small practical tasks, created during the study of various technologies and programming languages. ' +
                        'From simple scripts to small web applications - each project reflects my experience and ability to apply acquired knowledge in practice.' +
                    'I would like to note that each of my photos on this website is clickable and can be enlarged. This is done with clean code manually, without libraries.'
                },
                doppioCraft:{
                    header: 'Doppio Craft',
                    title: 'Doppio Craft',
                    caption: 'My first pet project, where I practiced working with a product catalog. There wasn\'t a strong emphasis on design here, ' +
                        'but I am still very happy with the result.'
                },
                fitegCopy:{
                    header: 'Fiteg',
                    title: 'Fiteg copy',
                    caption: 'My best project in the field of web development, inspired by a company of the same name. This website is entirely handcrafted, ' +
                        'without the use of styling libraries, showcasing my skills in web design and animation. The animations bring the site to life, ' +
                        'something not captured through photos. Take a look at the site yourself by clicking the button below.'
                },
                miniApps:{
                    header: 'Mini programs',
                    title: 'Mini-Apps',
                    caption: 'My best pet project in terms of logic rather than layout. It will constantly be updated with new applications. ' +
                        'This project is written in Type Script, a new language for me. Practice with it was useful and showed how convenient it is, but at the same time not easy.'
                },
                topTalent:{
                    header: 'Top Talent (no-code)',
                    title: 'Top Talent company',
                    caption: 'Top Talent - my first pet project developed using no-code technology. This experience was extremely experimental for me and stands out among the others. ' +
                        'There is no code in the project, but to create it, I had to apply other important skills such as creativity, imagination, and design. ' +
                        'In addition, despite the absence of programming, this project required the use of markup and styling languages - HTML and CSS.'
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
