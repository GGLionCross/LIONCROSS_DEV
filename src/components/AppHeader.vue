<template>
  <q-header bordered>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleDrawer"
      />
      <q-toolbar-title>
        {{ title }}
      </q-toolbar-title>
      <q-toggle
        :value="theme"
        :false-value="LIGHT_THEME"
        :true-value="DARK_THEME"
        @input="toggleTheme"
      ></q-toggle>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useActions, useGetters } from 'vuex-composition-helpers';
import { SWITCH_THEME, TOGGLE_DRAWER_VISIBLE } from 'src/store/types/actionTypes';
import { GET_THEME } from 'src/store/types/getterTypes';
import { LIGHT_THEME, DARK_THEME } from 'src/css/themes/themeTypes';

export default defineComponent({
  name: 'AppHeader',
  props: {},
  setup() {
    const actions = useActions([SWITCH_THEME, TOGGLE_DRAWER_VISIBLE]);
    const getters = useGetters([GET_THEME]);

    const title = 'lioncross.dev_';
    const theme = getters[GET_THEME];

    function toggleDrawer() {
      actions[TOGGLE_DRAWER_VISIBLE]();
    }
    function toggleTheme() {
      const newTheme = theme.value === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
      actions[SWITCH_THEME](newTheme);
    }

    return {
      LIGHT_THEME,
      DARK_THEME,
      title,
      theme,
      toggleDrawer,
      toggleTheme
    };
  }
});
</script>
