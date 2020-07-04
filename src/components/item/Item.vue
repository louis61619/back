<template>
  <div class="item" @click="itemClick" :class="{active : isActive}">
    <h2><slot name="name">item1</slot></h2>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    path: String
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed :{
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }, 
}
</script>

<style lang="scss">
  .item{
    width:100%;
    height: 100px;
    border: 1px solid white;
    cursor: pointer;
  }
  .active{
    background-color: saddlebrown;
    color: white;
  }
</style>
