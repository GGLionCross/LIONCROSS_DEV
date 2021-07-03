import { ActionTree } from 'vuex';
import { AppState } from '../state';
import { ProjectState } from './state';

const actions: ActionTree<ProjectState, AppState> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
