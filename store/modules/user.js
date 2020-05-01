import {SET_USERINFO, SET_TOKEN, DEL_TOKEN} from '../mutation-types';
const state = {
  token: null,
  userInfo: null,
}

const mutations = {
  [SET_USERINFO] (state, userInfo) {
    state.userInfo = userInfo;
  },
  [SET_TOKEN] (state, token) {
    state.token = token;
  },
  [DEL_TOKEN] (state) {
    state.token = null;
  }
};

export default {
  state,
  mutations,
};
