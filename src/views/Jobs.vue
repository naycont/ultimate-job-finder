<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import JobList from '@/components/jobs/JobList.vue'
import { jobService } from '@/services/jobService'
import type Job from '@/interfaces/Job'

const jobs = ref<Job[]>([])

const getJobList = (): Array<Job> => {
  const response = jobService.query()
  return response.data
}

onMounted(async () => {
  jobs.value = getJobList()
})
</script>
<template>
  <div class="d-flex justify-center flex-column align-center">
    <JobList :items="jobs" />
  </div>
</template>
