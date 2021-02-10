<template>
  <section class="categories mainContainer" >
    
    <div class="newCategory">
      <div class="newCategoryTitle">
        <h2 class="title section-title">{{ updateForm ? 'Editar': 'Nova'}} categoria</h2>
        <button class="btn-icon" v-if="!updateForm" @click="newForm = true">
          <i class="fas fa-plus"></i>
        </button>
      </div>

      <CategoriesForm v-if="newForm" @close="newForm = false" @confirm="createCategory"/>
      <CategoriesForm v-if="updateForm" @close="updateForm = false" 
        @confirm="updateCategory" :previous_category="previous_category"/>
    </div>
    <div class="categories-list">
      <h2 class="title section-title">Categorias</h2>
      <CategoriesItem 
        v-for="category in categories" 
        :key="category.id"
        :category="category"
        @click_update="editCategory"
        @click_delete="deleteCategory"
      />
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
      updateForm: false,
      categories: null,
      error:null,
      previous_category:null
    }
  },
  methods:{
    async getCategories(){
      try{
        const { data } = await categoryService.getCategories();
        this.categories = data.categories;
      } catch(err){
        this.error = this.getErrorMessage(err);
      }
    },

    async createCategory(category){
      try{
        const { data } = await categoryService.createCategory(category)
        await this.getCategories();
        this.newForm = false;
      }catch(err) {
        this.error = this.getErrorMessage(err);
      }
    },

    editCategory(category){
      this.previous_category = category;
      this.updateForm = true;
    },

    async updateCategory(category){
      
      try{
        await categoryService.updateCategory(this.previous_category.id,category)
        await this.getCategories();

        this.updateForm = false;
        this.previous_category = null;
      }catch(err) {
        this.error = this.getErrorMessage(err);
      }
    },
    async deleteCategory(category_id){
      try{
        await categoryService.deleteCategory(category_id);
        await this.getCategories();
      }catch(err){
        this.error = this.getErrorMessage(err);
      }
    }
  },
  async created(){
    await this.getCategories();
  },
  
}
</script>

<style lang="scss" scoped>
.categories{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:  'title title'
                        'list new'   ;
  grid-gap: $section_margin;
  margin-top: $section_margin;
}
.newCategory{
  margin-bottom: $section_margin;
  grid-area: new;
}
.newCategoryTitle {
  display: flex;
  align-items: center;
}

.newCategoryTitle p{
  @include textcolor('dark');
  margin-right: .5rem;
}

.categories-list{
  grid-area: list;
}

.btn-icon{
  margin-left: $small_space;
  margin-bottom: 1rem;
  padding: .2rem .5rem;
  font-size: 1.3rem;
}
</style>