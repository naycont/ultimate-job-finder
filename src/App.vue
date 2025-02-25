<script setup lang="ts">
import { RouterView } from 'vue-router'
import Notification from '@/components/ui/Notification.vue'
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="h-100">
        <Notification />
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
