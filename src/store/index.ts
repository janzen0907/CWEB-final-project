import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import router from '@/router';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    // values for user and isAuthenticated
    user: null,
    isAuthenticated: false,
  },
  getters: {
    // getter for the state
    user: (state) => state.user,
    isAuthenticated: (state) => state.isAuthenticated,
  },
  mutations: {
    // set the state
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    // set the user
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    signIn({ commit }, user) {
      commit('setUser', user);
    },
    signOut({ commit }) {
      commit('setUser', null);
    },
  },
  // plug-in for persistant state storage
  plugins: [vuexLocal.plugin],
  modules: {},
});

