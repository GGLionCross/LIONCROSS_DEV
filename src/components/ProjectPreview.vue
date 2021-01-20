<template>
  <q-card class="project-card">
    <q-img class="cursor-pointer" :src="thumbnailSrc" :ratio="16/9" />
    <q-card-section class="text-accent">
      <q-item-label class="project-title text-h6 text-center cursor-pointer q-mb-sm">
        {{ projectTitle }}
      </q-item-label>
      <div class="row justify-center">
        <q-chip v-for="(tag, index) in projectTags" :key="index" size="sm" outline square>
          {{ tag }}
        </q-chip>
      </div>
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
    },
    projectTags: {
      type: Array,
      default: () => []
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
