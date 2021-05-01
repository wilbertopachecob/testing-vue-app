import { shallowMount } from '@vue/test-utils'
import ProgressBar from '../../src/components/ProgressBar'

describe('ProgressBar.vue', () => {
  test('ProgressBar is hidden', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.classes()).toContain('hidden')
  })
  test('initialize with 0% width', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.element.style.width).toBe('0%')
  })
})
