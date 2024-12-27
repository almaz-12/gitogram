import { createStore } from 'vuex';
import { getPopularRepo } from '@/api/rest/getPopularRepo';

export default createStore({
  state: {
    popularRepo: {
      data: [],
      loading: false,
    },
  },
  getters: {

  },
  mutations: {
    SET_POPULAR_REPO(state, payload) {
      state.popularRepo.data = payload;
    },
    SET_POPULAR_REPO_LOADING(state, payload) {
      state.popularRepo.loading = payload;
    },
  },
  actions: {
    async fetchPopularRepo({ commit }) {
      commit('SET_POPULAR_REPO_LOADING', true);
      try {
        const { data } = await getPopularRepo();

        commit('SET_POPULAR_REPO', data.items);
      } catch (error) {
        console.log(error);
      } finally {
        commit('SET_POPULAR_REPO_LOADING', false);
      }
    },
  },
});
