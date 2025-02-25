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
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Title</th>
          <th class="text-left">Company</th>
          <th class="text-left">Location</th>
          <th class="text-left">Description</th>
          <th class="text-left">Category</th>
          <th class="text-left">Published</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in items" :key="`job-${job.id}`">
          <td>{{ job.title }}</td>
          <td>{{ job.company }}</td>
          <td>{{ job.location }}</td>
          <td>{{ job.description }}</td>
          <td>
            <v-chip color="accent">
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
