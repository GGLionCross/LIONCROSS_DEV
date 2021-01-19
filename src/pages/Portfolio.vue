<template>
  <q-page class="column justify-start">
    <category-layout category-name="Web Development"></category-layout>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CategoryLayout from 'layouts/CategoryLayout.vue';

export default defineComponent({
  name: 'PagePortfolio',
  components: { CategoryLayout },
  setup() {
    return {};
  }
});
</script>
