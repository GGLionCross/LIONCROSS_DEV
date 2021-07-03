import { Module } from 'vuex';
import { AppState } from '../state';
import state, { ProjectState } from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
 
const projectModule: Module<ProjectState, AppState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default projectModule;