import jobList from '@/services/mockData/jobsList.json'

export const jobService = {
  query: () => {
    return {
      data: jobList
    }
  },

  get: (jobId: number) => {
    const job = jobList.find(({ id }) => id === jobId)
    return {
      data: job
    }
  }
}
