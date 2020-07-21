<template>
  <div class="GoodsListItems" @click="itemClick">
    <img :src="goodsItem.show.img" @load="LoadAll" />
    <div class="goods-text">
      <p>{{goodsItem.title}}</p>
      <span class="goods-price">{{goodsItem.price}}</span>
      <span class="goods-cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "GoodsListItems",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }        
      }
    },
    methods: {
      LoadAll() {
        this.$bus.$emit("AllImageLoad")
      },
      itemClick() {
        this.$router.push("/detail/" + this.goodsItem.iid)
      }
    }
  }
</script>
<style scoped>
  .GoodsListItems{
    width:45%;
    margin:10px 0;
  }
  .GoodsListItems img{
    width:100%;
    border-radius:5px;
  }
  .goods-text{
    font-size:12px;
    color:grey;
    padding:2px;
  }
    .goods-text p {
      margin: 5px 0;
      line-height: 20px;
      margin-bottom: 10px;
    }
    .goods-text .goods-price {
      color:pink;
      margin-right:50px;
    }
</style>
