import { getUser } from '@/api/rest/user';

export default {
  namespaced: true,
  state: {
    data: {},
    loading: false,
  },
  getters: {
    hasUser: (state) => () => Object.keys(state.data).length,
  },
  mutations: {
    SET_USER(state, payload) {
      state.data = payload;
    },
    SET_USER_LOADING(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      commit('SET_USER_LOADING', true);
      try {
        const { data } = await getUser();

        commit('SET_USER', data);
      } catch (e) {
        console.error(e);
        throw e;
      } finally {
        commit('SET_USER_LOADING', false);
      }
    },
  },
};
