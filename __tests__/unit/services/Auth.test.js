jest.mock('@/services/index');
import axios from 'axios';
// jest.mock('axios',() => {
//   return {
//     create: jest.fn(() => ({
//       get: jest.fn(),
//       interceptors: {
//         request: { use: jest.fn(), eject: jest.fn() },
//         response: { use: jest.fn(), eject: jest.fn() }
//       }
//     }))
//   }
// }
// );
// jest.mock('axios');
// jest.mock('@/services/auth');
import api from '@/services/index';
import authService from '@/services/auth';
import data from '../../../__mocks__/auth.json';

describe('POST requests', () => {
  let body;
  const errorMessage = 'Network Error';
  afterEach(() => {
    jest.resetAllMocks();
  });
  beforeEach(()=> {
    api.post.mockImplementation(() => {
      return Promise.resolve({data})
    });
  });

  describe('register', () => {
    beforeAll(() =>{
      body = {
        name: 'Bruno Emanuel Pereira',
        email: 'bruno@email.com',
        password: 'qwe123'
      }
    });

    beforeEach(()=> {
      authService.register(body);
    });

    it('should call api.post', () => {
      expect(api.post).toHaveBeenCalledTimes(1)
    });

    it('should call api.post with proper parameters',()=>{
      expect(api.post).toHaveBeenCalledWith('/auth/register',body);
    });

    it('should return user data with token when api.post have been called', async () => {
      const resp = await authService.register(body);
      expect(resp.data).toBe(data)
    });
    it('should throw an error when authService.register promise be rejected', async () => {
      api.post.mockImplementationOnce(()=> 
        Promise.reject(new Error(errorMessage))
      );

      await expect(authService.register(body)).rejects.toThrow(errorMessage);
    });
  });

  describe('login', () => {
    beforeAll(() => {
      body = {
        email: 'bruno@email.com',
        password: 'qwe123'
      }    
  
    });
    beforeEach(() => {
      authService.login(body);
    });
  
    test('should call api.post have been called', () => {
      expect(api.post).toHaveBeenCalledTimes(1);
    });
  
    test('should call api.post with proper parameters', () => {
      expect(api.post).toHaveBeenCalledWith('/auth/login',body);
    });
  
    test('should return the user data with token at authService.login', async () => {
      const response = await authService.login(body);
      expect(response.data).toBe(data);
    });
  
    test('should throw a error when authService.login promise rejects',async () => {
      api.post.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
      );
   
      await expect(authService.login(body)).rejects.toThrow(errorMessage);
    });
  });

  describe('logout', () => {
    beforeEach(()=>{
      authService.logout();
    });

    it('should call api.post method', () => {
      expect(api.post).toHaveBeenCalledTimes(1);
    });

    it('should  call api.post with the proper url', () => {
      expect(api.post).toHaveBeenCalledWith('/auth/logout');
    });

    it('should return a object with logged out message', async () => {
      const message = 'Logged out';
      
      api.post.mockImplementationOnce(()=> {
        return Promise.resolve({
          message
        });
      })

      await expect(authService.logout()).resolves.toEqual({
        message
      })
    });

    it('should throw a error when authService.logout be reject', async () => {
      api.post.mockImplementationOnce(()=>{
        return Promise.reject(new Error(errorMessage))
      });

      await expect(authService.logout()).rejects.toThrow(errorMessage);
    });
  });
});

describe('GET requests', () => {
  const errorMessage = 'Network Error';
  afterEach(() => {
    jest.resetAllMocks();
  });

  beforeEach(() => {
    api.get.mockImplementation(() => {
      return Promise.resolve({ data });
    });
  });

  describe('logged', () => {
    beforeEach(() => {
      authService.logged();
    });
  
    it('should api.get have been called once', () => {
      expect(api.get).toHaveBeenCalledTimes(1)
    });
  
    it('should api.get have been called with proper URL', () => {
      expect(api.get).toHaveBeenCalledWith('/auth/logged')
    });
  
    it('should return the propper data', async () => {
      const response = await authService.logged();
      expect(response.data).toBe(data);
    });
  
    it('should throw a when api.logged promised be rejected',async () => {
      api.get.mockImplementationOnce(() => {
        return Promise.reject(new Error(errorMessage));
      });

      await expect(authService.logged()).rejects.toThrow(errorMessage);
    });
  });
});