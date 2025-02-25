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
  <v-row justify="center">
    <v-col sm="12" md="6" lg="4">
      <v-card :subtitle="job.company">
        <template v-slot:title>
          <span class="text-h5">{{ job.title }}</span>
        </template>
        <v-card-text>
          <v-chip color="accent">
            {{ job.category }}
          </v-chip>

          <div class="mt-4">
            <v-divider></v-divider>
            <div class="d-flex flex-column py-4">
              <span class="text-h6">Location </span>
              <span class="mt-4"> <v-icon>location_on</v-icon> {{ job.location }} </span>
            </div>
            <v-divider></v-divider>
          </div>

          <div class="mt-4">
            <div class="text-h6 mb-4">About the job</div>
            {{ job.description }}
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.job-details {
  min-height: 100%;
}
</style>
