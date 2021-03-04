<template>
  <button class="button" :disabled="disabled" :class="{disabled: disabled}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props:["disabled"]
}
</script>

<style lang="scss" scoped>
.button{
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  @include bgcolor('first');
  @include textcolor('light');
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  font-weight: 700;

  &.disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }
}

.button:hover,
.button:focus{
  outline: none;
  box-shadow: 0 0 0 3px map-get($colors, 'light'), 0 0 0 4px map-get($colors, 'first');
}
</style>