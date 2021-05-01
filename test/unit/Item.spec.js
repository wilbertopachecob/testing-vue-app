// import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Item from '../../src/components/Item.vue'
describe('Item.vue', () => {
  //   const CTor = Vue.extend(Item)
  //   const vm = new CTor().$mount()

  //   test('sanity test', () => {
  //     const wrapper = shallowMount(Item)
  //     // expect(vm.$el.textContent).toContain('item')
  //     // eslint-disable-next-line no-debugger
  //     // debugger
  //     expect(wrapper.text()).toContain('item')
  //   })
  test('component prints url', () => {
    const item = {
      url: 'www.google.com'
    }
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    })
    expect(wrapper.text()).toContain(item.url)
  })
  test('component prints score', () => {
    const item = {
      score: 100
    }
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    })
    expect(wrapper.text()).toContain(item.score)
  })
  test('component prints author', () => {
    const item = {
      author: 'Jan Chong'
    }
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    })
    expect(wrapper.text()).toContain(item.author)
  })
  test('link print the item.title', () => {
    const item = {
      title: 'Im doind TDD'
    }
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    })
    expect(wrapper.find('a').text()).toContain(item.title)
  })
  test('link has proper href', () => {
    const item = {
      url: 'http://www.google.com'
    }
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    })
    expect(wrapper.find('a').attributes().href).toBe(item.url)
  })
})
