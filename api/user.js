import * as api from './util';

// 生成二维码接口
export function getCode() {
  return api.get('/books/promote/yards');
}

// 推广用户列表
export function getPromote(data) {
  return api.get('/books/promote/page',data);
}

// 个人中心
export function personalCenter(data) {
  return api.get('/books/user/personalCenter',data);
}

// 上传图片
export function uploadImg(data) {
  return api.post('/books/user/upload',data);
}

// 退出登录
export function quit(data) {
  return api.get('/books/user/quit',data);
}

// 签到
export function signIn(data) {
  return api.get('/books/user/signIn',data);
}

// 用户充值
export function recharge(data) {
  return api.get('/books/account/recharge',data);
}

// 用户充书币列表
export function chongBookCurrencyList(data) {
  return api.get('/books/user/chongBookCurrencyList',data);
}

// 用户充书币
export function chongBookCurrency(data) {
  return api.get('/books/user/chongBookCurrency',data);
}

// vip信息列表
export function chongVIPList(data) {
  return api.get('/books/user/chongVIPList',data);
}

// vip充值
export function chongVIP(data) {
  return api.get('/books/user/chongVIP',data);
}

// 用户分销佣金列表
export function getCommissionList(data) {
  return api.get('/books/account/getCommissionList',data);
}

// 用户分销总佣金
export function getCommissionSum(data) {
  return api.get('/books/account/getCommissionSum',data);
}

// 分佣规则
export function show(data) {
  return api.get('/books/retailStore/show',data);
}

// 获取最新公告
export function noticeShow(data) {
  return api.get('/books/article/show',data);
}

// 账号明细
export function getBalanceList(data) {
  return api.get('/books/user/getBalanceList',data);
}

