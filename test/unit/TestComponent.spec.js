import { shallowMount } from '@vue/test-utils'
import TestComponent from '../../src/components/TestComponent'
test('renders Hello, World!', () => {
  // Add test code here
  expect(shallowMount(TestComponent).text()).toBe('Hello, World!')
})
