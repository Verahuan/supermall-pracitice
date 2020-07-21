<template>
  <div class="tabControl" >
    <div v-for="(item,index) in titles" class="tabControlItem" :class="{active:index===currentIndex}" @click="itemClick(index)" >
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      } 
    },
    data(){
      return{
        currentIndex:0
    }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit("tabClick",index)
      }
    }
  }

</script>
<style scoped>
  .tabControl{
    display:flex;
    justify-content:space-around;
  }
  .tabControlItem{
    height:44px;
    line-height:44px;
  }
  .active {
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-high-text);
  }

</style>
