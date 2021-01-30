jest.mock('@/services/index');
import api from '@/services/index';

describe('api', () => {
  describe('GET', () => {
    test('should api exists', () => {
      expect(api).toBeDefined();
    });

    test('should call api.get', () => {
      
    });
  });
  
  // test('should api.post called with the proper url', () => {
    
  //   expect(api.post).toBeCalledWith('/login');
  // });
});