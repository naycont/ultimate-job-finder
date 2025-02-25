import jobList from '@/services/mockData/jobsList.json'
import type JobQueryParams from '@/interfaces/JobQueryParams'

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
    const { searchString, categoryId } = params

    if (searchString.trim() === '' && !Boolean(categoryId)) return

    const filteredJobs = jobList.filter((job) => {
      let titleFound = 0
      let categoryMatch = true

      if (searchString.trim() !== '') {
        // filter by title
        titleFound = job.title.search(new RegExp(searchString, 'i'))
      }

      if (categoryId) {
        categoryMatch = Boolean(job.categoryId === categoryId)
      }

      return titleFound >= 0 && categoryMatch
    })

    return {
      data: filteredJobs
    }
  }
}
