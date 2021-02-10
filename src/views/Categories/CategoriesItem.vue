<template>
  <div class="category">
    <div class="data">
      <router-link class="category-link" :to="`/categorias/${category.id}`">
        <i :class="category.icon"></i>
        <strong>{{category.name}}</strong>
      </router-link>
      <p v-if="category.tasks_count > 0">Tarefas: {{category.tasks_count}}</p>
      <p v-else>Nenhuma tarefa</p>
    </div>
    <div class="actions">
      <button @click="() => $emit('click_update',category)">
        <i class="fas fa-pen"></i>
      </button>
      <button @click="() => $emit('click_delete',category.id)">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'CategoriesItem',
  props:['category']
}
</script>

<style lang="scss" scoped>
.data{
  p{
    @include fontsize('small3');
    margin-top: $micro_space;
    opacity: .7;
    margin-left: 30px;
  }
}
.category{
  display: flex;
  justify-content: space-between;
  background: rgba(map-get($colors, 'second'), 0.1);
  padding: $medium_space;
  box-shadow: 0 6px 4px 0 rgba(#000, 0.05);
  margin-bottom: $title_margin;
}
.category-link{
  display: flex;
  &:hover{
    i,strong{
      @include textcolor('highlight');
    }
  }
  i, strong{
    display: block;
    @include textcolor('dark');
  }
  i{
    width: 30px;
  }
}

.actions {
  display: flex;
  button{
    border: none;
    background: none;
    @include textcolor('dark');
    cursor: pointer;
    &:hover{
      @include textcolor('highlight');
    }
    i{
      @include fontsize('medium');
      
    }
    &:first-child{
        margin-right: $medium_space;
      }
  }
}
</style>