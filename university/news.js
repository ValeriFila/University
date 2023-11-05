const array = []
const arrayOfCards = document.getElementById('anim_cards')
const buttonToLeft = document.getElementById('toLeftButton')
const buttonToRight = document.getElementById('toRightButton')

const arrayOfPictures = [
    'exhibition.jpeg',
    'ushacov.jpeg',
    'pictures.jpeg',
    'trees.jpeg',
    '2.JPG',
    'group.JPG'
];

const arrayOfText = [
    `На этой неделе прошла красочная выставка кораблей и не только! Самые
    разные корабли были представлены курсантам нашего университета для ознакомления.
    Стоит сказать, что это зрелище по-настоящему завораживающее`,
    `Знакомство с работой администрации Центрального внутригородского района состоялось у курсантов выпускного курса направления «Государственное и муниципальное управление»`,
    `В Морском колледже состоялся круглый стол на тему: "Мы вместе - мы едины!", посвященный празднованию "Дня народного единства". Первокурсники рассказали об истории праздника, связанного с событиями 1611-1612 годов`,
    `Ко Дню народного единства в Морском колледже была организована выставка «Человек- природа-общество». Здесь свои творческие работы представили курсанты и преподаватели`,
    `Руководители управлений ИТ и инфраструктурных объектов рассказали нашим курсантам о возможности стажировки в самом крупном порту России.
Во встрече приняли участие курсанты 3 курса ИСИТ`,
    `Наши курсанты продолжают радовать нас своими наградами.
В этот раз похвастаемся и погордимся ребятами 4 курса ИСИТ. Собственно все на фото, вместо тысячи слов. Поздравляем!`
]

const arrayOfDate = [
    '5.11.2023',
    '14.10.2023',
    '20.09.2023',
    '15.09.2023',
    '2.09.2023',
    '30.08.2023'
]

//количество карточек
let k = 6;
let cardIndex = 0;
let lastCard;

//массив карточек
(function () {
    for (let i = 0; i < k; i++) {
        array[i] = i+1
    }
})();

const buildArrayOfCards = () => {
    for (let i = 0; i < k; i++) {
        arrayOfCards.innerHTML += `
            <div class="single_card" id="${i+1}card">
                <div class="news_image">
                    <img src="dist/images/${arrayOfPictures[i]}">
                </div>
                <div class="text_info">
                    <p id="info">${arrayOfText[i]}</p>
                    <p id="date">${arrayOfDate[i]}</p>
                </div>
            </div>
        `
    }
    lastCard = document.getElementById(`${k}card`)
    lastCard.style.marginRight = '-200px'
}
buildArrayOfCards();
const card = document.getElementById('1card')
const CARD_WIDTH = card.offsetWidth + 100;

const toLeftClick = () => {
    if (cardIndex === 0) {
        cardIndex = array.length - 2
    } else {
        cardIndex -= 1
    }
    arrayOfCards.style.transform = `
        translateX(-${cardIndex * CARD_WIDTH}px)
    `
}

const toRightClick = () => {
    if (cardIndex === array.length - 2) {
        cardIndex = 0
    } else {
        cardIndex += 1
    }
    arrayOfCards.style.transform = `
        translateX(-${cardIndex * CARD_WIDTH}px)
    `
}

buttonToLeft.addEventListener('click', toLeftClick)
buttonToRight.addEventListener('click', toRightClick)

