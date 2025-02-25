<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import JobList from '@/components/jobs/JobList.vue'
import JobFilters from '@/components/jobs/JobFilters.vue'
import { jobService } from '@/services/jobService'
import type Job from '@/interfaces/Job'
import type JobQueryParams from '@/interfaces/JobQueryParams'

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

const onSearchJob = (params: JobQueryParams): void => {
  const response = jobService.filter(params)
  const filteredJobs = response?.data?.length ? response.data : []

  jobs.value = filteredJobs
}

const onClearFilters = () => {
  jobs.value = [...originalJobs]
}

onMounted(async () => {
  jobs.value = getJobList()
})
</script>
<template>
  <div class="jobs">
    <div class="d-flex justify-center text-h2 my-4">Find what's next:</div>

    <JobFilters @search-job="onSearchJob" @clear-filters="onClearFilters" />

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
