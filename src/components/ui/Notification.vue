<script lang="ts" setup>
import { computed } from 'vue'
import { useNotificationStore } from '@/stores/notification'

const navigationStore = useNotificationStore()

const notification = computed(() => {
  return navigationStore.notification
})

const toggleNotification = () => {
  navigationStore.toggle()
}
</script>

<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="notification.opened"
      absolute
      :color="notification.type"
      location="top right"
      timeeout="4000"
    >
      {{ notification.message }}

      <template v-slot:actions>
        <v-btn icon="close" @click="toggleNotification"> </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
