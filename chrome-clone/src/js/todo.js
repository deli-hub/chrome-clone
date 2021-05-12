const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
let toDos = [];
let newId;

function init() {
    loadTodos();
    toDoForm.addEventListener('submit', handleSubmit);
}

/** load saved todo list */
function loadTodos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        // json 형식으로 들어온 데이터 parse
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (list) {
            // todo == key
            paintToDo(list.todo);
        })
    }
}

/**
 * handle pressing enter
 * @param {} event 
 */
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

/**
 * draw a to-do list
 * @param {} text 
 */
function paintToDo(text) {
    const todo = document.createElement('li');
    const delBtn = document.createElement('span');
    newId = toDos.length + 1;

    todo.id = newId;
    delBtn.innerText = '❌';
    delBtn.addEventListener('click', deleteToDo);

    const label = document.createElement('label');
    label.innerText = text;
    
    todo.appendChild(delBtn);
    todo.appendChild(label);

    // 각 elem에 요소를 추가해주고 마지막으로 한 줄로 형성된 요소를 추가해준다.
    toDoList.appendChild(todo);
    saveToDoArray(text);
    saveToDos();
    toDoList.scrollTo(0, toDoList.scrollHeight);
}

/**
 * push text to array
 * @param {} text 
 */
function saveToDoArray(todo) {
    const toDoObj = {
        todo: todo,
        id: newId
    };
    
    toDos.push(toDoObj);
}

/**
 * save to localStorage
 */
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    // remove html
    toDoList.removeChild(li);

    // 특정 함수를 실행시켜서 반환된 리턴값에 해당되는 데이터만 보여준다.
    const cleanTodos = toDos.filter(function (toDo) {
        return toDo.id != li.id;
    });

    toDos = cleanTodos;
    saveToDos();
}

init();