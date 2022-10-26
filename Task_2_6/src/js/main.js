import Cookies from "js-cookie";
import {renderPage} from "./renderPage.js";
import {updateCookies} from "./updateCookies.js";

window.onload = function () {
    if(document.cookie.indexOf("todoList") == 0){
        renderPage();
    }
    else {
        updateCookies([]);
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const content = document.querySelector('.editList').value;
        const todoItem = {todo: content};
        const todoList = JSON.parse(Cookies.get('todoList'));
        todoList.push(todoItem);

        updateCookies(todoList);
        renderPage();
        form.reset();
    })
}
