import { describe, test, expect, beforeEach } from 'vitest'
import JobList from '@/components/jobs/JobList.vue'
import jobList from '@/services/mockData/jobsList.json'
import { mount } from '@vue/test-utils'

describe('Job List', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(JobList, {
      props: { jobList }
    })
  })

  test('renders a table', () => {
    expect(JobList).toBeTruthy()
    expect(wrapper.find('[data-testid="jobList"]').exists()).toBe(true)
  })

  test('render table headers properly', () => {
    expect(wrapper.find('[data-testid="jobList__headers"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="jobList__headers--title"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="jobList__headers--company"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="jobList__headers--description"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="jobList__headers--location"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="jobList__headers--category"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="jobList__headers--published"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="jobList__headers--actions"]').exists()).toBe(true)
  })

  test('render table items properly', async () => {
    const items = await wrapper.find('[data-testid="jobList__items"]')

    expect(items.exists()).toBe(true)

    //expect(items.find('[data-testid="jobList__items--1"]').exists()).toBe(true)
  })
})
