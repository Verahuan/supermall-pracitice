<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="getPosition"
            :pull-up-load="true"
            @pullingUp="LoadMore"
            >
      <home-swiper :banners="banners"></home-swiper>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView></FeatureView>
      <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
      <GoodsList :goods="showGoods"></GoodsList>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
  import NavBar from "components/common/navbar/NavBar"

  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView"

  import TabControl from "components/content/tabControl/TabControl"
  import GoodsList from "components/content/goods/GoodsList"
  import Scroll from "components/common/scroll/Scroll"
  import BackTop from "components/content/backTop/BackTop"

  import {
    getHomeMultidata,
    getHomeGoods
  } from "network/home"
import { clearTimeout } from "timers";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          "pop": {page:0,list:[]},
          "new": {page:0,list:[]},
          "sell": {page:0,list:[]},
        },
        currentType: "pop",
        isShowBackTop: false,
      }       
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods("pop")
      this.getHomeGoods("sell")
      this.getHomeGoods("new")
    },
    mounted() {
      this.$bus.$on("AllImageLoad", () => {
        this.$refs.scroll.scroll.refresh()
      })
    },
    methods: {
      /*防抖动*/
      debounce(func, delay) {
        let timer=null;
        return function () {
          let context = this;
          let arg = arguments;
          if (timer) clearTimeout(timer);
          setTimeout(function (){
            func.apply(context,arg)
          },delay)
        }
      },
      /*事件监听相关的方法*/
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = "pop"
            break
          case 1:
            this.currentType = "new"
            break
          case 2:
            this.currentType = "sell"
            break
        }

      },
      backTop() {
        this.$refs.scroll.scrollTo(0, 0, 1500)
      },
      getPosition(position) {
        this.isShowBackTop = (position.y < -1000)
      },
      LoadMore() {
        this.getHomeGoods(this.currentType)

      },

      /*请求数据相关方法*/

      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },

      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.scroll.finishPullUp()
        })
      },
    },

  }
</script>
<style scoped>
  #home{
    position:relative;
    height:100vh;
    margin-right:0px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
  .content{
    overflow:hidden;
    position:absolute;
    top:44px;
    bottom:56px;
  }

</style>
