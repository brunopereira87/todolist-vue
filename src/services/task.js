import api from './index';
const endpoint = '/tasks';

const taskService = {
  api,
  getTasks(query = '') {
    return api.get(endpoint+query)
  },
  getTask(id,query = '') {
    return api.get(`${endpoint}/${id}${query}`);
  },

  createTask(body) {
    return api.post(endpoint, body)
  },
  updateTask(id, body) {
    return api.put(`${endpoint}/${id}`, body)
  },
  done(id) {
    return api.put(`${endpoint}/${id}/done`)
  },
  deleteTask(id) {
    return api.delete(`${endpoint}/${id}`);
  }
}
export default taskService;