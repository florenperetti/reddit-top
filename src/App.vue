<template>
  <vue-drawer-layout
    id="app"
    ref="drawer"
    :drawer-width="300"
    :backdrop="false"
  >
    <aside class="drawer-content" slot="drawer">
      <Drawer />
    </aside>
    <main slot="content">
      <MainPost />
    </main>
  </vue-drawer-layout>
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
  data () {
    return {
      posts: []
    }
  },
  async created () {
    const response = await fetchTopPosts()
    this.post = response.data.children
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
  height: 100vh;

  .drawer-content {
    height: 100vh;
  }
}
</style>
