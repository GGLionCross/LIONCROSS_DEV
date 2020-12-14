<template>
  <div
    id="q-app"
    :data-theme="theme"
    :class="contentClass"
  >
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
    const contentClass = [
      `bg-content-${<string>theme.value}`,
      `text-content-${<string>theme.value}`
    ];
    return {
      theme,
      contentClass
    };
  }
});
</script>

<style lang="scss">
[data-theme='dark'] {
  --q-color-primary: #3700B3;
}
</style>
