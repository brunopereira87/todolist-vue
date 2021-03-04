<template>
  <div class="message" :class="type">
    <p >{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props:['message','type'],
  mounted(){
    setInterval(()=>{
      this.$store.dispatch('resetAlert');
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
.message{
  position: fixed;
  top: 6rem;
  width: 100%;
  @include container_width('tablet');
  padding: 1rem;
  font-weight: bold;
  @include center-fixed('tablet');
}

.error {
  @include textcolor('light');
  border: 2px solid map-get($colors, 'error');
  @include bgcolor('bgerror');
}

.warning {
  @include textcolor('light');
  border: 2px solid map-get($colors, 'warning');
  @include bgcolor('bgwarning');
}

.info {
  @include textcolor('light');
  border: 2px solid map-get($colors, 'info');
  @include bgcolor('bginfo');
}

.success {
  @include textcolor('light');
  border: 2px solid map-get($colors, 'success');
  @include bgcolor('bgsuccess');
}
</style>