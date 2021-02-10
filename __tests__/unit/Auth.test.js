jest.mock('@/services/index');
// jest.mock('@/services/auth');
import api from '@/services/index';
import authService from '@/services/auth';
import data from '../../__mocks__/auth.json';

describe('login', () => {
  // afterEach(() => {
  //   jest.resetAllMocks();
  // });

  let body;
  beforeAll(() => {
    body = {
      email: 'bruno@email.com',
      password: 'qwe123'
    }    
  });
  beforeEach(() => {
    authService.login(body);
    api.post.mockImplementation(() => {
      return Promise.resolve(data)
    });

  });

  test('should call api.post have been called', () => {
    expect(api.post).toHaveBeenCalledTimes(1);
  });

  test('should call api.post with proper parameters', () => {
    expect(api.post).toHaveBeenCalledWith('/auth/login',body);
  });

  test('should ', () => {
    
  });
});