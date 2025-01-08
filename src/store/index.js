import { createStore } from 'vuex';
import popularRepo from './modules/popularRepo';

export default createStore({
  modules: {
    popularRepo,
  },
});
