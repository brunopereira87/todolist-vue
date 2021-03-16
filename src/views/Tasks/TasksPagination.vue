<template>
  <ul class="pagination">
    <li v-for="page in total_pages" :key="page">
      <router-link :to="{query:{ page }  }">{{page}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TasksPagination',
  props:{
    total_pages: {
      type: Number,
      default: 1
    },
    current_page: {
      type: Number,
      default:1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>