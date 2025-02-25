import jobList from '@/services/mockData/jobsList.json'
import JobQueryParams from '@/interfaces/JobQueryParams'

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
  },

  filter: (params: JobQueryParams) => {
    const { searchString } = params

    const filteredJobs = jobList.filter(({ title }) => {
      const found = title.search(new RegExp(searchString, 'i'))
      return found >= 0
    })

    return {
      data: filteredJobs
    }
  }
}
