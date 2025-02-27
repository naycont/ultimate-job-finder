<script lang="ts" setup>
import FileUploader from '@/components/shared/FileUploader.vue'
import { defineProps, type PropType, ref } from 'vue'
import type Job from '@/interfaces/Job'
import type JobApplication from '@/interfaces/JobApplication'
import { formValidationRules } from '@/utils/JobUtils'
import { VForm } from 'vuetify/components'
import { applicationService } from '@/services/applicationService'
import { useNotificationStore } from '@/stores/notification'
import { useRouter } from 'vue-router'

const navigationStore = useNotificationStore()
const router = useRouter()

const props = defineProps({
  job: {
    type: Object as PropType<Job>,
    default: () => {},
    required: true
  }
})

const jobApplicationForm = ref<InstanceType<typeof VForm> | null>(null)

const jobApplication = ref<JobApplication>({
  jobId: props.job.id,
  name: '',
  lastname: '',
  mothersLastname: '',
  email: '',
  location: '',
  resumeUrl: ''
})

const isLoading = ref<boolean>(false)

const submitAplication = async (event: SubmitEvent) => {
  event.preventDefault()
  //TODO:
  // implement file uploader logic, to get file url

  const { valid } = jobApplicationForm?.value
    ? await jobApplicationForm.value.validate()
    : { valid: false }

  if (valid) {
    // send to API
    try {
      isLoading.value = true
      const response = await applicationService.sendApplication(jobApplication.value)
      if (response) {
        navigationStore.toggle({
          opened: true,
          type: 'success',
          message: 'Application submitted!'
        })
        router.push({ name: 'jobs' })
      }
    } catch {
    } finally {
      isLoading.value = false
    }
    jobApplicationForm.value?.reset()
  }
}
</script>
<template>
  <v-row justify="center" class="mt-2">
    <v-col cols="12" sm="10" md="8" lg="6" xl="4">
      <div class="d-flex flex-column">
        <span class="text-h5">{{ job.title }}</span>
        <span class="text-subtitle-2">{{ job.company }}</span>
        <span class="mt-2"><v-icon color="grey-darken-1">location_on</v-icon> {{ job.location }} </span>
      </div>
      <v-card class="mt-4 pa-4">
        <div class="d-flex flex-column">
          <span>Complete the fields below</span>
        </div>

        <v-form class="mt-4" validate-on="submit" ref="jobApplicationForm">
          <v-text-field
            v-model="jobApplication.name"
            label="Name"
            variant="outlined"
            :rules="formValidationRules.required"
          ></v-text-field>

          <v-text-field
            v-model="jobApplication.lastname"
            label="Lastname"
            variant="outlined"
            :rules="formValidationRules.required"
          ></v-text-field>

          <v-text-field
            v-model="jobApplication.mothersLastname"
            label="Mother's lastname"
            variant="outlined"
            :rules="formValidationRules.required"
          ></v-text-field>

          <v-text-field
            v-model="jobApplication.email"
            label="Email"
            variant="outlined"
            :rules="formValidationRules.email"
          ></v-text-field>

          <v-text-field
            v-model="jobApplication.location"
            label="Location"
            variant="outlined"
            :rules="formValidationRules.required"
          ></v-text-field>

          <FileUploader
            title="Upload a recent resume or CV"
            label="Click to upload resume"
            hint="supports .pdf, .doc, .docx"
            required
          />
          <div class="d-flex justify-end mt-4">
            <v-btn type="submit" color="primary" @click="submitAplication" :loading="isLoading">
              Submit
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>
