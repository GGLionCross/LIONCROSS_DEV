<template>
  <q-page class="column justify-start">
    <project-list-layout category-name="Web Development">
      <project-preview
        project-name="statboosthq"
        project-title="statboosthq.com"
        :project-tags="statboostTags"
      ></project-preview>
    </project-list-layout>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ProjectPreview from 'components/ProjectPreview.vue';
import ProjectListLayout from 'layouts/ProjectListLayout.vue';

export default defineComponent({
  name: 'ProjectPage',
  components: { ProjectPreview, ProjectListLayout },
  setup() {
    let statboostTags = ['Website Manager', 'Wix'];
    return {
      statboostTags
    };
  }
});
</script>
