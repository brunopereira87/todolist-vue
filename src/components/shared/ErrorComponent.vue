<template>
  <div class="error">
    <p>{{error}}</p>
  </div>
</template>

<script>
export default {
  name: 'ErrorComponent',
  props:['error']
}
</script>

<style lang="scss" scoped>
.error p{
  @include textcolor('error');
  margin: 1rem 0;
  width: 100%;
  border: 2px solid map-get($colors, 'error');
  background-color: tomato;
  padding: 1rem;
}
</style>