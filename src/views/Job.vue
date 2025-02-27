<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { jobService } from '@/services/jobService'
import JobDetails from '@/components/jobs/JobDetails.vue'
import JobApplication from '@/components/jobs/JobApplication.vue'
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

const activeTab = ref<string>('job')

const apply = () => {
  activeTab.value = 'application'
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
      <v-btn class="mr-1" density="comfortable" flat icon="arrow_back" @click="goToJobs"></v-btn>
      Back
    </div>
    <v-container class="mt-0 pa-0">
      <v-tabs v-model="activeTab" align-tabs="center" class="mt-0" color="secondary">
        <v-tab value="job">Job Details</v-tab>
        <v-tab value="application">Application</v-tab>
      </v-tabs>
      <v-tabs-window v-model="activeTab">
        <v-tabs-window-item value="job">
          <div class="d-flex justify-end mb-4">
            <v-btn color="primary" @click="apply">Apply</v-btn>
          </div>
          <JobDetails :job="job" v-if="job.id" />
        </v-tabs-window-item>

        <v-tabs-window-item value="application">
          <JobApplication :job="job" />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-container>
  </div>
</template>

<style lang="scss">
.job {
  min-height: 100%;
  padding: 0 var(--ui-padding);
}
</style>
