<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div> 

</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }

    },
    data() {
      return {
        scroll: null
      }
    },
    methods: {
      scrollTo(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time)
      }
    },
    mounted() {
      //document.querySelector(".wrapper")获取wrapper方式不太好
      //在Vue中想要明确拿到某一个元素，为该元素绑定一个ref
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      this.scroll.on("scroll", (position) => {
      this.$emit("scroll",position)
      })
      this.scroll.on("pullingUp",()=>{
        this.$emit("pullingUp")
      })
  }
  }
</script>
<style scoped>

</style>
