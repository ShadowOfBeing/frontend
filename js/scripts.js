answersAndQuestions = {
    'work': {
        1: {'question': 'Расскажите о себе', 'answer': 'Кратко описываем свои последние места работы и стек'},
        2: {'question': 'Почему вы уволились с последнего места работы?', 'answer': 'work_place answer 2'},
        3: {'question': 'Расскажите о самом интересном своём проекте', 'answer': 'work_place answer 3'},
        4: {'question': 'Расскажите о самом большом своём факапе', 'answer': 'Рассказать используя концепцию SMART'},
        5: {'question': 'Опишите свой последний рабочий проект', 'answer': 'Рассказать про последний проект'},
        6: {'question': 'Опишите какая была команда и стек на последнем месте', 'answer': 'Рассказать про тимлидов, бэкендеров/фронтов/тестировщиков, описать стек'},
        7: {'question': 'Опишите как был устроен рабочий процесс на последнем месте работы', 'answer': `Описать кто писал ТЗ,
                         кто создавал и назначал задачи, как задачи брали в работу, как сдавали задачи, как контролировали сроки, как проходило code review.`},
        8: {'question': 'Какие ваши ожидания от нового места работы? В какой компании/проекте хотели бы работать?',
            'answer': 'Можно сказать, что ищешь интересный проект с достойной зарплатой и развитием по хардскилам и карьере.'},
        9: {'question': 'По каким критериям будете выбирать из нескольких офферов?',
            'answer': `Можно сказать, что в первую очередь будешь смотреть на то насколько интересный проект и на зарплату,
                       затем какое развитие могут предложить (по хардскилам и по карьере), если всё перечисленное примерно
                       одинаковое, то выберешь более известную компанию.`},
    },
    'javascript': {
        1: {'question': 'Что такое async и await в JavaScript?',
            'answer': `javascript answer 1`},
        2: {'question': 'Какие методы есть у classList?',
            'answer': `- add<br>
                       - remove<br>
                       - replace<br>
                       - toggle<br>
                       - contains<br>`},
        3: {'question': 'В чём разница в JavaScript между var, let, const?',
            'answer': `javascript answer 3`},
        4: {'question': 'В каком случае в JavaScript коде нужно ставить ; в конце строки?',
            'answer': `Если этот код пишется в теге script в html, либо он будет встраиваться в html страницу.`},
        5: {'question': 'Что такое полифилы?',
            'answer': `Полифилы - это функции JavaScript, которые обычно используются для создания совместимости с
                       браузерами, которые не поддерживают определенные функции JavaScript.`},
        6: {'question': 'Что такое шимы?',
            'answer': `В отличие от полифилов, шимы являются функциями JavaScript, которые используются для модификации
                       или изменения поведения существующих функций. Шимы часто используются во фреймворках и библиотеках
                       JavaScript, чтобы расширить возможности существующих функций и сделать их более совместимыми с
                       различными браузерами и платформами.`},
        7: {'question': 'Какие отличия в версиях JS 5 и 6?',
            'answer': `javascript answer 7`},
        8: {'question': 'Как в JavaScript поделить нацело?',
            'answer': `С помощью оператора ~~. Например запись ~~(9 / 4) вернёт 2.`},
        9: {'question': 'Каким образом можно назначить функцию событию нажатия кнопки?',
            'answer': `1) Можно назначить функцию событию непосредственно в атрибуте HTML:<br>
                       <-button onclick="myFunction()"->Нажми на меня<-/button-><br>
                       2) Можно использовать метод addEventListener в теге <-script->:<br>
                       <-button id="myButton"->Нажми на меня<-/button-><br>
                       <br>
                       <-script-><br>
                       <2s>const myButton = document.getElementById("myButton");<br>
                       <br>
                       <2s>myButton.addEventListener("click", function() {<br>
                       <2s><2s>console.log("Кнопка была нажата");<br>
                       <2s>});<br>
                       <-/script-><br>
                       <br>
                       Используя оба этих способа можно присвоить событию нажатия кнопки сразу несколько функций.
                       Первой будет выполнена функция прописанная в теге самого элемента, а уже затем выполнится функция,
                       прописанная в обработчике <rf>addEventListener<rf>.`},
        10: {'question': 'Что такое стрелочные функции в JavaScript?',
            'answer': `javascript answer 10`},
        11: {'question': 'Что такое замыкания в JavaScript?',
            'answer': `javascript answer 11`},
    },
    'async': {
        1: {'question': 'Как устроена асинхронность в React?',
            'answer': `async answer 1`},
        2: {'question': 'Зачем нужно асинхронное выполнение кода?',
            'answer': `В контексте разработки очень много времени тратится на операции ввода-вывода данных
                       (input/output), асинхронное выполнение кода нужно для того, чтобы выполнять такие операции
                       параллельно. К примеру, чтобы запросы к базе данных не замедляли выполнение кода и выполнялись
                       параллельно остальному коду или когда микросервисы посылают запросы к другим сервисам.`},
    },
    'algorithms': {
        1: {'question': 'Что такое Big O?', 'answer': 'algorithms answer 1'},
        2: {'question': 'Какая сложность у операции вставки в середину списка в JavaScript?',
            'answer': `Вставка элемента в середину списка в JavaScript занимает O(n) времени в худшем случае, где n - это
                       длина списка. Так как после вставки элемента необходимо перепривязать все соседние элементы, что
                       может потребовать прохождения до середины списка. Если индекс позиции вставки находится ближе к
                       началу списка, сложность может быть O(1) или близкой к этому значению.`},
        3: {'question': 'Какая сложность у операции вставки в конец списка в JavaScript?',
            'answer': 'В Python сложность вставки в конец списка будет O(1), так как мы обращаемся по индексу.'},
        4: {'question': 'Какие виды сортировок существуют?', 'answer': 'Пузырьком, слиянием, быстрая сортировка/сортировка Хоара'},
        5: {'question': 'Что такое хэш-таблица?', 'answer': 'algorithms answer 6'},
        6: {'question': 'Как развернуть связный список (linked list)?', 'answer': 'algorithms answer 6'},
        7: {'question': 'Как развернуть словарь в JavaScript?',
            'answer': `algorithms answer 8`},
    },
    'tests': {
        1: {'question': 'Какой процент кода нужно покрывать тестами?',
            'answer': `Нужно стремиться к 70-80%, но держать в голове, что на практике покрытие будет на 10-15% меньше, чем запланировал.`},
        2: {'question': 'Какие инструменты для тестирования фронтенда существуют?',
            'answer': `- Selenium для автоматизации ручного тестирования<br>
                       - Linter для проверки Code Style`},
        3: {'question': 'Какие виды тестирования существуют?',
            'answer': `- unit-тесты<br>
                       - интеграционные тесты<br>
                       - mock-тестирование`},
        4: {'question': 'Что такое unit-тесты? Зачем они нужны?',
            'answer': 'unit-тесты проверяют работоспособность отдельных модулей проекта'},
        5: {'question': 'Что такое интеграционные тесты? Зачем они нужны?',
            'answer': `answer 5`},
        6: {'question': 'Что такое mock-тесты? Зачем они нужны?',
            'answer': `answer 6`},
    },
    'oop': {
        1: {'question': 'Что такое SOLID?', 'answer': 'oop answer 1'},
        2: {'question': 'Какие основные концепции ООП? Опишите их.', 'answer': 'oop answer 2'},
        3: {'question': 'Что такое ромбовидное наследование?',
            'answer': `Ромбовидное наследование (diamond inheritance) - это специфика множественного наследования,
                       которая возникает, когда один класс наследуется от двух классов через промежуточный класс,
                       которые оба наследуют от одного и того же базового класса. Это создает структуру наследования в
                       форме ромба, где базовый класс расположен на вершине ромба, а наследующие классы - на боковых
                       сторонах.`},
        4: {'question': 'Что такое абстрактный класс?',
            'answer': `Абстрактный класс похож на интерфейс, но в отличии от интерфейса в абстрактном классе у методов
                       можно прописать реализацию. В JavaScript абстрактный класс реализуется через...?`},
        5: {'question': 'Что такое интерфейс?',
            'answer': `Интерфейс хранит описание методов с их параметрами без реализации, т.е. интерфейс не является
                       классом и для него нельзя создать объект. В JavaScript интерфейсы реализуются через...?`},
        6: {'question': 'Как в JavaScript указать модификатор private?',
            'answer': `oop answer 6`},
        7: {'question': 'Как проверить, что элемент является экземпляром класса в JavaScript?',
            'answer': 'oop answer 7'},
        8: {'question': 'Какие стандартные методы есть у классов в JavaScript?',
            'answer': `oop answer 8`},
        9: {'question': 'Как получить все свойства класса в JavaScript?',
            'answer': `oop answer 9`},
    },
    'git': {
        1: {'question': 'В чём отличие merge от rebase?',
            'answer': `Отличие между rebase и merge в Git заключается в том, как происходит объединение изменений из
                       разных веток в одну. Merge создает новый коммит, который имеет двух предков - последний коммит в
                       текущей ветке и последний коммит в объединяемой ветке. Rebase же перемещает все изменения из
                       текущей ветки на вершину целевой ветки, что позволяет создать линейную историю коммитов без
                       ветвлений и точек слияния. Это полезно, если вы хотите иметь чистую, простую историю коммитов в
                       ветке, или если вы работаете над веткой, которая долгое время не была обновлена и может содержать
                       конфликты с последней версией целевой ветки.`},
        2: {'question': 'Какие команды git вы использовали в работе?',
            'answer': `- git clone<br>
                       - git add<br>
                       - git commit<br>
                       - git push<br>
                       - git pull<br>
                       - git rebase<br>
                       - git merge<br>
                       - git amend<br>`},
        3: {'question': 'git question 3', 'answer': 'git answer 3'},
    },
    'other': {
        1: {'question': 'Ссылки на материалы для изучения',
            'answer': `1) <a href="https://yourwaytoit.ru/termins/Frontend/Общее/first/" target="_blank">Термины Frontend</a>`},
        2: {'question': 'Что такое REST?', 'answer': 'other answer 1'},
        3: {'question': 'Что такое KISS?', 'answer': 'other answer 2'},
        4: {'question': 'Что такое DRY?', 'answer': 'other answer 3'},
        5: {'question': 'Что такое монолит и микросервисы?', 'answer': 'other answer 5'},
        6: {'question': 'Как вы изучали программирование?', 'answer': 'other answer 6'},
        7: {'question': 'Какие существуют инструменты для оптимизации кода в React проектах?',
            'answer': `other answer 6`},
        8: {'question': 'Как сделать раскрывающийся блок со вложенными блоками?', 'answer': 'other answer 7'},
        9: {'question': 'Что такое Pixel Perfect?', 'answer': 'other answer 8'},
        10: {'question': 'Что такое Mobile First?', 'answer': 'other answer 9'},
        11: {'question': 'Что такое адаптивная вёрстка? За счёт чего она реализуется?', 'answer': 'other answer 10'},
        12: {'question': `Есть родительский и дочерний элементы, дочерний частично перекрывает родительский. У обоих
                          элементов установлены обработчики событий. Как сделать так, чтобы при клике на дочерний элемент
                          обрабатывался только клик по нему, не распространяясь на родителя?`,
             'answer': `Нужно в обработчике дочернего элемента прописать event.stopPropagation()`},
    },
    'build_tools': {
        1: {'question': 'Какие существуют сборщики проектов?', 'answer': 'WebPack, Gulp, Grunt'},
        2: {'question': `Что такое сборщик проекта?`, 'answer': 'build_tools answer 2'},
    },
    'react': {
        1: {'question': 'Какой принцип работы React?', 'answer': 'react answer 1'},
        2: {'question': `Почему React называют реактивным фреймворком?`, 'answer': 'react answer 2'},
        3: {'question': `Какие хуки React вы знаете?`, 'answer': 'react answer 3'},
        4: {'question': `Что такое useMemo?`, 'answer': 'react answer 4'},
        5: {'question': `Что такое state? В каких случаях его стоит использовать`, 'answer': 'react answer 5'},
    },
    'html': {
        1: {'question': 'В каких случаях нужно использовать class, а в каких id? Назовите плюсы и минусы обоих подходов',
            'answer': `- при использовании class можно использовать методы classList, в том числе управлять состоянием
                       элемента (например скрыть или отобразить) за счёт добавления дополнительных классов`},
        2: {'question': `Как родительскому элементу добавить дочерний элемент самым первым? А самым последним?`,
            'answer': `Добавить дочерний элемент самым первым (2 способа):<br>
                       - parentElement.insertBefore(newElement, parentElement.firstChild) - newElement передаём в
                       качестве объекта Node<br>
                       - parentElement.insertAdjacentHTML('afterbegin', newElement) - newElement передаём в качестве строки<br>

                       Добавить дочерний элемент самым последним (2 способа):<br>
                       - parentElement.appendChild(newElement) - newElement передаём в качестве объекта Node<br>
                       - parentElement.insertAdjacentHTML('beforeend', newElement) - newElement передаём в качестве строки`},
        3: {'question': `Какие виды позиционирования элементов существуют?`,
            'answer': `1) static (статическое позиционирование) - это значение по умолчанию, элемент позиционируется в
                       соответствии с нормальным потоком документа. Свойства top, bottom, left, right и z-index игнорируются.
                       <br>
                       2) relative (относительное позиционирование) - элемент смещается относительно своего нормального
                       положения. При этом координаты top, bottom, left, right указывают смещение относительно исходного
                       положения. Если элементу задано свойство position: relative, то z-index также начинает действовать.
                       <br>
                       3) absolute (абсолютное позиционирование) - элемент позиционируется относительно ближайшего
                       родительского элемента с позиционированием (relative, absolute, fixed). Если родительского элемента
                       не существует, то относительно body. При этом координаты top, bottom, left, right указывают расстояние
                       до соответствующей границы родительского элемента. Если элементу задано свойство position: absolute,
                       то z-index также начинает действовать.
                       <br>
                       4) fixed (фиксированное позиционирование) - элемент фиксируется относительно окна браузера. При этом
                       координаты top, bottom, left, right указывают расстояние до соответствующей границы окна браузера.
                       Если элементу задано свойство position: fixed, то z-index также начинает действовать.`},
        4: {'question': `Как вставить на страницу элемент в виде узла Node? А как в виде строки?`,
            'answer': `В виде узла через parentElement.insertBefore() или parentElement.appendChild(), а в виде строки
                       через parentElement.insertAdjacentHTML()`},
    },
    'css': {
        1: {'question': 'Что такое css-препроцессоры?', 'answer': 'css answer 1'},
        2: {'question': `Как сделать анимацию в css?`, 'answer': 'css answer 2'},
        3: {'question': `Как создавать переменные в css?`, 'answer': 'css answer 3'},
        4: {'question': `Что такое медиа запросы?`, 'answer': 'css answer 4'},
        5: {'question': `Что такое hover?`, 'answer': 'css answer 5'},
        6: {'question': `Что такое after/before?`, 'answer': 'css answer 6'},
        7: {'question': `Как сделать скругление только определённого угла у элемента?`,
            'answer': `- border-top-left-radius<br>
                       - border-top-right-radius<br>
                       - border-bottom-left-radius<br>
                       - border-bottom-right-radius<br>`},
        8: {'question': `Как можно сделать неровные края у блока?`,
            'answer': 'С помощью clip-path'},
        9: {'question': `Как сделать так, чтобы изображение масштабировалось с сохранением оригинальных пропорций?`,
            'answer': 'Необходимо элементу изображения прописать стиль object-fit: scale-down;'},
        10: {'question': `Расскажите про css-селекторы +, ~ и >`, 'answer': 'css answer 10'},
    },
    'typescript': {
        1: {'question': 'вопрос 1', 'answer': 'TypeScript answer 1'},
        2: {'question': `вопрос 2`, 'answer': 'TypeScript answer 2'},
    },
    'jQuery': {
        1: {'question': 'вопрос 1', 'answer': 'jQuery answer 1'},
        2: {'question': `вопрос 2`, 'answer': 'jQuery answer 2'},
    },
}

function getAnswer(category, answerID) {
    var question = document.getElementsByClassName('question')[0]
    var answer = document.getElementsByClassName('answer')[0]
    var questionInMenu = document.getElementById('question ' + answerID)
    var prevSelectQ = document.getElementById(sessionStorage.getItem('prevSelectQuestion') || 'question 1')

    question.innerHTML = answersAndQuestions[category][answerID]['question']
    answer.innerHTML = answersAndQuestions[category][answerID]['answer']
    .replaceAll('<2s>', '&nbsp;&nbsp;')
    .replaceAll('<-/', '&lt;/')
    .replaceAll('<-', '&lt;')
    .replaceAll('->', '&gt;')
    if (prevSelectQ) {
        prevSelectQ.classList.remove('select-question')
    }

    questionInMenu.classList.add('select-question')
    sessionStorage.setItem('prevSelectQuestion', 'question ' + answerID)
}

function getQuestionsList(category) {
    var questionsContainer = document.getElementsByClassName('questions-container')[0]
    var questionsHTML = ''
    for (var i = 1; i <= Object.keys(answersAndQuestions[category]).length; i++) {
        questionsHTML += `<div id="question ${i}" class="question-in-menu" onclick="getAnswer('${category}', ${i})">${answersAndQuestions[category][i]['question']}</div>`
    }
    questionsContainer.innerHTML = questionsHTML
}

function getLayout(category) {
    // сохраняем категорию в объекте sessionStorage браузера
    sessionStorage.setItem("category", category)
    // обновляем страницу
    window.location.href = window.location.href
}

var mainText = `
    <div class="main-page-content">
        Совет №1: если крутите опыт, то очень хорошо проработайте легенду, посмотрите телеграм-канал "Один день ITтишника",
        поспрашивайте опытных товарищей.
        <br><br>
        Совет №2: чем учить теорию до бесконечности выучите поверхностно любой список вопросов из интернета (топ 50 вопросов
        по вашему языку, топ 50 вопросов по вашему фреймворку) и идите практиковаться проходить собесы. За 5-6 собесов
        поймёте, что спрашивают 20-30 одних и тех же вопросов, выпишите их все и те что не знаете выучите.
        <br><br>
        Совет №3: включайте запись с экрана когда проходите техническое собеседование. Телефонные созвоны с эйчарами
        тоже желательно записывать. Потом отсматривайте/отслушивайте, выписывайте вопросы что задают, обращайте
        внимание как вы сами отвечаете, корректируйте свои ответы. Найдите оптимальный темп ответа: слишком быстрые
        ответы будут выглядеть как заученные, при слишком долгих размышлениях будете выглядеть неуверенно. Идеально
        знать ответ на вопрос и делать вид, что слегка задумался, а потом постепенно выдавать ответ, будто вспоминаешь.
        <br><br>
        Совет №4: на скрининге помимо общих вопросов эйчары могут поспрашивать технические вопросы по бумажке, либо
        тест с вариантами ответов, нужно быть к этому готовым. Твои ответы будут оценивать не они, они запишут ответы
        либо текстом, либо на аудио.
        <br><br>
        Совет №5: не ставьте на один день больше 2 технических собеседований, лучше вообще 1. Скринингов это не касается,
        можно и 5 штук поставить.
        <br><br>
        Совет №6: обязательно просить фидбек в конце интервью, даже если чувствуешь, что провалил его. Если после
        эйчар напишет отказ без фидбека тоже попросить обратную связь. Если всё же не получишь обратную связь, то не
        стоит загоняться по поводу причины отказа, причины могут быть совершенно разные:<br>
        - недостаточные знания<br>
        - не устроила причина твоего увольнения с последнего места работы<br>
        - в резюме слишком частые смены работ<br>
        - вакансия уже закрылась (хотя эту причину обычно озвучивают)<br>
        - ты попросил слишком много денег<br>
        - не понравилась твоя внешность<br>
        - не понравилась твоя манера общения<br>
        - не понравились твои взгляды на работу<br>
        - не подошёл твой предыдущий опыт (искали кандидата с релевантным опытом, например в банковской сфере)<br>
        - не совпали по твоим ожиданиям от работы и то что они могут предложить
        <br><br>
        Совет №7: обращайте внимание на красные флаги. Например:<br>
        - вакансия очень долго открыта<br>
        - не хотят говорить вилку по зарплате<br>
        - очень размытые требования к кандидату<br>
        - сфера деятельности компании из серого списка (ставки на спорт, сайты для взрослых, казино, микрозаймы)<br>
        - оформление по ГПХ или как самозанятый<br>
        - стартап, который оплачивает работу акциями
        <br><br>
        Совет №8: когда будете с эйчаром выбирать дату техсобеса, выбирайте день как можно раньше. Выучить что-то за несколько
        дней в любом случае не успеете, а вот потерять вакансию шансы увеличиваются.
        <br><br>
        Совет №9: не стоит переоценивать знание фреймворков, довольно редко задают вопросы на знание конкретного фреймворка
        и даже если спросят, то скорее всего какие то поверхностные вопросы. Чаще спрашивают фундаментальные вопросы:
        ООП, асинхронность, знание языка.
        <br><br>
        Совет №10: не приходите на собеседование уставшим, в состоянии опьянения, в плохом самочувствии, лучше в
        таком случае объясниться и попросить перенести встречу.
        <br><br>
        Совет №11: если не знаете ответа, то не нужно мяться и делать долгих пауз, лучше сказать честно, что либо
        забыл, либо не сталкивался с таким в работе, но попробуешь порассуждать. Обращают внимание как ты отвечаешь
        на вопросы на которые не знаешь ответа, пробуешь ли рассуждать, смотрят за логикой рассуждений.
        <br><br>
        Совет №12: обязательно задавайте вопросы эйчару, отсутствие вопросов может произвести впечатление, что ты
        не сильно заинтересован в вакансии.
    </div>
`