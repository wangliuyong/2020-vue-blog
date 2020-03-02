<template>
  <div id="app">
    <Header id="header"></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/common/Header'
import Footer from './components/common/Footer'

export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
