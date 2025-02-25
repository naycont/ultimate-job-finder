<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Upload File'
  },
  label: {
    type: String,
    default: 'Click to upload file'
  },
  hint: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div>
    <span>{{ title }}</span>
    <div class="file-uploader d-flex justify-center align-center flex-column mt-2 pa-8">
      <v-file-input
        class=""
        min-width="80%"
        :label="label"
        variant="solo-filled"
        flat
        hide-details
      ></v-file-input>
      <span class="text-caption font-weight-thin">{{ hint }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.file-uploader {
  border: 1px dashed gray;
  border-radius: 4px;
}
</style>
