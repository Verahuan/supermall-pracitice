<template>
  <div class="GoodsList">
    <goods-list-items v-for="(item,index) in goods" :goods-item="item" :key="index" ></goods-list-items>
  </div>
</template>
<script>
  import GoodsListItems from "components/content/goods/GoodsListItems"

  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItems
    }
  }
</script>
<style scoped>
  .GoodsList{
   display:flex;
   flex-wrap:wrap;
   justify-content:space-around;
  }
</style>
