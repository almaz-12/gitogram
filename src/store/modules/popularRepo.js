import { getPopularRepo } from '@/api/rest/getPopularRepo';
import { getReadme } from '@/api/rest/getReadme';

export default {
  namespaced: true,
  state: {
    data: [],
    readme: [],
    loading: false,
  },
  getters: {
    getRepoById: (state) => (id) => state.data.find((item) => item.id === id),
  },
  mutations: {
    SET_POPULAR_REPO(state, payload) {
      state.data = payload;
    },
    SET_POPULAR_REPO_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_README(state, { id, content }) {
      state.data = state.data.map((repo) => {
        const repoItem = repo;
        if (id === repoItem.id) {
          repoItem.readme = content;
        }
        return repoItem;
      });
    },
  },
  actions: {
    async fetchPopularRepo({ commit }) {
      commit('SET_POPULAR_REPO_LOADING', true);
      try {
        const { data } = await getPopularRepo();

        commit('SET_POPULAR_REPO', data.items);
      } catch (e) {
        console.log(e);
        throw e;
      } finally {
        commit('SET_POPULAR_REPO_LOADING', false);
      }
    },
    async fetchReadme({ commit, getters }, { id, owner, repo }) {
      const repoItem = getters.getRepoById(id);

      if (repoItem.readme !== undefined) return;

      try {
        const { data } = await getReadme({ owner, repo });

        commit('SET_README', { id, content: data });
      } catch (e) {
        console.log(e);
        if (e.status !== 404) {
          throw e;
        } else {
          commit('SET_README', { id, content: '' });
        }
      }
    },
  },
};
