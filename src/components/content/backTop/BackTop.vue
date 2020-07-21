<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" />
  </div>
</template>
<script>
  export default {
    name: "BackTop"
  }
</script>
<style scoped>
  .backtop {
    position:fixed;
    bottom:56px;
    right:-30px;
  }
  .backtop img{
    width:50%;
    height:50%;
  }
</style>
