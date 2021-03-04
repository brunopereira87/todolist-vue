<template>
  <div class="pagination"></div>
</template>

<script>
export default {
  name: 'TasksPagination',
  props:{
    totalItens: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default:1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>