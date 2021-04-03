import { DARK_THEME } from '../css/themes/themeTypes';

export interface AppState {
  drawerVisible: boolean;
  theme: string
}

const state: AppState = {
  drawerVisible: false,
  theme: DARK_THEME
}

export default state;