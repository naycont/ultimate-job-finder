<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import JobList from '@/components/jobs/JobList.vue'
import JobFilters from '@/components/jobs/JobFilters.vue'
import { jobService } from '@/services/jobService'
import type Job from '@/interfaces/Job'

const jobs = ref<Job[]>([])
let originalJobs: Job[] = []

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

  originalJobs = [...jobList]

  return jobList
}

const onSearchJob = (searchString: string): void => {
  if (searchString.trim() === '') return

  const response = jobService.filter({ searchString })
  const filteredJobs = response?.data?.length ? response.data : []

  jobs.value = filteredJobs
}

const onClearSearchBox = () => {
  jobs.value = [...originalJobs]
}

onMounted(async () => {
  jobs.value = getJobList()
})
</script>
<template>
  <div class="jobs">
    <div class="d-flex justify-center text-h2 my-4">Find what's next:</div>

    <JobFilters @search-job="onSearchJob" @clearSearchBox="onClearSearchBox" />

    <div class="d-flex justify-center flex-column align-center mt-4">
      <JobList :items="jobs" />
    </div>
  </div>
</template>

<style>
.jobs {
  width: 90%;
  margin: auto;
}
</style>
