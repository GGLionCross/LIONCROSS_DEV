<template>
  <q-card class="project-card">
    <q-img class="cursor-pointer" :src="config.previewSrc" :ratio="16 / 9" />
    <q-card-section class="text-accent">
      <q-item-label
        class="text-h6 text-center q-mb-sm"
        :class="titleClass"
      >
        {{ config.title }}
      </q-item-label>
      <div class="row justify-center">
        <q-chip
          v-for="(tag, index) in config.tags"
          :key="index"
          size="sm"
          outline
          square
        >
          {{ tag }}
        </q-chip>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ProjectCard',
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const hasUrl = Boolean(props.config.url);
    const titleClass = hasUrl ? 'cursor-pointer text-underline' : '';
    return {
      titleClass
    };
  }
});
</script>

<style scoped>
.project-card {
  width: 250px;
}
</style>
