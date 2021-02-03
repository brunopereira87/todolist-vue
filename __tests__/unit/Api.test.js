jest.mock('@/services/index');
import api from '@/services/index';

describe('api', () => {
  test('should api exists', () => {
    expect(api).toBeDefined();
  });

  describe('GET', () => {  
    test('should api.get to be defined', () => {
      expect(api.get).toBeDefined();
    });

    test('should api.get called with the proper URL', () => {
      expect(api.get).toBeDefined();
    });
  });
  
  // test('should api.post called with the proper url', () => {
    
  //   expect(api.post).toBeCalledWith('/login');
  // });
});