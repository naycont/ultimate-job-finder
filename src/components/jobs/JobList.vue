<script lang="ts" setup>
import type Job from '@/interfaces/Job'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  items: {
    type: Array as PropType<Array<Job>>,
    default: () => []
  }
})

const goToDetails = (jobId: number) => {
  router.push({ name: 'job', params: { id: jobId } })
}
</script>
<template>
  <div class="w-100">
    <v-table data-testid="jobList">
      <thead data-testid="jobList__headers">
        <tr>
          <th data-testid="jobList__headers--title" class="text-left">Title</th>
          <th data-testid="jobList__headers--company" class="text-left">Company</th>
          <th data-testid="jobList__headers--location" class="text-left">Location</th>
          <th data-testid="jobList__headers--description" class="text-left">Description</th>
          <th data-testid="jobList__headers--category" class="text-left">Category</th>
          <th data-testid="jobList__headers--published" class="text-left">Published</th>
          <th data-testid="jobList__headers--actions" class="text-left"></th>
        </tr>
      </thead>
      <tbody data-testid="jobList__items">
        <tr :data-testid="`jobList__items--${job.id}`" v-for="job in items" :key="`job-${job.id}`">
          <td :data-testid="`jobList__items--${job.id}-title`">{{ job.title }}</td>
          <td>{{ job.company }}</td>
          <td>{{ job.location }}</td>
          <td>{{ job.description }}</td>
          <td>
            <v-chip color="secondary" variant="tonal">
              {{ job.category }}
            </v-chip>
          </td>
          <td>{{ job.createdAt }}</td>
          <td>
            <v-btn flat size="small" color="primary" @click="goToDetails(job.id)"> Details </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
