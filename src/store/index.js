import { createStore } from 'vuex';
import popularRepo from './modules/popularRepo';
import user from './modules/user';

export default createStore({
  modules: {
    popularRepo,
    user,
  },
});
