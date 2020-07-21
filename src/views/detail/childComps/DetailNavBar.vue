<template>
  <nav-bar>
    <div slot="left" @click="backClick">
      <img src="~assets/img/common/back.svg" class="back"/>
    </div>
   
    <div slot="center" class="centerText">
      <div v-for="(item,index) in title"
           :key="index"
           :class="{active:index===currentIndex}"
           @click="titleClick(index)">
        {{item}}
      </div>
    </div>
   
  </nav-bar>
</template>
<script>
  import NavBar from "components/common/navbar/NavBar"
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        title: ["商品", "参数", "评论", "推荐"],
        currentIndex: 0
      }},
        methods:{
          titleClick(index) {
            this.currentIndex=index       
          },
          backClick() {
            this.$router.go(-1)
          }
      }
    }
</script>
<style scoped>

  .centerText{
    display:flex;
    justify-content:space-around;
  }
  .active{
    color:pink;
  }
  .back{
    margin-top:10px;
  }
</style>
