import type JobApplication from '@/interfaces/JobApplication'

export const applicationService = {
  sendApplication: async (jobApplication: JobApplication) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: 'Submitted!'
        })
      }, 2000)
    })
  }
}
