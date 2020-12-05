<template>
  <q-header elevated>
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

export default defineComponent({
  name: 'AppHeader',
  props: {},
  setup(props, { root }) {
    const title = 'lioncross.dev_';

    function toggleDrawer(): void {
      // return root.$store.getters('DRAWER_VISIBLE');
    }

    return {
      title,
      toggleDrawer
    };
  }
});
</script>
