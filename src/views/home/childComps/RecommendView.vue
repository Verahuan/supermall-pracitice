<template>
  <div class="recommend">
    <div v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>

  </div>
</template>
<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>
<style scoped>
  .recommend{
    display:flex;
    text-align:center;
  }
  .recommend a img{
    width:80%;
    margin-bottom:2px;
  }
    .recommend{
     border-bottom:8px solid #eee;
    }
</style>
