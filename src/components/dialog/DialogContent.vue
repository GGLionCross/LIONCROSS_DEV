<template>
  <q-page-container>
    <q-page padding>
      <slot></slot>
    </q-page>
  </q-page-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'DialogContent',
  setup () {
    
    return {}
  }
});
</script>
