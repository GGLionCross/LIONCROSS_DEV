import { GetterTree } from 'vuex';
import { AppState } from './state';
import * as Getters from 'src/store/types/getterTypes';

const getters: GetterTree<AppState, AppState> = {
  [Getters.GET_DRAWER_VISIBLE](state: AppState): boolean {
    return state.drawerVisible
  }
};

export default getters;
