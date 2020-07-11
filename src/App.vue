<template>
  <div id="app">
  </div>
</template>

<script>
import { fetchTopPosts } from './api/redditApi.js'

export default {
  name: 'App',
  components: {
  },
  async created () {
    console.log(await fetchTopPosts())
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
