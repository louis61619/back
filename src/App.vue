<template>
  <div id="app">
    <tab-bar>
      
    </tab-bar>
    <div class="info-block">
      <div class="info">
        

        <router-view></router-view>

      </div>
    </div>
  </div>
</template>

<script>
import TabBar from "./components/TabBar.vue"

export default {
  name: 'App',
  components: {
    TabBar,
    
  }
  
}
</script>

<style lang="scss">
@import "./assets/css/tabbar.css";
.active{
  color: red;
}

.info-block{
  float: right;
  width: calc(100% - 200px);
  height: 1600px;
  margin: auto;
  border: 1px solid red;
  .info{
    max-width:1000px;
    margin: auto;
    margin-top: 200px;
    border: 1px solid black;
  }
}
</style>
