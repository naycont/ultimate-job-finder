<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import JobList from '@/components/jobs/JobList.vue'
import JobCards from '@/components/jobs/JobCards.vue'
import JobFilters from '@/components/jobs/JobFilters.vue'
import { jobService } from '@/services/jobService'
import type Job from '@/interfaces/Job'
import type JobQueryParams from '@/interfaces/JobQueryParams'

import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const jobs = ref<Job[]>([])
let originalJobs: Job[] = []

// responsiveness added: get breakpoints to switch view cards instead of list
const breakpoints = useBreakpoints(breakpointsTailwind)
const isSmallerThanLg = breakpoints.smaller('lg')

const getJobList = (): Array<Job> => {
  const response = jobService.query()

  const jobList: Array<Job> = response?.data?.length
    ? response.data.map((jobItem) => {
        const description = jobItem.description.substring(0, 120).concat('...')
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
  const { searchString, categoryId } = params

  if (searchString.trim() === '' && !Boolean(categoryId)) return

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
  <div>
    <div class="d-flex justify-center text-h2 my-4">Find what's next:</div>

    <JobFilters @search-job="onSearchJob" @clear-filters="onClearFilters" />

    <div class="d-flex justify-center flex-column align-center mt-4">
      <JobCards :items="jobs" v-if="isSmallerThanLg"/>
      <JobList :items="jobs" v-else/>
    </div>

    
  </div>
</template>
