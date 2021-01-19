<template>
  <q-page class="column justify-start">
    <project-category-layout category-name="Web Development">
      <project-card
        project-name="statboosthq"
        project-title="statboosthq.com"
      ></project-card>
    </project-category-layout>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ProjectCard from 'components/ProjectCard.vue';
import ProjectCategoryLayout from 'layouts/ProjectCategoryLayout.vue';

export default defineComponent({
  name: 'PagePortfolio',
  components: { ProjectCard, ProjectCategoryLayout },
  setup() {
    return {};
  }
});
</script>
