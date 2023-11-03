'use strict';
const USER_EMAIL = '8918valeria@gmail.com';
const SUBJECT = 'Спасибо за обратную связь!';
const BODY = 'Скоро мы с Вами свяжемся!';

const sendButton = document.getElementById('sendButton');
const popap = document.getElementById('popap');
const background = document.getElementById('blur_background');
const body = document.getElementsByTagName('body')[0];
sendButton.addEventListener('click', openPopap);


function openPopap() {
    body.style.overflow = 'hidden';
    popap.style.visibility = 'visible';
    background.style.backdropFilter = `blur(10px)`;
    background.style.zIndex = '99';
    background.style.backgroundColor = '#0000004d';
}

/*window.addEventListener('click', function (e) {
    if (popap.contains(e.target)) {

    }
    else {
        body.style.overflow = 'scroll';
        popap.style.visibility = 'hidden';
        background.style.backdropFilter = `none`;
        background.style.zIndex = '-1';
        background.style.backgroundColor = 'none';
    }
});*/




//ФУНКЦИЯ ОТПРАВКИ СООБЩЕНИЯ
/*Email.send({
    SecureToken : 'a8328433-4994-4e7d-9d6b-656a16cc4e48',
    To : USER_EMAIL,
    From : "universitygmuushacova@gmail.com",
    Subject : SUBJECT,
    Body : BODY
}).then(
    message => alert(message)
);*/
