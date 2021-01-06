<template>
  <div class="input">
    <label :for="name">{{label}}</label>
    <input :type="type" :value="value" @blur="validate($event.target.value)" :id="name" :name="name" @input="update($event.target.value)">
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>

<script>
export default {
  name: "Input",
  props:['type', 'label', 'value', 'name','required'],
  methods: {
    update(value){
      this.$emit('input', value);
    },
    validate(value){
      console.log('value:',value)
      console.log('required:',this.required)
      if(this.required && !value) this.error = `O campo ${this.label} é obrigatório`;
    }
  },
  data() {
    return {
      error: null    
    }
  },
}
</script>

<style lang="scss" scoped>
.input {
  margin-bottom: 1rem;
  width: 100%;
}
.input label{
  display: block;
  font-weight: 700;
  margin-bottom: .3rem;
  @include textcolor('dark');
}

.input input{
  padding: .3em;
  width: 100%;
}

.error{
  font-size: .8rem;
  @include textcolor('error');
  margin-top: .2rem;
}
</style>