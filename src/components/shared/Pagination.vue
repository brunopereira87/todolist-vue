<template>
  <div class="pagination">
    <p>Total pag {{total_pages}}</p>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total_pages: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style>

</style>