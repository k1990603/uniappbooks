import * as api from './util';

// 漫画收藏列表
export function closedHistory() {
  return api.get('/books/comic/closedHistory');
}

// 小说收藏列表
export function bookCollectList() {
  return api.get('/books/book/bookCollectList');
}