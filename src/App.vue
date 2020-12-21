<template>
  <div id="q-app" :data-theme="theme">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useGetters } from 'vuex-composition-helpers';
import { GET_THEME } from 'src/store/types/getterTypes';

export default defineComponent({
  name: 'App',
  setup() {
    const getters = useGetters([GET_THEME]);
    const theme = getters[GET_THEME];
    return {
      theme
    };
  }
});
</script>
