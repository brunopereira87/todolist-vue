import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)

const cleanedUser = {
  id:null,
  name: "",
  email: "",
};

export default new Vuex.Store({
  state: {
    user: cleanedUser,
    logged:false
  },
  mutations: {
    UPDATE_USER(state, payload){
      state.user = Object.assign(state.user, payload);
    },
    UPDATE_LOGGED(state, payload){
      state.logged = payload;
    }
  },
  actions: {
    logout(context){
      context.commit('UPDATE_LOGGED',false);
      context.commit('UPDATE_USER',cleanedUser);
      router.push('/login');
    }
  },
  modules: {
  }
})
