<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import JobList from '@/components/jobs/JobList.vue'
import { jobService } from '@/services/jobService'
import type Job from '@/interfaces/Job'

const jobs = ref<Job[]>([])

const getJobList = (): Array<Job> => {
  const response = jobService.query()

  const jobList: Array<Job> = response?.data?.length
    ? response.data.map((jobItem) => {
        const description = jobItem.description.substring(0, 60).concat('...')
        return {
          ...jobItem,
          description
        }
      })
    : []
  return jobList
}

onMounted(async () => {
  jobs.value = getJobList()
})
</script>
<template>
  <div class="job d-flex justify-center flex-column align-center">
    <div class="text-h2 my-4">Find what's next:</div>
    <JobList :items="jobs" />
  </div>
</template>

<style>
.job {
  width: 90%;
}
</style>
