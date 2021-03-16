<template>
  <div class="tasks-list">
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    <TasksPagination :total_pages="total_pages" :current_page="current_page" />
  </div>

</template>

<script>
import TaskItem from './TaskItem';
import TasksPagination from './TasksPagination';
export default {
  name:'TasksList',
  props:['tasksData'],
  components: {
    TaskItem,
    TasksPagination
  },
  created(){
    console.log('tasks:',this.tasks)
  },
  computed:{
    tasks(){
      return this.tasksData.tasks;
    },
    total_pages(){
      return this.tasksData.total_pages;
    },
    total_tasks(){
      return this.tasksData.total_tasks;
    },
    current_page(){
      return this.tasksData.current_page;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>