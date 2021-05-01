import { shallowMount } from '@vue/test-utils'
import TestComponent from '../../src/components/TestComponent'
import Child from '../../src/components/Child'

describe('TestComponent.vue', () => {
  test('renders Hello, World!', () => {
    // Add test code here
    expect(shallowMount(TestComponent).text()).toContain('Hello, World!')
  })
  test('renders ChildC', () => {
    // Add test code here
    expect(shallowMount(TestComponent).findComponent(Child).exists()).toBe(true)
  })
  test('renders ChildC with prop testProp', () => {
    // Add test code here
    const testProp = 123
    expect(
      shallowMount(TestComponent).findComponent(Child).props().testProp
    ).toBe(testProp)
  })
  test('check link href value', () => {
    // Add test code here
    expect(shallowMount(TestComponent).find('a').element.href).toBe(
      'https://google.com/'
    )
  })
  test('p color = red', () => {
    // Add test code here
    expect(shallowMount(TestComponent).find('p').element.style.color).toBe(
      'red'
    )
  })
})
