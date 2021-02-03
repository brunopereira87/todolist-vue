<template>
  <router-link class="category" :to="`/categorias/${category.id}`">
    <i :class="category.icon"></i>
    <strong>{{category.name}}</strong>
  </router-link>
</template>

<script>
export default {
  name: 'CategoriesItem',
  props:['category']
}
</script>

<style lang="scss" scoped>
.category{
  display: flex;

  i, strong{
    display: block;
  }
}
</style>