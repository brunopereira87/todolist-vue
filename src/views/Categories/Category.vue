<template>
  <section class="category">
    Página da categoria {{id}}
  </section>
</template>

<script>
export default {
  name: 'Category',
  props:['id'],
  data() {
    return {
      tasks: null
    }
  },
}
</script>

<style>

</style>