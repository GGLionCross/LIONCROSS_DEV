import Vuex from 'vuex';
import { store } from 'quasar/wrappers';
import state, { AppState } from './state';

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<AppState>({
    state,

    // Adds overhead | for dev mode only
    strict: !!process.env.DEBUGGING
  });

  return Store;
});
