<template>
  <q-page>
    <div class="column justify-start">
      <project-list-layout list-name="Web Development">
        <project-preview
          v-for="project in Object.values(WebDevelopmentProjects)"
          :key="project.name"
          :config="project"
        ></project-preview>
      </project-list-layout>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ProjectPreview from 'components/project/ProjectPreview.vue';
import ProjectListLayout from 'layouts/ProjectListLayout.vue';
import WebDevelopmentProjects from 'src/config/projects/web-development';

export default defineComponent({
  name: 'ProjectPage',
  components: { ProjectPreview, ProjectListLayout },
  setup() {
    return {
      WebDevelopmentProjects
    }
  }
});
</script>
