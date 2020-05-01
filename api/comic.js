import * as api from './util';

// 首页漫画列表
export function getComicHome() {
  return api.get('/books/comic/homePage');
}

// 类型下漫画列表
export function getComicStyle(data) {
  return api.get('/books/comic/page', data);
}

// 漫画详情
export function getComicDetail(data) {
  return api.get('/books/comic/details', data);
}

// 漫画更多打赏
export function getSendPage(data) {
  return api.get('/books/comic/sendPage', data);
}

// 漫画更多打赏
export function getCommentPage(data) {
  return api.get('/books/comic/commentPage', data);
}

// 漫画章节打开观看
export function episodesContent(data) {
  return api.get('/books/comic/getComicPicture', data);
}

// 漫画收藏
export function closedComic(data) {
  return api.get('/books/comic/closedComic', data);
}

// 漫画点赞
export function likeComic(data) {
  return api.get('/books/comic/likeComic', data);
}

// 漫画大分类
export function comictype(data) {
  return api.get('/books/comic/comictype', data);
}

// 评论
export function comment(data) {
  return api.get('/books/comic/comment', data);
}

// 排行
export function ranking(data) {
  return api.get('/books/comic/ranking', data);
}

// 漫画打赏
export function exceptionalComic(data) {
  return api.get('/books/comic/exceptionalComic', data);
}
