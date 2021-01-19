<template>
  <div>
    <div class="category-name-container q-px-lg q-py-md">
      {{ categoryName }}
    </div>
    <div class="q-px-lg q-py-md">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ProjectCard from 'src/components/ProjectCard.vue';

export default defineComponent({
  name: 'ProjectCategoryLayout',
  components: { ProjectCard },
  props: {
    categoryName: {
      type: String,
      required: true
    },
  }
});
</script>

<style lang="scss">
.category-name-container {
  border-bottom: 2px solid white;
  font-size: 2em;
}
</style>
