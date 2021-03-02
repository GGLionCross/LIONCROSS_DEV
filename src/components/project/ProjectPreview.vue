<template>
  <q-card class="project-preview">
    <q-img :src="config.previewSrc" :ratio="16 / 9" @click="showDialog" />
    <q-card-section :class="titleSectionClass" @click="showDialog">
      <q-item-label
        class="text-h6 text-center q-mb-sm"
        :class="titleClass"
        @click="goToUrl"
      >
        {{ config.title }}
      </q-item-label>
      <div class="row justify-center">
        <q-chip
          v-for="(tag, index) in config.tags"
          :key="index"
          color="accent"
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
      v-model="displayDialog"
      :project-title="config.title"
      :project-highlights="config.highlightSrcs"
      :project-responsibilities="config.responsibilities"
    ></component>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api';

export default defineComponent({
  name: 'ProjectPreview',
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const hasUrl = Boolean(props.config.url);
    const titleSectionClass: string[] = [
      'title-section',
      'cursor-pointer',
      'bg-white',
      'text-accent',
      'absolute-full',
      'column',
      'justify-center'
    ];
    const titleClass = hasUrl ? 'cursor-pointer text-underline' : '';
    function goToUrl() {
      if (hasUrl) {
        window.open(props.config.url, '_blank');
      }
    }
    const display = reactive({
      displayTitle: false,
      displayDialog: false
    });
    function showDialog() {
      display.displayDialog = true;
    }
    return {
      titleSectionClass,
      titleClass,
      goToUrl,
      showDialog,
      ...toRefs(display)
    };
  }
});
</script>

<style lang="scss" scoped>
.project-preview {
  width: 250px;
  .title-section {
    opacity: 0;
    transition: 0.3s;
  }
  .title-section:hover {
    opacity: 0.85;
  }
}
</style>
