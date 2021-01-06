<template>
  <header class="header">
    <nav class="container nav">
      <div class="left">
        <h1 class="logo">

          <router-link to="/">
            <!-- <Logo /> -->
          </router-link>
        </h1>
          <div class="leftNav" v-if="logged">
            <router-link to="/tarefas">Tarefas</router-link>
            <router-link to="/categorias">Categorias</router-link>
          </div>
      </div>

      <div class="navright">
        <div class="loggedin" v-if="logged">
          <router-link class="right" to="conta">{{user.name}}</router-link>
          <button class="btn-link" style="font-size: .9rem;" @click="logout">Sair</button>
        </div>
        <template v-else>
          <router-link class="right" to="login">Login</router-link>
          <router-link class="right" to="cadastrar">Cadastrar</router-link>
        </template>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
export default {
  name: "Header",
  computed: {
    ...mapState(['user','logged'])
  },
  methods:{
    ...mapActions(['logout'])
  }
}
</script>

<style lang="scss" scoped>
.header{
  height: 4rem;
  @include bgcolor('first');
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  

}
.nav{
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.left{
  display: flex;
  align-items: center;
}
.leftNav a {
  margin-left: 1rem;
}
.left a,.right{
  @include textcolor('light');
  font-weight: 700;
}
.left a:hover,
.right:hover{
  @include textcolor('second');
}
.right:first-of-type{
  margin-right: 1rem;
}
.logo{
  width: 3rem;
  height: 3rem;
}

.logo a:hover svg > *{
  fill: map-get($colors, "second");
}

.loggedin{
  display: flex;
}
.btnSair{
  cursor: pointer;
  padding: 0;
}
</style>