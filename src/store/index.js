import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

import { getToken,removeToken } from '@/helpers';
import authService from '@/services/auth';

Vue.use(Vuex)

const cleanedUser = {
  id:null,
  name: "",
  email: "",
};

export default new Vuex.Store({
  state: {
    user: cleanedUser,
    logged:false,
    error: null,
    loading: false
  },
  mutations: {
    UPDATE_USER(state, payload){
      state.user = Object.assign(state.user, payload);
    },
    UPDATE_LOGGED(state, payload){
      state.logged = payload;
    },
    UDPATE_ERROR(state, payload){
      state.error = payload;
    },
    UPDATE_LOADING(state, payload){
      state.loading = payload;
    }
  },
  actions: {
    logout(context){
      context.commit('UPDATE_LOGGED',false);
      context.commit('UPDATE_USER',cleanedUser);
      removeToken();
      router.push('/login');
    },
    async autologin(context){
      const token = getToken();

      if(token){
        try{
          const {data} = await authService.logged()
          context.commit('UPDATE_USER',data.user)
          context.commit('UPDATE_LOGGED',true)
        } catch(err) {
          console.log(err);
          context.dispatch('logout');
        }
      }     

    },
    setError(context, error){
      console.log(error)
    }
  },
  modules: {
  }
})
