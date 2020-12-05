import { Module } from 'vuex';
import { AppState } from '../state';
import state, { ExampleStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const exampleModule: Module<ExampleStateInterface, AppState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default exampleModule;
