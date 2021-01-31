<template>
  <q-header>
    <slot></slot>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  name: 'DialogHeader'
});
</script>
