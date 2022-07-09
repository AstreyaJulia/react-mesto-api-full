/** Объект настроек для работы с API
 * @type {{headers: {"Content-Type": string}, serverURL: string}}
 */
export const apiSettings = {
    serverURL: "https://api.julialatysheva.nomorepartiesxyz.ru",
    headers: {
        "Content-Type": "application/json",
        authorization: 'Bearer ' + localStorage.getItem("jwt"),
    },
    credentials: 'include',
};

/** Адрес сервера авторизации
 * @type {string}
 */
export const BASE_URL = "https://api.julialatysheva.nomorepartiesxyz.ru";
