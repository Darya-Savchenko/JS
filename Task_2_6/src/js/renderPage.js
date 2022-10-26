import Cookies from "js-cookie";
import {updateCookies} from "./updateCookies.js";

export function renderPage() {
    const cookies = JSON.parse(Cookies.get('todoList'));
    const innerHTML = cookies.map(el => createItem(el));
    document.querySelector('.items__container').innerHTML = innerHTML.join('');

    onDeleteButton();
    onEditButton();
    onDeleteAllButton();
}

function createItem(todo) {
    return `<div class="item">
                    <input type="text" name="item" class="item__input"
                            value="${todo.todo}" disabled>
                    <div class="item__buttons">
                        <button class="button__edit-item"><img alt="" src="/src/img/edit.png"></button>
                        <button class="button__delete-item"><img alt="" src="/src/img/delete.png"></button>
                    </div>
                </div>`
}

function onDeleteButton() {
    const deleteItem = document.querySelectorAll('.button__delete-item');
    const todoList = JSON.parse(Cookies.get('todoList'));
    deleteItem.forEach((el, index) => el.addEventListener('click', () => {
        todoList.splice(index, 1);

        updateCookies(todoList);
        renderPage();
    }));
}

function onEditButton() {
    const editItem = document.querySelectorAll('.button__edit-item');
    const todoList = JSON.parse(Cookies.get('todoList'));
    editItem.forEach((el, index) => el.addEventListener('click', () => {
        const item = document.querySelectorAll('.item__input');
        item[index].removeAttribute('disabled');

        const save = document.createElement('button');
        const img = document.createElement('img');
        img.src = '/src/img/save.png';
        save.classList.add('button__save-item');
        save.appendChild(img);

        const buttonsContainer = document.querySelectorAll('.item__buttons');
        buttonsContainer[index].appendChild(save);

        save.addEventListener('click', () => {
            todoList[index].todo = item[index].value;
            updateCookies(todoList);
            item[index].setAttribute('disabled', 'disabled');
            buttonsContainer[index].removeChild(save);
        })
    }))
}

function onDeleteAllButton(){
    document.querySelector('.button__delete-items').addEventListener('click', () => {
        updateCookies([]);
        renderPage();
    })
}
