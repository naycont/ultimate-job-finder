<script lang="ts" setup>
const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    categoryId: 3,
    category: 'Frontend',
    company: 'TechCorp',
    description: "We're looking for a Vue.js developer...",
    location: 'Remote',
    createdAt: '02-21-2025'
  },
  {
    id: 2,
    title: 'Backend Developer',
    categoryId: 2,
    category: 'Backend',
    company: 'DevFirm',
    description: 'Looking for a Node.js expert...',
    location: 'New York',
    createdAt: '02-20-2025'
  },
  {
    id: 2,
    title: 'UI/Graphic Designer',
    categoryId: 1,
    category: 'UX/UI',
    company: 'DevFirm',
    description: 'We are looking for a UI/Marketing Designer...',
    location: 'On site',
    createdAt: '02-20-2025'
  }
]
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
        <tr v-for="job in jobs" :key="`job-${job.id}`">
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
