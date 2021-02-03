<template>
  <form @submit.prevent="handleSubmit" class="form">
    <div class="categoryInput">
      <Input type="text" name="category" label="Categoria" v-model="category" :v="$v.category"/>
      <button class="btn-icon btn-icon-second" :disabled="$v.$invalid" :class="{disabled: $v.$invalid }">
        <i class="fas fa-check"></i>
      </button>
      <button
        @click="closeForm"
        type="button"
        class="btn-icon btn-icon-second">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="categoryIcon">
      <div class="categoryIconTitle">
        <p>Selecione um ícone para a sua categoria</p>
        <button class="btn-icon" @click.prevent="handlePlusClick">
          <i :class="showIcons ? 'fas fa-times' : 'fas fa-plus'"></i>
        </button>
      </div>

      <IconSelector v-if="showIcons" :selectedIcon="icon" @iconClicked="handleIconClick" />
      <div v-if="icon && showPreview" class="iconPreview">
        <i :class="icon"></i>
      </div>
    </div>
  </form>
</template>

<script>
import Input from '@/components/shared/Input';
import IconSelector from '@/components/shared/IconSelector';
import { required } from 'vuelidate/lib/validators';
export default {
  name: 'CategoriesForm',
  components:{
    Input,
    IconSelector
  },
  data() {
    return {
      category: null,
      icon: null,
      showIcons: false,
      showPreview: false
    }
  },
  validations:{
    category: { required }
  },
  methods: {
    closeForm(){
      this.$emit('close');
    },
    handlePlusClick(){
      this.showPreview = false;
      this.showIcons = !this.showIcons;
    },
    handleIconClick(icon){
      this.icon = icon;
      this.showIcons = false;
      this.showPreview = true
    },
    handleSubmit(){
      this.$emit('confirm',{
        name: this.category,
        icon: this.icon
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form{
  width: 50%;
  
}
.categoryInput{
  display: flex;
  align-items: center;
}

.form button {
  width: 30px;
  height: 30px;
  margin-left: .5rem;
}

.categoryIconTitle{
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.iconPreview{
  font-size: 30px;
  cursor: pointer;
  text-align: center;
  height: 72px;
  line-height: 72px;
  width: 72px;
  border: 2px solid;
}


</style>