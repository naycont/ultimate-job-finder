<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { jobService } from '@/services/jobService'
import JobDetails from '@/components/jobs/JobDetails.vue'
import type Job from '@/interfaces/Job'

const route = useRoute()
const jobId = route.params?.id ? Number(route.params.id) : 0

const job = ref<Job>()

const getJobDetails = (jobId: number) => {
  const response = jobService.get(jobId)
  return response.data
}

if (jobId) {
  job.value = getJobDetails(jobId)
}
</script>

<template>
  <div>
    This is Job View
    <JobDetails :job="job" />
  </div>
</template>
