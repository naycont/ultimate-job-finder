<script lang="ts" setup>
import FileUploader from '@/components/shared/FileUploader.vue'
import { defineProps, type PropType } from 'vue'
import type Job from '@/interfaces/Job'

defineProps({
  job: {
    type: Object as PropType<Job>,
    default: () => {},
    required: true
  }
})
</script>
<template>
  <v-row justify="center" class="my-4">
    <v-col sm="12" md="6" lg="4">
      <div class="d-flex flex-column">
        <span class="text-h5">{{ job.title }}</span>
        <span class="text-subtitle-2">{{ job.company }}</span>
        <span class="mt-2"> <v-icon>location_on</v-icon> {{ job.location }} </span>
      </div>
      <v-card class="mt-4 pa-4">
        <div class="d-flex flex-column">
          <span>Complete the fields below</span>
        </div>

        <v-form class="mt-4">
          <v-text-field label="Name" variant="outlined"></v-text-field>
          <v-text-field label="Lastname" variant="outlined"></v-text-field>
          <v-text-field label="Mother's lastname" variant="outlined"></v-text-field>
          <v-text-field label="Email" variant="outlined"></v-text-field>
          <FileUploader
            title="Upload a recent resume or CV"
            label="Click to upload resume"
            hint="supports .pdf, .doc, .docx"
          />

          <div class="d-flex justify-end mt-4"><v-btn color="primary">Submit</v-btn></div>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>
