<template>
  <div class="drawer">
    <div class="drawer__header">Top posts</div>
    <InifiniteScroll ref="scroller" class="drawer__scroller" @scroll-end="handleScrollEnd">
      <transition-group name="list" tag="div" class="drawer__scroller-inner">
        <Post
          v-for="post in posts"
          class="list-item"
          :key="post.name"
          :post="post"
          @dismiss-post="handleDismissPost"
          @view-post="handleViewPost"
        />
      </transition-group>
    </InifiniteScroll>
    <div class="drawer__footer">
      <button @click="handleDismissAllPosts" class="drawer__dismiss-button">Dismiss All</button>
    </div>
  </div>
</template>

<script>
import Post from './Post'
import { mapActions, mapGetters } from 'vuex'
import InifiniteScroll from './InifiniteScroll'

export default {
  name: 'Drawer',
  components: {
    Post,
    InifiniteScroll
  },
  props: {
    preventPostClick: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      posts: 'posts/getPostsToShow'
    })
  },
  methods: {
    ...mapActions({
      dismissPost: 'posts/dismissPost',
      dismissAllPosts: 'posts/dismissAllPosts',
      fetchPosts: 'posts/fetchPosts',
      viewPost: 'posts/viewPost'
    }),
    handleDismissAllPosts () {
      this.$refs.scroller.$el.scrollTop = 0
      this.dismissAllPosts()
      this.handleScrollEnd()
    },
    handleDismissPost (name) {
      if (this.preventPostClick) {
        return
      }
      this.dismissPost(name)
    },
    handleViewPost (post) {
      if (this.preventPostClick) {
        return
      }
      this.viewPost(post)
    },
    handleScrollEnd () {
      this.fetchPosts(true)
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer {
  background-color: #212121;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;

  &__header,
  &__dismiss-button {
    height: 32px;
    text-align: center;
    padding: 8px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  &__dismiss-button {
    display: block;
    width: 100%;
  }

  .drawer__scroller {
    background-color: #111111;
    flex-grow: 1;
    overflow-y: auto;
  }
  .drawer__scroller--inner {
    flex-grow: 1;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all .5s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
