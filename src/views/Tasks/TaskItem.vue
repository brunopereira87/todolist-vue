<template>
  <div class="task">
    <h3>{{task.name}}</h3>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props:['task']
}
</script>

<style lang="scss" scoped>

</style>