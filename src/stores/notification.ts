import { defineStore } from 'pinia'
import { ref } from 'vue'
import type Notification from '@/interfaces/Notification'

export const useNotificationStore = defineStore('notification', () => {
  const notification = ref<Notification>({
    opened: false,
    type: '',
    message: ''
  })

  const toggle = (configuration: Notification) => {
    const currentNotification = notification.value
    notification.value = {
      opened: !currentNotification.opened,
      type: configuration.type,
      message: configuration.message
    }
  }

  return { notification, toggle }
})
