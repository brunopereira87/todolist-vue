import api from './index';
const endpoint = '/categories';

const categoryService = {
  api,
  getCategories() {
    return api.get(endpoint)
  },
  getCategory(id) {
    return api.get(`${endpoint}/${id}`);
  },
  getCategoryTasks(id) {
    return api.get(`${endpoint}/${id}/tasks`);
  },

  createCategory(body) {
    return api.post(endpoint, body)
  },
  updateCategory(id, body) {
    return api.put(`${endpoint}/${id}`, body)
  },
  deleteCategory(id) {
    return api.delete(`${endpoint}/${id}`);
  }
}
export default categoryService;