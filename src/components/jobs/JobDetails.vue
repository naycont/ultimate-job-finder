<script lang="ts" setup>
import type Job from '@/interfaces/Job'
import type { PropType } from 'vue'

defineProps({
  job: {
    type: Object as PropType<Job>,
    required: true
  }
})
</script>
<template>
  <div>
    <v-card flat :title="job.title" :subtitle="job.company">
      <v-card-text>
        <div>
          {{ job.description }}
        </div>

        <v-chip color="accent">
          {{ job.category }}
        </v-chip>
      </v-card-text>
    </v-card>
  </div>
</template>
