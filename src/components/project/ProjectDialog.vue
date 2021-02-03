<template>
  <dialog-layout v-bind="$attrs" v-on="$listeners">
    <dialog-header :dialog-title="projectTitle"></dialog-header>
    <dialog-content></dialog-content>
  </dialog-layout>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
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
    }
  },
  setup(props, context) {
    console.error('context:', context);
    function handleEmit(value) {
      console.error('value: ', value);
    }
    return {
      handleEmit
    }
  }
});
</script>
