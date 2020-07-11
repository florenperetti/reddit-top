<template>
  <div id="app">
    <Drawer />
    <MainPost />
  </div>
</template>

<script>
import { fetchTopPosts } from './api/redditApi.js'
import Drawer from './components/Drawer'
import MainPost from './components/MainPost'

export default {
  name: 'App',
  components: {
    Drawer,
    MainPost
  },
  async created () {
    console.log(await fetchTopPosts())
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  width: 100%;
  height: 100vh;
}
</style>
