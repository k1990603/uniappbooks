import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js';
import data from './modules/data.js';

import * as actions from './action.js';
import * as getters from './getter.js';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
	modules: {
		user,
		data
	},
	actions,
	getters,
	// #ifdef H5
	plugins: [
	        createPersistedState({
	            storage: window.localStorage
	        })
	    ],
	// #endif
})

export default store