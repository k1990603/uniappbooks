import * as api from './util';

// 登录
export function login(data) {
  return api.get('/books/user/login',data);
}

// 退出
export function logout(data) {
  return api.get('/books/user/quit', data);
}

// 注册
export function register(data) {
  return api.put('/books/user/register', data);
}

// 校验用户名是否已存在
export function verifyUserName(data) {
  return api.get('/books/user/verifyUserName', data);
}
