import {SET_CAPTERBOOK, SET_CAPTERCOMIC, SET_STATUSBOOK,SET_STATUSCOMIC} from '../mutation-types';
const state = {
  capterBookList: [],
  capterComicList: [],
  bookStatus: {
	  isCollected: false,
	  isLiked: false
  },
  comicStatus: {
  	  isCollected: false,
  	  isLiked: false
  }
}

const mutations = {
  [SET_CAPTERBOOK] (state, capterBookList) {
    state.capterBookList = capterBookList || [];
  },
  [SET_CAPTERCOMIC] (state, capterComicList) {
    state.capterComicList = capterComicList || [];
  },
  [SET_STATUSBOOK] (state, bookStatus) {
    state.bookStatus.isCollected = bookStatus.isCollected;
    state.bookStatus.isLiked = bookStatus.isLiked;
  },
  [SET_STATUSCOMIC] (state, comicStatus) {
    state.comicStatus.isCollected = comicStatus.isCollected;
    state.comicStatus.isLiked = comicStatus.isLiked;
  }
};

export default {
  state,
  mutations,
};
