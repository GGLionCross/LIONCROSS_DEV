<template>
  <dialog-layout v-bind="$attrs" v-on="$listeners">
    <dialog-header :dialog-title="projectTitle"></dialog-header>
    <dialog-content>
      <q-carousel
        v-if="projectHighlights.length"
        v-model="highlightChoice"
        animated
        arrows
        infinite
        navigation
        control-color="accent"
        control-type="push"
      >
        <q-carousel-slide
          v-for="(highlight, index) in projectHighlights"
          :key="highlight"
          :name="index"
          :img-src="highlight"
        ></q-carousel-slide>
      </q-carousel>
      <slot></slot>
    </dialog-content>
  </dialog-layout>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';
import DialogLayout from 'layouts/DialogLayout.vue';
import DialogHeader from 'components/dialog/DialogHeader.vue';
import DialogContent from 'components/dialog/DialogContent.vue';

export default defineComponent({
  name: 'ProjectDialog',
  components: { DialogLayout, DialogHeader, DialogContent },
  props: {
    projectTitle: {
      type: String,
      required: true
    },
    projectHighlights: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const highlightChoice = ref(0);
    function handleEmit(value) {
      console.error('value: ', value);
    }
    return {
      highlightChoice,
      handleEmit
    };
  }
});
</script>
