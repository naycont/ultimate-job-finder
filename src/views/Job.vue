<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { jobService } from '@/services/jobService'
import JobDetails from '@/components/jobs/JobDetails.vue'
import type Job from '@/interfaces/Job'

const route = useRoute()
const router = useRouter()
const jobId = route.params?.id ? Number(route.params.id) : 0

const job = ref<Job>()

const getJobDetails = (jobId: number) => {
  const response = jobService.get(jobId)
  return response.data
}

const goToJobs = () => {
  router.push({ name: 'jobs' })
}

if (jobId) {
  job.value = getJobDetails(jobId)
}
</script>

<template>
  <div class="job">
    <div>
      <v-btn flat icon="arrow_back" @click="goToJobs"></v-btn>
      Back
    </div>

    <div class="d-flex justify-end mb-4">
      <v-btn color="primary">Apply</v-btn>
    </div>

    <div class="job d-flex justify-center flex-column align-center">
      <JobDetails :job="job" />
    </div>
  </div>
</template>

<style>
.job {
  width: 60%;
  margin: auto;
}
</style>
