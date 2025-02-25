<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import type JobCategory from '@/interfaces/JobCategory'
import { jobCategoryService } from '@/services/jobCategoryService'

const emit = defineEmits(['searchJob', 'clearFilters'])

const searchString = ref<string>('')
const categoryId = ref<number | null>(null)
const categories = ref<JobCategory[]>([])

const getCategories = () => {
  const response = jobCategoryService.query()
  categories.value = response?.data?.length ? response.data : []
}

const clearFilters = () => {
  searchString.value = ''
  categoryId.value = null
  emit('clearFilters')
}

getCategories()
</script>
<template>
  <div class="d-flex flex-wrap ga-4 justify-center align-center">
    <v-text-field
      v-model="searchString"
      variant="outlined"
      label="Search Job title"
      max-width="300px"
      bg-color="#fff"
      hide-details
      rounded
    ></v-text-field>

    <v-select
      v-model="categoryId"
      max-width="250px"
      :items="categories"
      label="Categories"
      item-title="name"
      item-value="id"
      bg-color="#fff"
      variant="outlined"
      hide-details
      rounded
    ></v-select>

    <v-btn color="primary" @click="$emit('searchJob', { searchString, categoryId })">
      Search
    </v-btn>

    <v-btn variant="text" @click="clearFilters"> Clear filters </v-btn>
  </div>
</template>
