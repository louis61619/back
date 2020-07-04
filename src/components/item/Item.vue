<template>
  <div class="item" @click="myClick">
    <h2><slot name="name">item1</slot></h2>
  </div>
</template>

<script>
export default {
  name: 'Item',
  methods: {
    myClick() {
      this.$emit("item-click")
    }
  }, 
}
</script>

<style lang="scss">
  .item{
    width:100%;
    height: 100px;
    border: 1px solid white;
  }
</style>
