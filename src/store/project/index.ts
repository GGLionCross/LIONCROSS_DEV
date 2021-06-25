import Vuex from 'vuex';
import { store } from 'quasar/wrappers';
import state, { ProjectState } from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
 
export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<ProjectState>({
    state,
    getters,
    actions,
    mutations,

    // Adds overhead | for dev mode only
    strict: !!process.env.DEBUGGING
  });

  return Store;
});
