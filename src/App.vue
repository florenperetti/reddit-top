<template>
  <vue-drawer-layout
    id="app"
    ref="drawer"
    :drawer-width="350"
    :backdrop="false"
  >
    <aside class="drawer-content" slot="drawer">
      <Drawer
        :posts="posts"
        @dismiss-post="dismissPost"
      />
    </aside>
    <main slot="content">
      <MainPost />
    </main>
  </vue-drawer-layout>
</template>

<script>
import Drawer from './components/Drawer'
import MainPost from './components/MainPost'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Drawer,
    MainPost
  },
  methods: {
    ...mapActions({
      fetchPosts: 'posts/fetchPosts',
      dismissPost: 'posts/dismissPost'
    })
  },
  computed: {
    ...mapGetters({
      posts: 'posts/getPostsToShow'
    })
  },
  created () {
    this.fetchPosts()
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

// reset buttons styles
button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
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
