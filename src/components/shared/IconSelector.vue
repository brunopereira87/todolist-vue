<template>
  <div class="iconSelector">
    <i v-for="icon in icons" :key="icon" :class="icon" @click="handleClick(icon)"></i>
  </div>
</template>

<script>
import { categoriesIconsList } from '@/helpers';
export default {
  name: 'IconSelector',
  props:['selectedIcon'],
  data() {
    return {
      icons: categoriesIconsList
    }
  },
  methods:{
    handleClick(icon){
      this.$emit('iconClicked',icon)
    }
  }
}
</script>

<style lang="scss" scoped>
.iconSelector {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  height: 216px;
  border: 1px solid;
  overflow: auto;
}
.iconSelector i{
  font-size: 30px;
  cursor: pointer;
  text-align: center;
  height: 72px;
  line-height: 72px;
}

.iconSelector i:nth-child(4n){
  margin-right: 0;
}
.selected,
.iconSelector i:hover{
  @include textcolor('highlight');
}


</style>