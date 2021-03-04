<template>
  <section class="tasks mainContainer">
    <div class="newTask">
      <h2 class="title section-title">
        {{previous_task ? 'Editar ': 'Nova '}} Tarefa
      </h2>
      <TaskForm v-if="newForm" />
    </div>
    <div class="task">
      <h2 class="title section-title">Suas Tarefas</h2>
      <TasksList v-if="tasks" :tasks="tasks" />
    </div>
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
        this.tasks = data.tasks;
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
.tasks {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: $section_margin;
  
}
</style>