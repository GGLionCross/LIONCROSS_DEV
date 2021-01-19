<template>
  <div>
    <div class="category-name-container">
      {{ categoryName }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'CategoryLayout',
  props: {
    categoryName: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss">
.category-name-container {
  border-bottom: 2px solid white;
  font-size: 2em;
  padding: 16px 32px;
}
</style>