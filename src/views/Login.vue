<template>
  <section class=login>
    <h2 class="title">Login</h2>
    <form class=form @submit="handleSubmit">
      <Input type="email" name="email" label="E-mail" v-model="email" :required="true" />
      <Input type="password" name="password" label="Senha" v-model="password" :required="true" />

      <Button v-if="loading" :disabled="true">Carregando...</Button>
      <Button v-else>Enviar</Button>


      <!-- <ErrorComponent error={error} /> -->
    </form>
  </section>
</template>

<script>
import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';
export default {
  components:{
    Input,
    Button
  },
  data() {
    return {
      loading: false,
      email: '',
      password:''
    }
  },
  methods:{
    handleSubmit(){}
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