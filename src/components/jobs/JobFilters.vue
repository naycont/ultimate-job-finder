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

const emitJobSearch = () => {
  emit('searchJob', { 
    searchString: searchString.value,
    categoryId: categoryId.value 
  })
}

const onSearchJob = (event: SubmitEvent) => {
  event.preventDefault()
  emitJobSearch()
}

getCategories()
</script>
<template>
  <v-form>
    <v-row justify="center" class="align-center mt-2">
      <v-col cols="12" sm="12" md="6" lg="3">
        <v-text-field
          v-model="searchString"
          variant="outlined"
          label="Search Job title"
          bg-color="#fff"
          hide-details
          rounded
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="12" md="6" lg="3">
        <v-select
          v-model="categoryId"
          :items="categories"
          label="Categories"
          item-title="name"
          item-value="id"
          bg-color="#fff"
          variant="outlined"
          hide-details
          rounded
          @update:model-value="emitJobSearch"
          clearable
        ></v-select>
      </v-col>

      <v-col cols="12" sm="12" md="12" lg="6" class="d-flex justify-end">
        <v-btn type="submit" color="primary" @click="onSearchJob">
          Search
        </v-btn>
        <v-btn variant="text" @click="clearFilters"> Clear filters </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
