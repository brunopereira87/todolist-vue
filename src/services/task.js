import api from './index';
const endpoint = '/tasks';

const taskService = {
  api,
  getTasks() {
    return api.get(endpoint)
  },
  getTask(id) {
    return api.get(`${endpoint}/${id}`);
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