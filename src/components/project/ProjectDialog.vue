<template>
  <dialog-layout v-bind="$attrs" @hide="handleDialogHide" v-on="$listeners">
    <dialog-header :dialog-title="projectTitle"></dialog-header>
    <dialog-content>
      <q-carousel
        v-if="projectHighlights.length"
        v-model="highlightChoice"
        animated
        arrows
        transition-next="slide-left"
        transition-prev="slide-right"
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
      <q-card v-if="projectResponsibilities.length" class="q-ma-md">
        <q-list bordered padding>
          <q-item-label
            class="text-accent text-uppercase text-bold text-underline"
            header
          >
            Responsibilities
          </q-item-label>
          <q-item
            v-for="(resp, index) in projectResponsibilities"
            :key="index"
            dense
          >
            <q-item-section class="text-accent">{{ resp }}</q-item-section>
          </q-item>
        </q-list>
      </q-card>
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
    },
    projectResponsibilities: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const highlightChoice = ref(0);
    function handleDialogHide() {
      highlightChoice.value = 0;
    }
    return {
      highlightChoice,
      handleDialogHide
    };
  }
});
</script>
