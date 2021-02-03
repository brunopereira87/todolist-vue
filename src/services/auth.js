import api from './index';
const endpoint = '/auth';

const authService = {
  api,
  logged() {
    return api.get(endpoint + '/logged')
  },

  register(body) {
    return api.post(endpoint + '/register', body)
  },

  login(body) {
    return api.post(endpoint + '/login', body)
  },
  logout(){
    return api.post(endpoint + '/logout')
  }
  // forgot(body) {
  //   return api.post(endpoint + '/forgot', body)
  // }
}
export default authService;