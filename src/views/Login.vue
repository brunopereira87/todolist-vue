<template>
  <section class=login>
    <h2 class="title">Login</h2>
    <form class=form @submit.prevent="login">
      <Input type="email" name="email" label="E-mail" v-model="email" :v="$v.email" />
      <Input type="password" name="password" label="Senha" v-model="password" :v="$v.password" />

      <Button v-if="loading" :disabled="true">Carregando...</Button>
      <Button :disabled="$v.$invalid" v-else>Enviar</Button>


      <ErrorComponent v-if="error" :error="error" />
    </form>
  </section>
</template>

<script>
import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';
import ErrorComponent from '@/components/shared/ErrorComponent';
import { required, email, minLength } from 'vuelidate/lib/validators';
import authService from '@/services/auth';
import { setToken } from '@/helpers'; 
import { mapMutations } from 'vuex';
export default {
  components:{
    Input,
    Button,
    ErrorComponent
  },
  data() {
    return {
      loading: false,
      email: '',
      password:'',
      error:null
    }
  },
  validations:{
    email: { required, email },
    password: { 
      required,  
      minLength: minLength(6)
    }
  },
  methods:{
    ...mapMutations(['UPDATE_USER' , 'UPDATE_LOGGED']),
    async login(){
      try{
        this.loading = true;
        const {data} = await authService.login({
          email: this.email,
          password: this.password
        });

        const { token, user } = data;

        setToken(token);
        this.UPDATE_USER(user);
        this.UPDATE_LOGGED(true);

        this.$router.push('/categorias');
        
      }catch(err){
        this.error = err.response.data.error;
      }
      finally{
        this.loading = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  max-width: 30rem;
  margin-left:  auto;
  margin-right:  auto;
}

.login .title{
  margin-bottom: 3rem;
}
</style>