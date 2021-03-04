<template>
  <div id="app">
    <Header />
    <main class="container">
      <transition name="alert">
        <Alert v-if="alertMessage" :message="alertMessage" :type="alertType" /> 
      </transition>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from '@/components/shared/Header';
import Alert from '@/components/shared/Alert';
import {mapActions, mapState} from 'vuex';
export default {
  components:{
    Header,
    Alert
  },
  beforeMount(){
    this.$store.dispatch('autologin');
  },
  computed: {
    ...mapState(['alertMessage','alertType'])
  },

}
</script>
<style lang="scss">
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  padding-top: 4rem;
  margin: 0px;

  @include textcolor("dark");
  @include fontfamily("first");
  
}

h1,
h2,
h3,
h4,
p {
  margin: 0px;
}

.title{
  font-size: 2rem;
  @include textcolor("dark");
}
.section-title{
  margin-bottom: 1rem;
}
a {
  text-decoration: none;
}
ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

img {
  display: block;
  max-width: 100%;
}

.disabled{
  opacity: 0.7;
  cursor: not-allowed;
}
button,
input,
textarea,
select {
  display: block;
  font-size: 1rem;
  @include fontfamily("first");
  color: #333;
}

.btn-link{
  cursor: pointer;
  padding: 0;
  background: none;
  border: none;
  @include textcolor("second");
  font-weight: 700;
}
.btn-link:hover,
.btn-link:focus{
  @include textcolor("dark");
  border: none;
  outline: none;
}
a {
  text-decoration: none;
}

.btn-icon{
  background: rgba(128, 255, 193, 0.44);
  outline: none;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  @include textcolor("dark");
}
.btn-icon:hover{
  @include bordercolor("first");
}
.btn-icon:hover > i{
  @include textcolor("first");
}
.btn-icon-second{
  @include border('1px','dark');
  background-color: white;
}

.container {
  @include container_width('desktop');
  padding: 0 1rem;
  margin: 0 auto;
}

.mainContainer{
  margin-top: 4rem;
}
section {
  margin-top: 3rem;
}

.alert-enter,
.alert-leave-to{
  opacity: 0;
  transform: translateY(-50px);
}

.alert-enter-active,
.alert-leave-active{
  transition: all .5s;
}
</style>
