<template>
  <div>
    <div class="list-name-container q-px-lg q-py-md">
      {{ listName }}
    </div>
    <div class="q-px-lg q-py-md">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ProjectListLayout',
  props: {
    listName: {
      type: String,
      required: true
    },
  }
});
</script>

<style lang="scss">
.list-name-container {
  border-bottom: 2px solid white;
  font-size: 2em;
}
</style>
