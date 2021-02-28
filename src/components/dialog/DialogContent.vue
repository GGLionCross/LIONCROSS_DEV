<template>
  <q-page-container data-component="dialog-content">
    <q-page class="column">
      <q-scroll-area class="column col">
        <slot></slot>
      </q-scroll-area>
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

<style lang="scss">
@media (min-width: 0) {
  [data-component="dialog-content"] {
    .column > .scroll {
      height: auto;
      min-height: 0;
      max-height: 100%;
      flex: 10000 1 0;
    }
  }
}
</style>
