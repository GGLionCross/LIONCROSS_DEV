<template>
  <q-dialog v-bind="$attrs" :data-theme="theme" v-on="$listeners">
    <q-layout class="bg-primary">
      <slot></slot>
    </q-layout>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { GET_THEME } from 'src/store/types/getterTypes';
import { useGetters } from 'vuex-composition-helpers';

export default defineComponent({
  name: 'DialogLayout',
  setup() {
    const getters = useGetters([GET_THEME]);
    const theme = getters[GET_THEME];
    return {
      theme
    };
  }
});
</script>
