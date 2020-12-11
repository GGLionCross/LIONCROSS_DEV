import Vuex from 'vuex';
import { store } from 'quasar/wrappers';
import state, { AppState } from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<AppState>({
    state,
    getters,
    actions,
    mutations,

    // Adds overhead | for dev mode only
    strict: !!process.env.DEBUGGING
  });

  return Store;
});
