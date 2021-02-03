<template>
  <section class="categories mainContainer" >
    <h2 class="title section-title">Categorias</h2>
    <CategoriesItem v-for="category in categories" :key="category.id" :category="category" />
    <div class="newCategory">
      <div class="newCategoryTitle">
        <p>Nova categoria</p>
        <button class="btn-icon" @click="newForm = true">
          <i class="fas fa-plus"></i>
        </button>
      </div>

      <CategoriesForm v-if="newForm" @close="newForm = false" @confirm="createCategory"/>
    </div>
  </section>
</template>

<script>
import CategoriesForm from './CategoriesForm';
import CategoriesItem from './CategoriesItem';
import categoryService from '@/services/category';
export default {
  name: 'Categories',
  components: {
    CategoriesForm,
    CategoriesItem
  },
  data() {
    return {
      newForm: false,
      categories: null
    }
  },
  methods:{
    createCategory(category){
      console.log('cat:',category)
    }
  },
  async created(){
    try{
      const { data } = await categoryService.getCategories();
      this.categories = data.categories;
    } catch(err){
      console.log(err.message)
    }
  }
}
</script>

<style lang="scss" scoped>
.newCategoryTitle {
  display: flex;
  align-items: center;
}

.newCategoryTitle p{
  @include textcolor('dark');
  margin-right: .5rem;
}
</style>