<template>
  <q-card class="project-card">
    <q-img :src="thumbnailSrc" :ratio="16/9" />
    <q-card-section class="text-accent">
      <q-item-label class="project-title text-h6">
        {{ projectTitle }}
      </q-item-label>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ProjectCard',
  props: {
    projectName: {
      type: String,
      required: true
    },
    projectTitle: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const thumbnailSrc = computed(() => {
      return `/portfolio/${props.projectName}/thumbnail.png`
    });
    return { thumbnailSrc };
  }
});
</script>

<style scoped>
.project-card {
  width: 250px;
}
.project-title {
  text-decoration: underline;
}
</style>
