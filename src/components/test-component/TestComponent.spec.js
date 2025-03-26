import TestComponent from './TestComponent.vue'
import { mount } from '@vue/test-utils'


test('Вывод приветствия', () => {
  const wrapper = mount(TestComponent, {
    props: {
      msg: 'Hello world'
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world!')
})
