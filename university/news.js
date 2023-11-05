const array = []
const arrayOfCards = document.getElementById('anim_cards')
const buttonToLeft = document.getElementById('toLeftButton')
const buttonToRight = document.getElementById('toRightButton')

//количество карточек
let k = 10;
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
              <p>${i+1}</p>
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

