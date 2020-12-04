<template>
  <q-layout view="lHh Lpr lFf">
    <app-header></app-header>

    <app-drawer></app-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import AppHeader from 'components/AppHeader.vue';
import AppDrawer from 'components/AppDrawer.vue';

export default defineComponent({
  name: 'MainLayout',
  components: { AppHeader, AppDrawer },
  setup() {

    return {}
  }
});
</script>
