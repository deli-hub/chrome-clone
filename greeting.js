const form = document.querySelector('.js-form'),
    todoForm = document.querySelector('.js-toDoForm'),
    todoList = document.querySelector('.js-toDoList'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings'),
    askNameInput = form.querySelector('#askName');

const USER_LS = 'currentUser',
    SHOWING_CN = 'showing',
    HIDING = 'hiding';

function init() {
    loadName();
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    todoForm.classList.remove(HIDING);
    todoList.classList.remove(HIDING);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}!`;
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    const inputValue = input.value;
    localStorage.setItem(USER_LS, inputValue);
    paintGreeting(inputValue);
}

function hindingAskingName() {
    form.classList.add(HIDING);
}

init();