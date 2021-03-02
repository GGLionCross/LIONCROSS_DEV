<template>
  <project-dialog v-bind="$attrs" v-on="$listeners"></project-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ProjectDialog from 'components/project/ProjectDialog.vue';

export default defineComponent({
  name: 'StatboostDialog',
  components: { ProjectDialog }
});
</script>
