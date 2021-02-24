<template>
  <section class="tasks mainContainer">
    <div class="newTask">
      <h2 class="title pageTitle">
        {{previous_task ? 'Nova ': 'Editar '}} Tarefa
        <TaskForm v-if="newForm" />
      </h2>
    </div>
    <TasksList v-if="tasks" :tasks="tasks" />
  </section>
</template>

<script>
import TaskForm from './TaskForm';
import TasksList from './TasksList';
import taskService from '@/services/task';

export default {
  name: 'Tasks',
  components: {
    TaskForm,
    TasksList
  },
  data() {
    return {
      previous_task: null,
      newForm: true,
      tasks: null
    }
  },
  methods:{
    async getTasks(){
      try{
        const { data } = await taskService.getTasks()
        this.tasks = data;
      }catch(err) {
        console.log(err)
      }
    }
  },
  async created(){
    await this.getTasks();
  }
}
</script>

<style lang="scss" scoped>

</style>