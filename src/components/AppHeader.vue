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
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useActions } from 'vuex-composition-helpers';
import { TOGGLE_DRAWER_VISIBLE } from 'src/store/types/actionTypes';

export default defineComponent({
  name: 'AppHeader',
  props: {},
  setup() {
    const title = 'lioncross.dev_';
    const actions = useActions([TOGGLE_DRAWER_VISIBLE]);
    function toggleDrawer() {
      actions[TOGGLE_DRAWER_VISIBLE]();
    }

    return {
      title,
      toggleDrawer
    };
  }
});
</script>
