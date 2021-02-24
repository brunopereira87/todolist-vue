<template>
  <div class="tasks-list">
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
  </div>

</template>

<script>
import TaskItem from './TaskItem';
export default {
  name:'TasksList',
  props:['tasks'],
  components: {
    TaskItem
  }
}
</script>

<style lang="scss" scoped>

</style>