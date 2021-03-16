<template>
  <div class="task-item">
    <div class="date">
      <strong class="day">{{day}}</strong>
      <strong class="month">{{month}}</strong>
    </div>
    <div class="task">
      <h4>{{task.name}}</h4>
      <p class="category_name">{{task.category.name}}</p>
      <p class="time">{{time}}</p>
    </div>
  </div>
  
</template>

<script>
import moment from 'moment';
export default {
  name: 'TaskItem',
  props:['task'],
  data() {
    return {
      // late: false
    }
  },
  methods:{
    
  },

  computed: {
    day(){
      if(this.daysDiff === 0) return 'Hoje';
      if(this.daysDiff === 1) return 'Amanhã';
      if(this.task.deadline) return this.deadline.format('DD');

      return "-";
    },
    month(){
      if(this.task.deadline) return this.deadline.format('MMM');
      return '';
    },
    deadline(){
      return moment(this.task.deadline,'YYYY-MM-DD h:mm:ss');
    },
    late(){
      if(!this.task.deadline) return false;

      return this.daysDiff < 0;
    },
    date(){
      return moment(this.task.deadline,'YYYY-MM-DD h:mm:ss');
    },
    today(){
      return moment();
    },
    time(){
      if(this.task.deadline) return this.deadline.format('h:mm');
      return '';
    },
    daysDiff(){
      return this.date.diff(this.today,'days');
    }
  }
}
</script>

<style lang="scss" scoped>
.task-item {
  display: flex;
  align-items: center;
  /* &::before{
    width: 4px;
    @include bgcolor("first");
    content: '';
    height: 60px;
  } */
  @include border(4px,"first","-left");
  margin-bottom: $title_margin;
  box-shadow: 0 3px 3px rgba(#ccc, .7);
  height: 60px;

  .category_name,
  .time{
    @include fontsize('normal');
  }
}

.date{
  min-width: 60px;
  text-align: center;
  strong{
    display: block;
  }
}
.day{
  @include fontsize('medium2');
}
</style>