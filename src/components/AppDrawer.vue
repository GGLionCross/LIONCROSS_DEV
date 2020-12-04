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
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'AppDrawer',
  setup () {
    const drawerVisible = true;

    return {
      drawerVisible
    }
  }
})
</script>
