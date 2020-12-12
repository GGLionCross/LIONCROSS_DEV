import { MutationTree } from 'vuex';
import { AppState } from './state';
import * as Mutations from 'src/store/types/mutationTypes';

const mutation: MutationTree<AppState> = {
  [Mutations.SET_DRAWER_VISIBLE](state: AppState, value: boolean): void {
    state.drawerVisible = value;
  },
  [Mutations.SET_THEME](state: AppState, value: string): void {
    state.theme = value;
  }
};

export default mutation;
