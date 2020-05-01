import * as api from './util';

// 收藏列表
export function historicalRecord() {
  return api.get('/books/comic/historicalRecord');
}

// 漫画收藏
export function closedComic(data) {
  return api.get('/books/comic/closedComic', data);
}

// 小说收藏/取消收藏
export function bookCollect(data) {
  return api.get('/books/book/bookCollect', data);
}

// 小说收藏/取消收藏
export function deleteHistorical(data) {
  return api.get('/books/comic/deleteHistorical', data);
}

// 小说收藏/取消收藏
export function deleteAllHistorical(data) {
  return api.get('/books/comic/deleteAllHistorical', data);
}
