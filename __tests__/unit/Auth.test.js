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
import data from '../../__mocks__/auth.json';

describe('login', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  let body;
  let wrongBody;
  beforeAll(() => {
    body = {
      email: 'bruno@email.com',
      password: 'qwe123'
    }    

  });
  beforeEach(() => {
    authService.login(body);
    api.post.mockImplementation(() => {
      return Promise.resolve({data})
    });

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
    const errorMessage = 'Network Error';
 
    api.post.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
 
    await expect(authService.login(body)).rejects.toThrow(errorMessage);
  });
});

describe('logged', () => {
  beforeEach(() => {
    authService.logged();
    api.get.mockImplementation(() => {
      return Promise.resolve({ data });
    });
    // api.post.mockImplementation(() => {
    //   return Promise.resolve({data})
    // });
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
});