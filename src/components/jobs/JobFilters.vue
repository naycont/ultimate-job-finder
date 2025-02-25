<script lang="ts" setup>
import { ref } from 'vue'
const searchString = ref<string>('')
</script>
<template>
  <div class="d-flex flex-wrap ga-4 justify-center align-center">
    <v-text-field
      v-model="searchString"
      variant="outlined"
      label="Search Job"
      clearable
      max-width="300px"
      bg-color="#fff"
      hide-details
      rounded
      @click:clear="$emit('clearSearchBox')"
    ></v-text-field>

    <v-btn color="primary" @click="$emit('searchJob', searchString)"> Search </v-btn>
  </div>
</template>
