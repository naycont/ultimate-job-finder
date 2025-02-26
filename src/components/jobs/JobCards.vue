<script lang="ts" setup>
import type { PropType } from 'vue';
import type Job from '@/interfaces/Job'
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
	<v-row>
    <v-col cols="12" sm="6" md="6" lg="3" v-for="job in items" :key="`jobCard-${job.id}`">
      <v-card class="job-card" :subtitle="job.company">
        <template v-slot:title>
          <div class="d-flex align-center justify-end"> <span class="text-caption font-weight-thin">{{ job.createdAt }}</span> </div>
          <span class="text-h5">{{ job.title }}</span>
        </template>
        <v-card-text class="job-card__content">
          <v-chip color="accent">
            {{ job.category }}
          </v-chip>
          <div class="d-flex flex-column mt-4">
          <span> <v-icon>location_on</v-icon> {{ job.location }} </span>
          <p class="mt-4">{{ job.description }}</p>
          </div>
        </v-card-text>

        <v-card-actions>
          <div class="d-flex align-center justify-end w-100"> 
            <v-btn variant="flat" color="primary" density="default" @click="goToDetails(job.id)"> Details </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-col>
	</v-row>
</template>

<style lang="scss">
.job-card {
  &__content {
    height: 150px;
  }
}
</style>