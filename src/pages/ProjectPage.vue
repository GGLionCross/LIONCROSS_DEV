<template>
  <q-page class="column justify-start">
    <project-list-layout category-name="Web Development">
      <project-card
        project-name="statboosthq"
        project-title="statboosthq.com"
        :project-tags="statboostTags"
      ></project-card>
    </project-list-layout>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ProjectCard from 'components/ProjectCard.vue';
import ProjectListLayout from 'layouts/ProjectListLayout.vue';

export default defineComponent({
  name: 'ProjectPage',
  components: { ProjectCard, ProjectListLayout },
  setup() {
    let statboostTags = ['Website Manager', 'Wix'];
    return {
      statboostTags
    };
  }
});
</script>
