<template>
  <q-card class="project-card">
    <q-img
      class="cursor-pointer"
      :src="config.previewSrc"
      :ratio="16 / 9"
      @click="openDialog"
    />
    <q-card-section class="text-accent">
      <q-item-label
        class="text-h6 text-center q-mb-sm"
        :class="titleClass"
        @click="goToUrl()"
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
    <component
      :is="config.dialogComponent"
      v-model="dialogOpen"
      :project-title="config.title"
    ></component>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

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
    function goToUrl() {
      if (hasUrl) {
        window.open(props.config.url, '_blank');
      }
    }
    const dialogOpen = ref(false);
    function openDialog() {
      dialogOpen.value = true;
    }
    return {
      titleClass,
      goToUrl,
      dialogOpen,
      openDialog
    };
  }
});
</script>

<style scoped>
.project-card {
  width: 250px;
}
</style>
