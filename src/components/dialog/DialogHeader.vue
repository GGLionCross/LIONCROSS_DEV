<template>
  <q-header class="bg-accent text-header">
    <q-toolbar>
      <q-toolbar-title>
        {{ dialogTitle }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  name: 'DialogHeader',
  props: {
    dialogTitle: {
      type: String,
      required: true
    }
  }
});
</script>
