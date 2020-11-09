import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = {
  getters: {
    count(state) {
      return state.count;
    },
  },
  state: {
    count: 0,
  },
  mutations: {
    setCount(state, count) {
      state.count = count;
    },
  },
  actions: {
    increment({ commit, state }) {
      const count = state.count + 1;
      commit('setCount', count);
    },
  },
  modules: {
  },
};

export default new Vuex.Store(store);
