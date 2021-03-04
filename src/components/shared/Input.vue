<template>
  <div class="input">
    <label :for="name">{{label}}</label>
    <textarea v-if="type === 'textarea'" :value="value" @blur="v && v.$touch" :id="name" :name="name" 
    @input="update($event.target.value)" rows="5"></textarea>
    <select v-else-if="type === 'select'" :name="name" :id="name" @change="v && v.$touch" 
      @input="update($event.target.value)" >
      <option value="">Selectione o item desejado...</option>
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{option.label}}
      </option>
    </select>
    <input v-else :type="type" :value="value" @blur="v && v.$touch" :id="name" :name="name" @input="update($event.target.value)">
    <p class="error" v-for="(error, index) in errors" :key="index" >{{error}}</p>
  </div>
</template>

<script>
import {template, templateSettings} from "lodash";
// curly brace syntax
templateSettings.interpolate = /{{([\s\S]+?)}}/g;
// this would most likely be in a language file
const TEMPLATES_MAP = {
  required: `Campo obrigatório`,
  email: 'Digite um email válido',
  minLength: 'Este campo deve ter pelo menos {{min}} caracteres',
  maxLength: 'Este campo não pode ter mais que {{max}} caracteres',
};

export default {
  name: "Input",
  props:['type', 'label', 'value', 'name','required', 'v','options'],
  methods: {
    update(value){
      if(this.v) {
        this.v.$touch()
      }

      this.$emit('input', value);
    },
    validate(value){
      if(this.required && !value) {
        this.error = `O campo ${this.label} é obrigatório`;
        this.valid = false;
      }  
      else 
        this.error  = null
    }
  },
  data() {
    return {
      error: null,
      valid:false,
      validations:{
        'required': value => !! value,
        'min': (minlength, value) => value.length >= minlength,
        'max': (maxlength, value) => value.length <= maxlength,
        'email': value => {
          const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return value.test(regex);
        },
        
      },
      // messages: {
      //   required: `Campo obrigatório`,
      //   email: 'Digite um email válido',
      //   minLength: 'Este campo deve ter pelo menos {{min}} caracteres',
      //   maxLength: 'Este campo não pode ter mais que {{max}} caracteres',
      // }
    }
  },
  computed: {
    errors() {
      if (!this.v || !this.invalid) {
        return [];
      }
      return Object.keys(this.v.$params).reduce(
        (errors, validator) => {
          if (!this.v[validator]) {
            const compiled = template(TEMPLATES_MAP[validator]);
            errors.push(compiled(this.v.$params[validator]));
          }
          return errors;
        },
        []
      );
    },
    invalid() {

      return this.v ? this.v.$dirty && this.v.$invalid : true;
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

.input {
  input, textarea, select{
    padding: .3em;
    width: 100%;
  }
}

.error{
  font-size: .8rem;
  @include textcolor('error');
  margin-top: .2rem;
}
</style>