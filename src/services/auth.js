import api from './index';

const authService = {
  api,
  endpoint: '/auth',
  logged() {
    return api.get(this.endpoint + '/logged')
  },

  register(body) {
    return api.post(this.endpoint + '/register', body)
  },

  login(body) {
    return api.post(this.endpoint + '/login', body)
  },
  logout(){
    return api.post(this.endpoint + '/logout')
  }
  // forgot(body) {
  //   return api.post(this.endpoint + '/forgot', body)
  // }
}
export default authService;