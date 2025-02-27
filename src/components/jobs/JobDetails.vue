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
    <v-col cols="12" sm="8" md="6" lg="6" xl="4">
      <v-card :subtitle="job.company">
        <template v-slot:title>
          <div class="d-flex align-center justify-end"> <span class="text-caption font-weight-thin">{{ job.createdAt }}</span> </div>
          <span class="text-h5">{{ job.title }}</span>
        </template>
        <v-card-text>
          <v-chip color="secondary" variant="tonal">
            {{ job.category }}
          </v-chip>

          <div class="mt-4">
            <v-divider></v-divider>
            <div class="d-flex flex-column py-4">
              <span class="text-h6">Location </span>
              <span class="mt-4"> <v-icon color="grey-darken-1">location_on</v-icon> {{ job.location }} </span>
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
