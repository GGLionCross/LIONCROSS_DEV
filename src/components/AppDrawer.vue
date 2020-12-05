<template>
  <q-drawer
    v-model="drawerVisible"
    show-if-above
    bordered
    content-class="bg-grey-1"
  >
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';

export default defineComponent({
  name: 'AppDrawer',
  setup (props, { root }) {
    console.error('store:', root.$store);
    const drawerVisible = computed(function(): void {
      // return root.$store.getters;
    });

    return {
      drawerVisible
    }
  }
})
</script>
