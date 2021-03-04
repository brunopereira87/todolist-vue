<template>
  <form class="form" @submit.prevent="handleSubmit">
    <Input type="text" name="name" label="Nome" v-model="task.name" :v="$v.task.name" />
    <Input type="textarea" name="description" label="Descrição" v-model="task.description" />
    <Input type="select" name="category_id" label="Categoria" :options="options"  v-model="task.category_id" 
      :v="$v.task.category_id"/>
    <Input type="date" name="date" label="Data" v-model="task.date" />
    <Input type="time" name="time" label="Horário" v-model="task.time" />
    <Button v-if="loading" :disabled="true" >...Carregando</Button>
    <Button v-else :disabled="$v.$invalid" >Enviar</Button>

  </form>
</template>

<script>
import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';
import { required, numeric } from 'vuelidate/lib/validators';
import { mapState, mapMutations } from 'vuex';
import categoryService from '@/services/category';
import taskService from '@/services/task';

export default {
  name: 'TaskForm',
  props:['previous_task'],
  components: {
    Input,
    Button
  },
  data() {
    return {
      task: {
        name: null,
        description: null,
        date: null,
        time:null,
        category_id: null
      },
      categories:null,
      options: null
    }
  },
  computed: {
    ...mapState(['loading','error'])
  },
  validations: {
    task: {
      name: { required },
      category_id: {
        required,
        numeric
      }
    }
  },
  async beforeMount(){
    await this.getCategories();
  },

  methods:{
    ...mapMutations(['']),
    handleSubmit(){
      
    },
    async createTask(){
      let deadline = this.task.date || "";
      if(this.task.time) deadline+=` ${this.task.time}`;

      const newTask = {
        ...this.task,
        deadline
      }
    
      try{
        const { data } = await taskService.createTask(newTask)
        
      }catch(err){
        console.log(err)
      }
    },
    async getCategories(){
      try{
        const {data} = await categoryService.getCategories();
        this.options = data ? this.getOptions(data.categories, 'name', 'id') : null;
        console.log('options',this.options)
      }catch(err){
        console.log(err)
      }
    },
    getOptions(list, labelField, valueField){
      const optionsArray = list.map( item => {
        const optionItem = {
          value: item[valueField],
          label: item[labelField]
        }

        return optionItem;
      }); 

      return optionsArray;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>