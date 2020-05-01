import * as types from './mutation-types';

// 登录用户信息
export const updateUserInfo = ({commit}, data) => {
  commit (types.SET_USERINFO, data);
};

// token
export const updateToken = ({commit}, data) => {
  commit (types.SET_TOKEN, data);
  // let access_ = data
      // if (access_) {
      //   axios.defaults.headers['token'] = access_
      // }
};

// token
export const delToken = async ({commit}, data) => {
  commit (types.DEL_TOKEN, data);
  // axios.defaults.headers['token'] = ''
};

// 书所有章节
export const setCapterBook = ({commit}, data) => {
  commit (types.SET_CAPTERBOOK, data);
};

// 漫画所有章节
export const setCapterComic = ({commit}, data) => {
  commit (types.SET_CAPTERCOMIC, data);
};

// 小说状态
export const setStatusBook = ({commit}, data) => {
  commit (types.SET_STATUSBOOK, data);
};

// 漫画状态
export const setStatusComic = ({commit}, data) => {
  commit (types.SET_STATUSCOMIC, data);
};
