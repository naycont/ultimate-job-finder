import jobList from '@/services/mockData/jobsList.json'

export const jobService = {
  query: () => {
    return {
      data: jobList
    }
  },

  get: (jobId: number) => {
    const job = jobList.find(({ id }) => id === jobId)
    if (job?.id) {
      return {
        data: job
      }
    } else {
      return {
        code: 404,
        error: 'Job does not exist'
      }
    }
  }
}
