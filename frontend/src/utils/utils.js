/** Объект настроек для работы с API
 * @type {{headers: {"Content-Type": string}, serverURL: string}}
 */
export const apiSettings = {
    serverURL: "http://api.julialatysheva.nomorepartiesxyz.ru",
    headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("jwt"),
    },
    credentials: 'include',
};

/** Адрес сервера авторизации
 * @type {string}
 */
export const BASE_URL = "http://api.julialatysheva.nomorepartiesxyz.ru";
