<template>
  <q-drawer v-bind="allAttrs" v-on="listeners">
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup (_, { attrs, listeners}) {
    let allAttrs = {
      contentClass: "bg-secondary",
      ...attrs
    }
    
    return {
      allAttrs,
      listeners
    }
  }
});
</script>