import { shallowMount } from '@vue/test-utils'
import ProgressBar from '../../src/components/ProgressBar'

describe('ProgressBar.vue', () => {
  // test('ProgressBar is hidden', () => {
  //   const wrapper = shallowMount(ProgressBar)
  //   expect(wrapper.classes()).toContain('hidden')
  // })
  // test('initialize with 0% width', () => {
  //   const wrapper = shallowMount(ProgressBar)
  //   expect(wrapper.element.style.width).toBe('0%')
  // })
  test('display bar when stat is called', async () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.classes()).toContain('hidden')
    await wrapper.vm.start()
    expect(wrapper.classes()).not.toContain('hidden')
  })
  test('sets the bar to 100% when finish is called', () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    wrapper.vm.finish()
    expect(wrapper.element.style.width).toBe('100%')
  })
})
