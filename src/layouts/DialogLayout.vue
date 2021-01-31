<template>
  <q-dialog v-bind="$attrs">
    <q-layout>
      <slot></slot>
    </q-layout>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'DialogLayout'
});
</script>
