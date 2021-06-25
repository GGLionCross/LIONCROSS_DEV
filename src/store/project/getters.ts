import { GetterTree } from 'vuex';
import { AppState } from '../state';
import { ProjectState } from './state';
import * as Getters from 'src/store/types/getterTypes';

const getters: GetterTree<ProjectState, AppState> = {
  [Getters.GET_DRAWER_VISIBLE](state: ProjectState): boolean {
    return state.drawerVisible
  }
};

export default getters;
