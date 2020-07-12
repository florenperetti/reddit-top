<template>
  <div v-if="!currentPost">Swipe to open the menu!</div>
  <div v-else id="main">
    <h1>{{currentPost.author}}</h1>
    <img
      v-if="currentPost.thumbnail"
      :src="currentPost.thumbnail"
      @click="handleImageClick"
    >
    <h3>{{currentPost.title}}</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainPost',
  props: {
    post: {
      type: Object
    }
  },
  computed: {
    ...mapState({
      currentPost: state => state.posts.current
    })
  },
  methods: {
    handleImageClick () {
      if (this.currentPost.image) {
        window.open(this.currentPost.image)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#main {
  flex: 1 1 auto;
  padding: 16px;

  img {
    cursor: pointer;
  }
}
</style>
