<template>
  <q-header class="bg-accent text-header">
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
        {{ title }}<span class="blinking-cursor">_</span>
      </q-toolbar-title>
      <q-toggle
        :value="theme"
        :false-value="LIGHT_THEME"
        :true-value="DARK_THEME"
        color="info"
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

    const title = 'lioncross.dev';
    const theme = getters[GET_THEME];

    function toggleTheme() {
      const newTheme = theme.value === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
      actions[SWITCH_THEME](newTheme);
    }
    function toggleDrawer() {
      actions[TOGGLE_DRAWER_VISIBLE]();
    }

    return {
      LIGHT_THEME,
      DARK_THEME,
      title,
      theme,
      toggleTheme,
      toggleDrawer
    };
  }
});
</script>

<style scoped>
.blinking-cursor {
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from, to {
    opacity: 0
  }
  50% {
    opacity: 1
  }
}
@-moz-keyframes blink {
  from, to {
    opacity: 0
  }
  50% {
    opacity: 1
  }
}
@-webkit-keyframes blink {
  from, to {
    opacity: 0
  }
  50% {
    opacity: 1
  }
}
@-ms-keyframes blink {
  from, to {
    opacity: 0
  }
  50% {
    opacity: 1
  }
}
@-o-keyframes blink {
  from, to {
    opacity: 0
  }
  50% {
    opacity: 1
  }
}
</style>
