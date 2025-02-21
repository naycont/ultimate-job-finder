import jobList from '@/services/mockData/jobsList.json'

export const jobService = {
  query: () => {
    return {
      data: jobList
    }
  }
}
