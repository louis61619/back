<template>
<div>
  <h2>我是產品管理標題</h2>
  <p>我是產品管理內容</p>
  <h2>{{series}}</h2>
</div>
  
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        series:""
    }
  },
  name: 'Produst',
  mounted() {
      axios.get("./php/light-lips.php").then(res=>{  //這裡是ES6的寫法，get請求的地址，是小編自己在網站上存放的php檔案，後面將介紹其編寫，也可以自己定義
        this.series=res.data;//獲取資料
        
      })
  },

}
</script>

<style>

</style>