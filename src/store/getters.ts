import { GetterTree } from 'vuex';
import { AppState } from './state';

const getters: GetterTree<AppState, AppState> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
