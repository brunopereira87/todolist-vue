jest.mock('@/services/index');

import api from '@/services/index';
import categoryService from '@/services/category';
import dataCategories from '../../../__mocks__/categories.json';
import dataCategory from '../../../__mocks__/category.json';
import dataTasks from '../../../__mocks__/tasks.json';

describe('Category Service', () => {
  const errorMessage = 'Network error'
  const category_id = 2;
  
  afterEach(()=> {
    jest.resetAllMocks();
  });
  describe('getCategories', () => {
    beforeEach(()=>{
      api.get.mockImplementation(()=> Promise.resolve({data: dataCategories}))
      categoryService.getCategories();
    });

    it('should call api.get ', () => {
      expect(api.get).toHaveBeenCalledTimes(1);
    });

    it('should call api.get with the proper url', () => {
      expect(api.get).toHaveBeenCalledWith('/categories')
    });

    it('should return categories data when categoryService  have been called', async () => {
      const resp = await categoryService.getCategories()
      expect(resp.data).toBe(dataCategories)
    });

    it('should throw a error when categoryService.getCategories have been rejected', async () => {
      api.get.mockImplementationOnce(()=> Promise.reject(new Error(errorMessage)));
      await expect(categoryService.getCategories()).rejects.toThrow(errorMessage);
    });
  });
  describe('getCategoryTasks', () => {
    beforeEach(()=>{
      api.get.mockImplementation(()=> Promise.resolve({data: dataTasks}))
      categoryService.getCategoryTasks(category_id);
    });

    it('should call api.get ', () => {
      expect(api.get).toHaveBeenCalledTimes(1);
    });

    it('should call api.get with the proper url', () => {
      expect(api.get).toHaveBeenCalledWith(`/categories/${category_id}/tasks`);
    });

    it('should return categories data when categoryService  have been called', async () => {
      const resp = await categoryService.getCategoryTasks(category_id)
      expect(resp.data).toBe(dataCategories)
    });

    // it('should throw a error when categoryService.getCategories have been rejected', async () => {
    //   api.get.mockImplementationOnce(()=> Promise.reject(new Error(errorMessage)));
    //   await expect(categoryService.getCategories()).rejects.toThrow(errorMessage);
    // });
  });
  
  describe('Get Category', () => {
    beforeEach(()=>{
      api.get.mockImplementation(()=> Promise.resolve({ data: dataCategory }));
      categoryService.getCategory(category_id);
    });

    it('should call api.get once', () => {
      expect(api.get).toHaveBeenCalledTimes(1);
    });

    it('should call api.get with the proper url', () => {
      expect(api.get).toHaveBeenCalledWith('/categories/'+category_id);
    });

    it('should call return a category when categoryService.getCategory have been called',
      async () => {
        const resp = await categoryService.getCategory(category_id)
        expect(resp.data).toBe(dataCategory);
      }
    );
    it('should throw a error when categoryService.getCategories have been rejected', async () => {
      api.get.mockImplementationOnce(()=> Promise.reject(new Error(errorMessage)));
      await expect(categoryService.getCategory(category_id)).rejects.toThrow(errorMessage);
    });
  });

  describe('Create Category', () => {
    const body = {
      name: 'Category 1',
      icon: 'icon1'
    }
    beforeEach(()=>{
      api.post.mockImplementation(()=> Promise.resolve({ data: dataCategory }));
      categoryService.createCategory(body);
    });

    it('should call api.post once', () => {
      expect(api.post).toHaveBeenCalledTimes(1);
    });

    it('should call api.post with the proper parameters', () => {
      expect(api.post).toHaveBeenCalledWith('/categories', body);
    });

    it('should call return a category when categoryService.createCategory have been called',
      async () => {
        const resp = await categoryService.createCategory(body)
        expect(resp.data).toBe(dataCategory);
      }
    );
    it('should throw a error when categoryService.createCategory have been rejected', async () => {
      api.post.mockImplementationOnce(()=> Promise.reject(new Error(errorMessage)));
      await expect(categoryService.createCategory(body)).rejects.toThrow(errorMessage);
    });
  });
});