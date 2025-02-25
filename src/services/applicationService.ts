import type JobApplication from '@/interfaces/JobApplication'

export const applicationService = {
  sendApplication: async (jobApplication: JobApplication) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Delayed for 2 second.')
        resolve({
          data: 'Submitted!'
        })
      }, 2000)
    })
  }
}
