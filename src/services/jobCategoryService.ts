import categories from '@/services/mockData/jobCategories.json'

export const jobCategoryService = {
  query: () => {
    return {
      data: categories
    }
  }
}
