<template>
  <vue-drawer-layout
    id="app"
    ref="drawer"
    :drawer-width="350"
    :backdrop="false"
    :class="{ 'drawer-layout--open': isDrawerOpen }"
    @slide-start="handleSlideStart"
    @slide-end="handleSlideEnd"
  >
    <aside class="drawer-content" slot="drawer">
      <Drawer :preventPostClick="preventPostClick" />
    </aside>
    <main class="main-content" slot="content">
      <MainPost />
    </main>
  </vue-drawer-layout>
</template>

<script>
import { mapActions } from 'vuex'
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
      isDrawerOpen: false,
      preventPostClick: false
    }
  },
  created () {
    this.fetchPosts()
  },
  methods: {
    ...mapActions({
      fetchPosts: 'posts/fetchPosts'
    }),
    handleSlideStart (visible) {
      this.preventPostClick = true
    },
    handleSlideEnd (visible) {
      this.isDrawerOpen = visible
      this.preventPostClick = false
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
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
}

.drawer-layout {
  .drawer-content {
    height: 100vh;
  }

  .main-content {
    max-width: 800px;
    margin: 0 auto;
  }

  &.drawer-layout--open {
    .main-content {
      @media all and (max-width: 1470px) {
        width: calc(100vw - 350px);
        margin-left: auto;
        margin-right: 0;
      }
      @media all and (max-width: 600px) {
        width: 100vw;
      }
    }
  }
}

</style>
