<template>
  <q-drawer
    :value="visible"
    show-if-above
    content-class="bg-secondary"
  >
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useGetters } from 'vuex-composition-helpers';
import { GET_DRAWER_VISIBLE } from 'src/store/types/getterTypes';

export default defineComponent({
  name: 'AppDrawer',
  setup () {
    const getters = useGetters([GET_DRAWER_VISIBLE]);
    const visible = getters[GET_DRAWER_VISIBLE];
    return {
      visible
    }
  }
})
</script>
