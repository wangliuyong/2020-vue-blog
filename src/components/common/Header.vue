<template>
  <div class="header">
   <template>
      <router-link to="/"><h1>Let's share</h1></router-link>
      <p>精品博客汇聚</p>
      <div class="btns">
        <router-link to="/login"><el-button >立即登录</el-button></router-link>
        <router-link to="/register"><el-button>注册账号</el-button></router-link>
      </div> 
    </template>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
