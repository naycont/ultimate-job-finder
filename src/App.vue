<script setup lang="ts">
import { RouterView } from 'vue-router'
import Notification from '@/components/ui/Notification.vue'
import TheHeading from '@/components/TheHeading.vue'
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="h-100">
        <Notification />
        <TheHeading/>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
