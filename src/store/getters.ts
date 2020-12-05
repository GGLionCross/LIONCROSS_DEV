import { GetterTree } from 'vuex';
import { AppState } from './state';
import * as getterNames from 'src/constants/store/getterNames'

const getters: GetterTree<AppState, AppState> = {
  [getterNames.DRAWER_VISIBLE](state: AppState): boolean {
    return state.drawerVisible
  }
};

export default getters;
