<template>
  <dialog-layout v-bind="$attrs">
    
  </dialog-layout>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import DialogLayout from 'layouts/DialogLayout.vue';

export default defineComponent({
  name: 'ProjectDialog',
  components: { DialogLayout }
});
</script>

<style lang="scss" scoped>

</style>