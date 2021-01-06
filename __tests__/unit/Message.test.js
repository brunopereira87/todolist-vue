import { mount } from '@vue/test-utils';
import Message from '@/src/component/testable/Message';

test('should display message', () => {
  const wrapper = mount(Message,{
    propsData: {
      msg: "Message for testing"
    }
  })

  expect(wrapper.text()).toContain('Hello World')
});
