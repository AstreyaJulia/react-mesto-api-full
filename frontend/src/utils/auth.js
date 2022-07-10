import {apiSettings, SERVER_ERRORS} from "./utils";

/** Хандл проверки ответа при регистрации / авторизации, возвращает ответ или ошибку
 * @param res - ответ
 * @returns {*}
 */
const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error(SERVER_ERRORS[res.status]);
    }
}

/** Отправка рег. данных
 * @param registerData - рег. данные {email: string, password: string}
 * @returns {Promise<Response>}
 */
export const register = (registerData) => {
    return fetch(`${apiSettings.serverURL}/signup`, {
        method: "POST",
        headers: apiSettings.headers,
        body: JSON.stringify(registerData)
    })
        .then((res) => handleResponse(res))
}

/** Отправка данных входа
 * @param loginData - данные входа {email: string, password: string}
 * @returns {Promise<Response>}
 */
export const authorize = (loginData) => {
    return fetch(`${apiSettings.serverURL}/signin`, {
        method: "POST",
        headers: apiSettings.headers,
        credentials: 'include',
        body: JSON.stringify(loginData)
    })
        .then((res) => handleResponse(res))
}

/** Получает email по токену, проверка валидности токена
 * @param token - jwt-токен
 * @returns {Promise<any>}
 */
export const getContent = (token) => {
    return fetch(`${apiSettings.serverURL}/users/me`, {
        method: "GET",
        headers: {authorization: 'Bearer ' + localStorage.getItem("jwt"), ...apiSettings.headers},
        credentials: 'include',
    })
        .then((res) => handleResponse(res))
}
