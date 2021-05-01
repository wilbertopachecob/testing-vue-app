import { mount, shallowMount } from '@vue/test-utils'
import ItemList from '../../src/views/ItemList'
import Item from '../../src/components/Item'
// import jsdom from 'jsdom'

// global.window = new jsdom.JSDOM().window

describe('ItemList.vue', () => {
  test('renders an Item for each Item in windows.items', () => {
    window.items = [{}, {}, {}]
    const wrapper = shallowMount(ItemList)
    const items = wrapper.findAllComponents(Item)
    expect(items).toHaveLength(window.items.length)
    items.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props().item).toBe(window.items[i])
    })
  })
})
