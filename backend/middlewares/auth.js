const jwt = require('jsonwebtoken');
const { STATUS } = require('../utils/constants/status');
const AuthError = require('../errors/auth-error');

require('dotenv').config();

/** Проверяет наличие токена авторизации и его валидность в заголовках запроса
 * @param req - запрос
 * @param res - ответ
 * @param next
 */
const auth = (req, res, next) => {
  const { authorization } = req.headers;

  /** Если заголовок authorization не передан или не начинается с 'Bearer ' */
  if (!authorization || !authorization.startsWith('Bearer ')) throw new AuthError(STATUS.AUTH_REQUIRED);

  /** Удаляем 'Bearer ' из заголовка */
  const token = authorization.replace('Bearer ', '');
  let payload;

  /** Верификация токена по секретному ключу */
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    throw new AuthError(STATUS.AUTH_REQUIRED);
  }

  req.user = payload;
  next();
};

module.exports = {
  auth,
};
