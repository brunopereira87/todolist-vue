import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.mixin({
  methods: {
    catchAsync: fn => fn().catch(err => store.dispatch('setError',err)),
    getErrorMessage: (err) => {
      if(err.response) return err.response.data.error;
      else if(err.request) return err.request;
      return err.message;
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
