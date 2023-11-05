'use strict';
import './counter.js';
/* SmtpJS.com - v3.0.0 */
const Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
const SUBJECT = 'Спасибо за обратную связь!';
const USER = document.getElementById('name');
const USER_EMAIL = document.getElementById('email');
const TEXT = document.getElementById('text');
const SUBMIT_BUTTON = document.getElementById('confirm_button');
const FORM = document.getElementById('write_email_form');

const sendButton = document.getElementById('sendButton');
const popup = document.getElementById('popup');
const background = document.getElementById('blur_background');
const body = document.getElementsByTagName('body')[0];

function handleForSubmit(event) {
    event.preventDefault()
    validateForm()
}
FORM.addEventListener('submit', handleForSubmit)

function openPopup() {
    body.style.overflow = 'hidden';
    popup.style.visibility = 'visible';
    background.classList.add('open');
    USER.classList.add('full_field');
    USER_EMAIL.classList.add('full_field');
    TEXT.classList.add('full_field')
    //SUBMIT_BUTTON.addEventListener('click', validateForm);
}
sendButton.addEventListener('click', openPopup);

background.addEventListener('click', (e) => {
    const click = e.composedPath().includes(popup);
    if (!click) {
        hidePopup();
    }
});

function hidePopup() {
    body.style.overflow = 'scroll';
    popup.style.visibility = 'hidden';
    background.classList.remove('open')
    USER.classList.remove('empty_field')
    USER_EMAIL.classList.remove('empty_field')
    TEXT.classList.remove('empty_field')
    USER.value = ''
    USER_EMAIL.value = ''
    TEXT.value = ''
}

function validateForm() {
    const name = document.forms['write_email_form']['name'].value;
    const email = document.forms['write_email_form']['email'].value;
    const text = document.forms['write_email_form']['text'].value;
    if ((name === null || name === '') || (email === null || email === '') || (text === null || text === '')) {
        USER.classList.remove('full_field')
        USER_EMAIL.classList.remove('full_field')
        TEXT.classList.remove('full_field')
        USER.classList.add('empty_field');
        USER_EMAIL.classList.add('empty_field');
        TEXT.classList.add('empty_field');
    } else {
        Email.send({
            SecureToken : 'a8328433-4994-4e7d-9d6b-656a16cc4e48',
            To : email,
            From : "universitygmuushacova@gmail.com",
            Subject : SUBJECT,
            Body : `Здравствуйте, ${name}! Спасибо за обращение в ГМУ 
            Ушакова! Ожидайте ответного письма.`
        }).then(
            console.log('сообщение успешно отправлено')
        );

        hidePopup()
    }
}

//ФУНКЦИЯ ОТПРАВКИ СООБЩЕНИЯ
/**/

