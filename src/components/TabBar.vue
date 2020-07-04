<template>
  <div id="tabbar">
    <div class="scroll-block">
      
      
      <item v-slot:name @item-click="proClick">商品管理</item>
      <item v-slot:name @item-click="serClick">系列管理</item>
      <item></item>
      <item></item>
    </div>
    <div class="login-block"></div>
  </div>
</template>

<script>
import Item from "./item/Item";
export default {
  name: "TabBar",
  components: {
    Item
  },
  methods: {
     proClick() {
       this.$router.replace('/product')
     },
     serClick() {
       this.$router.replace('/series')
     }
      
  }
  
}
</script>

<style lang="scss">

#tabbar {
  background-color: rgb(136, 136, 136);
  height: 100vh;
  width: 200px;
  position: fixed;
  
  padding-top: 200px;
  
  flex-direction: column;
  .scroll-block {
    height: calc(100% - 160px);
    width: 100%;
    overflow: auto;
    border: 1px solid red;
  }
  .login-block{
    height: 160px;
    width: 100%;
    border: 1px solid blue;

  }
}
</style>