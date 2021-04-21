import { GetterTree } from 'vuex';
import { AppState } from '../state';
import { ExampleStateInterface } from './state';

const getters: GetterTree<ExampleStateInterface, AppState> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
