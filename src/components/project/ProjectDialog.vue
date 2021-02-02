<template>
  <dialog-layout v-bind="$attrs">
    <dialog-header :dialog-title="projectTitle"></dialog-header>
  </dialog-layout>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import DialogLayout from 'layouts/DialogLayout.vue';
import DialogHeader from 'components/dialog/DialogHeader.vue';

export default defineComponent({
  name: 'ProjectDialog',
  components: { DialogLayout, DialogHeader },
  props: {
    projectTitle: {
      type: String,
      required: true
    }
  }
});
</script>
