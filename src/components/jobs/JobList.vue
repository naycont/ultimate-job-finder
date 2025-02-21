<script lang="ts" setup>
import type Job from '@/interfaces/Job'
import type { PropType } from 'vue'

defineProps({
  items: {
    type: Array as PropType<Array<Job>>,
    default: () => []
  }
})
</script>
<template>
  <div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Title</th>
          <th class="text-left">Company</th>
          <th class="text-left">Location</th>
          <th class="text-left">Description</th>
          <th class="text-left">Category</th>
          <th class="text-left">Created At</th>
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
            <v-btn flat size="small" color="primary"> Details </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
