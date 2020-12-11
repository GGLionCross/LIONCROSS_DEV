/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ActionTree } from 'vuex';
import { AppState } from './state';
import * as Actions from 'src/store/types/actionTypes';
import * as Getters from 'src/store/types/getterTypes';
import * as Mutations from 'src/store/types/mutationTypes';

const actions: ActionTree<AppState, AppState> = {
  [Actions.TOGGLE_DRAWER_VISIBLE]({ commit, getters }) {
    const value = getters[Getters.GET_DRAWER_VISIBLE];
    commit(Mutations.SET_DRAWER_VISIBLE, !value);
  }
};

export default actions;
