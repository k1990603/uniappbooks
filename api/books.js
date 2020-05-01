import * as api from './util';

// 小说列表
export function getbookPage() {
  return api.get('/books/book/homePage');
}

// 小说详情
export function getbookDetail(data) {
  return api.get('/books/book/details', data);
}

// 类别下小说
export function getbookType(data) {
  return api.get('/books/book/homePageList', data);
}

// 大类别下小说
export function categoryPageList(data) {
  return api.get('/books/book/categoryPageList', data);
}

// 模糊搜索
export function getBookStyle(data) {
  return api.get('/books/book/page', data);
}

// 单个章节内容
export function episodesContent(data) {
  return api.get('/books/book/episodesContent', data);
}

// 小说评论列表
export function getCommentPage(data) {
  return api.get('/books/book/commentList', data);
}

// 小说打赏列表
export function getSendPage(data) {
  return api.get('/books/book/userSendList', data);
}

// 小说大分类列表
export function categoryList(data) {
  return api.get('/books/book/categoryList', data);
}

// 小说收藏/取消收藏
export function bookCollect(data) {
  return api.get('/books/book/bookCollect', data);
}

// 点赞/取消点赞
export function bookLike(data) {
  return api.get('/books/book/bookLike', data);
}

// 评论
export function comment(data) {
  return api.get('/books/book/comment', data);
}

// 排行
export function ranking(data) {
  return api.get('/books/book/ranking', data);
}

// 打赏
export function userSend(data) {
  return api.post('/books/book/userSend', data);
}
