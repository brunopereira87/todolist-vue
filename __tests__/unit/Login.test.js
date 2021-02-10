
// jest.mock('@/services/auth');
jest.mock('@/services/index');
import { shallowMount } from '@vue/test-utils';
import Vuelidate from 'vuelidate';
import Vue from 'vue';

import authService from '@/services/auth';
import api from '@/services/index';
Vue.use(Vuelidate);

import Login from '@/views/Login';

// import { after } from 'lodash';

describe('Login', () => {
  let wrapper;
  

  beforeAll( ()=> {
    wrapper = shallowMount(Login);
  });

  const setData = wrapper => wrapper.setData({
    email: 'bruno@email.com',
    password: 'qwe123'
  })

  const resetData = wrapper => wrapper.setData({
    email: '',
    password: '',
    loading: false,
    error: null
  })
  
  const setModel = (model, value) => {
    const data = {}
    data[model] = value
    wrapper.setData(data)
  };

  const resetModel = (model, value) => {
    const data = {}
    data[model] = ''
    wrapper.setData(data)
  };
  
  
  beforeEach(()=>{
    resetData(wrapper);
  });

  afterEach(()=>{
    jest.resetAllMocks();
  });

  it('should have a instance of vm', () => {
    expect(wrapper.vm).toBeDefined();
  });
  
  describe('Start Properties', () => {
    test('should have the expected properties in the component', () => {
      const expectedProperties = ['loading','email','password','error'];
      const received = Object.keys(wrapper.vm.$data);

      expect(expectedProperties).toEqual(received);
    });
  });
  
  describe('Email', () => {
    test('should email model be empty at start', () => {
      expect(wrapper.vm.email).toBe('');
    });

    test('should email model be filled with bruno@email.com', () => {
      setModel('email','bruno@email.com')
      expect(wrapper.vm.email).toBe('bruno@email.com');
    });
  });

  describe('Password', () => {
    test('should password model be empty at start', () => {
      expect(wrapper.vm.password).toBe('');
    });

    test('should password model be filled with qwe123', () => {
      setModel('password','qwe123');
      expect(wrapper.vm.password).toBe('qwe123');
    });
  });

  
  describe('On login', () => {
    
    beforeEach(()=>{
      setData(wrapper);
      // wrapper.vm.login();

      // authService.login.mockImplementation(()=> {
      //   return Promise.resolve({
      //     data: {
      //       token: "",
      //       user: {}
      //     }
      //   })
      // });
    });

    // test('should return email = bruno@email and password = qwe123 on login', () => {
    //   setData(wrapper);
    //   wrapper.vm.login();
    //   expect(wrapper.vm.$data).toEqual({
    //     email: 'bruno@email.com',
    //     password: 'qwe123',
    //     loading: true,
    //     error: null
    //   });
    // });

    // test('should call authService login ', () => { 
    //   expect(authService.login).toHaveBeenCalledTimes(1);
    // });

    
  });

});
