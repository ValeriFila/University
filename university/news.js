const array = []
const arrayOfCards = document.getElementById('anim_cards')
const buttonToLeft = document.getElementById('toLeftButton')
const buttonToRight = document.getElementById('toRightButton')

//количество карточек
let k = 10;
let cardIndex = 0;

//массив карточек
(function () {
    for (let i = 0; i < k; i++) {
        array[i] = i+1
    }
})();

const buildArrayOfCards = () => {
    for (let i = 0; i < k; i++) {
        arrayOfCards.innerHTML += `
            <div class="single_card" id="card">
              <p>${i+1}</p>
            </div>
        `
    }
}
buildArrayOfCards();
const card = document.getElementById('card')
const CARD_WIDTH = card.offsetWidth + 100;
console.log(CARD_WIDTH);



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

