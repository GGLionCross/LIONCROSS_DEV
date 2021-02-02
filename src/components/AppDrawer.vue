<template>
  <q-drawer
    :value="visible"
    show-if-above
    content-class="bg-secondary"
    @input="setDrawerVisible"
  >
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useGetters, useMutations } from 'vuex-composition-helpers';
import { GET_DRAWER_VISIBLE } from 'src/store/types/getterTypes';
import { SET_DRAWER_VISIBLE } from 'src/store/types/mutationTypes';

export default defineComponent({
  name: 'AppDrawer',
  setup () {
    const getters = useGetters([GET_DRAWER_VISIBLE]);
    const visible = getters[GET_DRAWER_VISIBLE];

    const mutations = useMutations([SET_DRAWER_VISIBLE]);
    function setDrawerVisible(value: boolean) {
      mutations[SET_DRAWER_VISIBLE](value);
    }
    return {
      visible,
      setDrawerVisible
    }
  }
})
</script>
