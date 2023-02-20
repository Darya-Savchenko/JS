import Cookies from "js-cookie";
export function updateCookies(todoList) {
    Cookies.set('todoList', JSON.stringify(todoList), {expires: 7});
}