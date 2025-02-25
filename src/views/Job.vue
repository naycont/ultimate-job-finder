<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { jobService } from '@/services/jobService'
import JobDetails from '@/components/jobs/JobDetails.vue'
import type Job from '@/interfaces/Job'

const router = useRouter()
const jobModel = {
  id: 0,
  title: '',
  categoryId: 0,
  category: '',
  company: '',
  description: '',
  location: '',
  createdAt: ''
} as Job

const job = ref<Job>(jobModel)

const getJobDetails = (jobId: number): Job | null => {
  const response = jobService.get(jobId)
  if (response?.data) return response.data
  else return null
}

const goToJobs = () => {
  router.push({ name: 'jobs' })
}

onMounted(async () => {
  const route = useRoute()
  const jobId = route.params?.id ? Number(route.params.id) : 0
  const jobDetails = getJobDetails(jobId)
  if (jobDetails?.id) {
    job.value = jobDetails
  }
})
</script>

<template>
  <div class="job">
    <div>
      <v-btn density="comfortable" flat icon="arrow_back" @click="goToJobs"></v-btn>
      Back
    </div>

    <div class="d-flex justify-end mb-4">
      <v-btn color="primary">Apply</v-btn>
    </div>

    <div class="job d-flex justify-center flex-column align-center">
      <JobDetails :job="job" v-if="job.id" />
    </div>
  </div>
</template>

<style>
.job {
  width: 60%;
  margin: auto;
}
</style>
