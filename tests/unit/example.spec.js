
import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'


describe('Home.vue', () => {
  const wrapper = mount(Home)
  var expect = require('expect')
  const vm = wrapper.vm
  console.log(wrapper + "Unit Testing")

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<h1>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('button clicked', async () => {
    expect(wrapper.text()).toContain('Adopt a new pet')
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.text()).toContain('Adopt a new pet')
  })


})
