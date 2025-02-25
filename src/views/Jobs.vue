<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import JobList from '@/components/jobs/JobList.vue'
import { jobService } from '@/services/jobService'
import type Job from '@/interfaces/Job'

const jobs = ref<Job[]>([])
const searchBox = ref<string>('')

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
  <div class="jobs">
    <div class="d-flex justify-center text-h2 my-4">Find what's next:</div>

    <div class="d-flex flex-wrap ga-4 justify-center align-center my-4">
      <v-text-field
        v-model="searchBox"
        variant="outlined"
        label="Search Job"
        clearable
        max-width="300px"
        bg-color="#fff"
        hide-details
        rounded
      ></v-text-field>

      <v-btn color="primary"> Search </v-btn>
    </div>

    <div class="d-flex justify-center flex-column align-center mt-2">
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
