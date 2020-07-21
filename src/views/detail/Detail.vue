<template>
  <div id="detail">
    <!--导航栏
        轮播图数据
        -->
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>

</template>
<script>
  import DetailNavBar from "views/detail/childComps/DetailNavBar"
  import DetailSwiper from "./childComps/DetailSwiper"

  import { getDetail, Goods } from "network/detail"

  export default {
    name: "Detail",
    data() {
      return {
        iid: "",
        //轮播图数据
        topImages: [],
        goods: null


      }
    },
    components: {
      DetailNavBar,
      DetailSwiper
    },
    created() {
      this.iid = this.$route.params.iid

      getDetail(this.iid).then(res => {

        const data = res.result
        this.topImages = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        console.log(this.goods)


      })    
    }
  }
</script>
<style scoped>

</style>
